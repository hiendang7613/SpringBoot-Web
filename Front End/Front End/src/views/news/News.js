import React, { useState, useEffect } from 'react'
import { useHistory, useLocation,Link } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CLink,
  CCollapse,
  CButton

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import moment from 'moment'
import NewService from "../../api/service/NewService.js"

const News = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [data, setData]=useState([])
  const [message, setMessage]=useState()
  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/news?page=${newPage}`)
  }
  useEffect(() => {
    getNewData()

  }, [])
  function deleteClicked(id) {

    NewService.deleteNew(id).then((response) => {
      setMessage(`Delete of new ${id} successful`);
      getNewData()
    });
  }
  function getNewData(){
    const dataUsers=[]
    NewService.retrieveAllNews().then((response) => {
      console.log(response.data.listResult)
      response.data.listResult.map((row)=>{
        let rowTable={
        id:`${row.id}`,
        title:`${row.title}`,
        status:`${row.status}`,
        description:`${row.shortDescription}`,
        createdBy:`${row.createdBy}`,
        createdDate:`${moment(row.createdDate).format("YYYY-MM-DD")}`,

      }
      dataUsers.push(rowTable);
      })
     setData(dataUsers);
    })
    .catch((err)=>{
      alert(err.message);
    });
  }
  useEffect(() => {
    currentPage !== page && setPage(currentPage)

  }, [currentPage, page])

  const [details, setDetails] = useState([])
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  const getBadge = (status)=>{
    switch (status) {
      case "1": return 'success'
     // case 'Inactive': return 'secondary'
      case "2": return 'warning'
      case "3": return 'danger'
      default: return 'primary'
    }
  }
  const getNameBadge = (status)=>{
    switch (status) {
      case "1": return 'Active'
     // case 'Inactive': return 'secondary'
      case "2": return 'Pending'
      case "3": return 'Banned'
      default: return 'None'
    }
  }

  const fields = [
    { key: 'title', _style: { width: '30%'} },
    { key: 'description', _style: { width: '30%'} },
    'createdDate',
    { key: 'status', _style: { width: '10%'}},

    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]


  return (

    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
          <CRow>
          <CCol lg={10}>
            <h3>News</h3>
            <small className="text-muted"></small>
          </CCol>
          <CCol lg={2} className="text-left">
            <CButton className="text-left" color="info">
                  <CLink to={`/admin/news/-1`} className="text-white" >
                   CREATE
                  </CLink>
            </CButton>
          </CCol>
          </CRow>
          </CCardHeader>

          <CCardBody>
          {message && (
          <div className="alert alert-success">{message}</div>
        )}
          <CDataTable
       onRowClick={(item, index,detailsClick) => {
         console.log(detailsClick);
         if(detailsClick!=="show_details"&&detailsClick!=="details")
         history.push(`/admin/news/${item.id}`);

      }}
      items={data}
      fields={fields}
      columnFilter
      tableFilter
      footer={false}
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination

      scopedSlots = {{
        'status':
          (item)=>(
            <td>
              <CBadge color={getBadge(item.status)}>
                {getNameBadge(item.status)}
              </CBadge>
            </td>
          ),
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={()=>{toggleDetails(index)}}
                >
                  {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
              )
          },
        'details':
            (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>
                    {item.name}
                  </h4>
                  <p className="text-muted">New since: {item.registered}</p>
                  <CButton size="sm" color="success" onClick={()=>{history.push(`/admin/news/${item.id}`)}}>

                  <CIcon name="cil-magnifying-glass" alt="Details" />

                  </CButton>

                  <CButton size="sm" color="danger" className="ml-1" onClick={()=> {
                    toggleDetails(index);
                    deleteClicked(item.id)}}>
                  <CIcon name="cil-trash" alt="Delete" />
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          }
      }}
    />
          </CCardBody>
        </CCard>


      </CCol>
    </CRow>
  )
}

export default News
