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
  CCollapse,
  CButton
} from '@coreui/react'
import moment from 'moment'
import UserService from "../../api/service/UserService.js"


const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [data, setData]=useState([])

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }
  useEffect(() => {
    getUserData()

  }, [])

  function getUserData(){
    const dataUsers=[]
    UserService.retrieveAllUsers().then((response) => {
      console.log(response.data.listUser);
      response.data.listUser.map((row)=>{
        let rowTable={
        id:`${row.id}`,
        name:`${row.fullName}`,
        registered:`${moment(row.createdDate).format("YYYY-MM-DD")}`,
        role:`${row.role[0].name}`,
        status: 'Pending'
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
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = [
    { key: 'name', _style: { width: '40%'} },
    'registered',
    { key: 'role', _style: { width: '20%'} },
    { key: 'status', _style: { width: '20%'} },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]
  const nameFilterTable = {

    label: 'Tìm',
    placeholder: 'Tên người dùng'

  }

  return (

    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Users
            <small className="text-muted"> example</small>
          </CCardHeader>

          <CCardBody>
          <CDataTable
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
                {item.status}
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
                    {item.username}
                  </h4>
                  <p className="text-muted">User since: {item.registered}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
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

export default Users
