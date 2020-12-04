import React, { lazy } from 'react'
import {

  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCardGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTabContent,
  CTabPane,
  CTabs,
  CNav,
  CNavItem,
  CNavLink
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import DashboardService from '../../api/service/DashboardService.js'
import { format } from "date-fns";

import { useState,useEffect} from 'react'
import MainChartExample from '../charts/MainChartExample.js'
import moment from 'moment'
import { freeSet } from '@coreui/icons'
import DayVisitsReport from "../../views/dashboard/dayVisitReport";
import ChartBarSimple from '../charts/ChartBarSimple.js';
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))


const Dashboard = (props) => {
  const [modal, setModal] = useState(false)
  const [traceList, setTraceList] = useState([]);
  const [selectedTrace, setSelectedTrace] = useState();
  const [http200Traces, setHttp200Traces] = useState([]);
  const [http400Traces, setHttp400Traces] = useState([]);
  const [http404Traces, setHttp404Traces] = useState([]);
  const [http500Traces, setHttp500Traces] = useState([]);
  const [httpDefaultTraces, setHttpDefaultTraces] = useState();



  useEffect(() => {
    getTraces();

  },[])

  function getTraces(){
    DashboardService.getHttpTraces().then((response) => {

     setTraceList(response.data.traces);

     processTraces(response.data.traces);

    })
    .catch((err)=>{
      alert(err.message);
    });
  }



   function processTraces(traces){
     const status200=[];
     const status400=[];
     const status404=[];
     const status500=[];
    traces.map(trace => {
      switch(trace.response.status){
        case 200:
        status200.push(trace);
        break;
        case 400:
          status400.push(trace);
        break;
        case 404:
          status404.push(trace);
        break;
        case 500:
        status500.push(trace);
        break;
      }
    })
    setHttp200Traces(status200);
    setHttp400Traces(status400);
    setHttp404Traces(status404);
    setHttp500Traces(status500);

  }
  function onSelectTrace(trace){
    setSelectedTrace(trace);
    document.getElementById('trace-modal').click();
  }


  return (
    <>
      <WidgetsDropdown status200={`${http200Traces.length}`} status400={`${http400Traces.length}`} status404={`${http404Traces.length}`} status500={`${http500Traces.length}`}/>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Traffic</h4>
              <div className="small text-muted">{format(new Date(), 'd-MM-yyyy')}</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>

          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <CCardGroup columns className = "cols-2" >
      <CCard>
        <CCardHeader>
          Bar Chart
          <div className="card-header-actions">
            <a href="http://www.chartjs.org" className="card-header-action">
              <small className="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CChartBar
            type="bar"
            datasets={[
              {
                label: 'Status 200',
                backgroundColor: '#2eb85c',
                data: [`${http200Traces.length}`]
              },
              {
                label: 'Status 400',
                backgroundColor: '#3399ff',
                data: [`${http400Traces.length}`]
              },
              {
                label: 'Status 404',
                backgroundColor: '#f9b115',
                data: [`${http404Traces.length}`]
              },
              {
                label: 'Status 500',
                backgroundColor: '#e55353',
                data: [`${http500Traces.length}`]
              }

            ]}


            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Pie Chart
        </CCardHeader>
        <CCardBody>
          <CChartPie
            type="pie"
            datasets={[
              {
                backgroundColor: [
                  '#2eb85c',
                  '#3399ff',
                  '#f9b115',
                  '#e55353'
                ],
                data: [`${http200Traces.length}`, `${http400Traces.length}`, `${http404Traces.length}`, `${http500Traces.length}`]
              }
            ]}
            labels={['Status 200', 'Status 400', 'Status 404', 'Status 500']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
      </CCardGroup>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              HTTPS Traces
            </CCardHeader>
            <CCardBody>


              <br />



              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>

                    <th>Time Stamp</th>
                    <th className="text-center">Method</th>
                    <th className="text-center">Time Taken(ms)</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">URI</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    traceList.map((trace,index) => (
                      <tr key={index}>
                      <td onClick={()=>{onSelectTrace(trace)}}>
                        <div>{moment(trace.timestamp).format("YYYY-MM-DD h:mm:ss")}</div>
                      </td>
                      <td onClick={()=>{onSelectTrace(trace)}} className="text-center">
                       {trace.request.method}
                      </td>
                      <td onClick={()=>{onSelectTrace(trace)}} className="text-center">
                      {trace.timeTaken}
                      </td>
                      <td onClick={()=>{onSelectTrace(trace)}} className="text-center">
                      {
                        {
                          200: (<span className="badge badge-success">200</span>),
                          400: (<span className="badge badge-info">400</span>),
                          404: (<span className="badge badge-warning">404</span>),
                          500: (<span className="badge badge-danger">500</span>),
                        }[trace.response.status]
                      }

                      </td>
                      <td onClick={()=>{onSelectTrace(trace)}} className="text-center">
                      {trace.request.uri}
                      </td>
                      <td onClick={()=>{onSelectTrace(trace)}}>
                      <button className="btn btn-outline-info">{<CIcon content={freeSet.cilMagnifyingGlass}  ></CIcon>}</button>
                      </td>
                    </tr>
                    ))
                  }


                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
            <CButton
              onClick={() => setModal(!modal)}
              className="mr-1"
              color="secondary"
              id="trace-modal"
              hidden
              >Launch demo modal</CButton>
              <CModal
              show={modal}
              onClose={setModal}

              >
              <CModalHeader closeButton>
                <CModalTitle>HTTP Trace Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCard>

          <CCardBody>
            <CTabs>
              <CNav className="bg-light nav-pills rounded nav-fill mb-3" variant="tabs" >
                <CNavItem>
                  <CNavLink>
                  <CIcon content={freeSet.cilSitemap}/> Request
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <CIcon content={freeSet.cilListRich}/> Response
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>

                <CTabPane>
                  <br></br>
                <p><strong>Time Stamp:</strong>
                {selectedTrace?moment(selectedTrace.timestamp).format("YYYY-MM-DD h:mm:ss"):'' }
                </p>
                <p>
                  <strong>Time Taken(ms):</strong>
                  {selectedTrace?selectedTrace.timeTaken:''}
                </p>
                <p>
                  <strong>Request Method:</strong>
                   {selectedTrace?selectedTrace.request.method:''}
                </p>
                <p>
                  <strong>Remote Address:</strong>
                  {selectedTrace?selectedTrace.request.remoteAddress:''}
                </p>
                <p>
                  <strong>URI:</strong>
                 {selectedTrace?selectedTrace.request.uri:''}
                </p>
                <p>
                  <strong>Origin:</strong>
                   {selectedTrace?selectedTrace.request.headers['origin']:''}
                </p>
                <p>
                  <strong>User Agent (Web Client):</strong>
                   {selectedTrace?selectedTrace.request.headers['user-agent']:''}
                </p>
                </CTabPane>
                <CTabPane>
                  <br></br>
                <dl>
                  <dt>Status:</dt>
                  <dd>{selectedTrace?selectedTrace.response.status:''}</dd>
                </dl>
                <dl>
                  <dt>Date:</dt>
                  <dd>{selectedTrace?selectedTrace.response.headers['Date']:''}</dd>
                </dl>
                <dl>
                  <dt>Content Type:</dt>
                  <dd>{selectedTrace?selectedTrace.response.headers['Content-Type']:''}</dd>
                </dl>
                <p>
                  <strong>Server Allowed Origins:</strong>
                  {selectedTrace?selectedTrace.response.headers['Access-Control-Allow-Origin']:''}
                </p>
                </CTabPane>

              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
              </CModalBody>
              <CModalFooter>
                <CButton
                  color="secondary"
                  onClick={() => setModal(false)}
                >Cancel</CButton>
              </CModalFooter>
              </CModal>
    </>
  )
}

export default Dashboard
