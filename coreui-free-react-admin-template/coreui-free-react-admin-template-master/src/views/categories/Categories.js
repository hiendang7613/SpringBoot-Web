import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
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
import CategoryService from "../../api/service/CategoryService.js"
import { freeSet } from '@coreui/icons'
const Categories = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [data, setData]=useState([])
  const [message, setMessage]=useState()
  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/categories?page=${newPage}`)
  }
  useEffect(() => {
    getCategoryData()

  }, [])
  function deleteClicked(id) {

    CategoryService.deleteCategory(id).then((response) => {
      setMessage(`Delete of category ${id} successful`);
      getCategoryData()
    });
  }
  function getCategoryData(){
    const dataUsers=[]
    CategoryService.retrieveAllCategories().then((response) => {

      response.data.map((row)=>{
        let rowTable={
        id:`${row.id}`,
        name:`${row.name}`,
        code:`${row.code}`,
        registered:`${moment(row.createdDate).format("YYYY-MM-DD")}`,

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

  const fields = [
    { key: 'name', _style: { width: '30%'} },
    { key: 'code', _style: { width: '30%'} },
    'registered',
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
            <h3>Categories</h3>
            <small className="text-muted"></small>
          </CCol>
          <CCol lg={2} className="text-left">
            <CButton className="text-left" color="info">
                  <CLink to={`/admin/categories/-1`} className="text-white" >
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
         history.push(`/admin/categories/${item.id}`);

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
                  <p className="text-muted">Category since: {item.registered}</p>
                  <CButton size="sm" color="success">
                  <CLink to={`/admin/categories/${item.id}`} className="text-white">
                  <CIcon name="cil-magnifying-glass" alt="Details" />
                  </CLink>
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

export default Categories
