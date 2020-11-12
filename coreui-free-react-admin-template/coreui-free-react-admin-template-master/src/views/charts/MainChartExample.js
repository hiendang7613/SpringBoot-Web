import React,{useState,useEffect }  from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils/src'
import GoogleService from '../../api/service/GoogleService.js';
import { formatDate } from "../../util";
const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
const brandDanger = getStyle('danger') || '#f86c6b'


const MainChartExample = attributes => {
  const [result, setResult] = useState([]);
  const [label, setLabel] = useState([]);
  const random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  useEffect(() => {
    getReportGA();

  },[])
  function getReportGA(){
    GoogleService.getVisitPerDay().then((response) => {

      setResult(GoogleService.displayResults(response));
      const labeltemp=[];
      GoogleService.displayResults(response).map((row)=>{
      labeltemp.push(formatDate(row.date));

    });
    setLabel(labeltemp);
    })
    .catch((err)=>{
      alert(err.message);
    });
  }

  const defaultDatasets = (()=>{
   // let elements = 4
    const data1 = []
    result.map((row)=>{
      data1.push(row.visits);

    });


    return [
      {
        label: 'User Visit',
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1
      }

    ]
  })()

  const defaultOptions = (()=>{
    return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(15 / 10),
              max: 15
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  )()

  // render
  return (
    <>

    <CChartLine
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={label}
    />
    </>
  )
}


export default MainChartExample
