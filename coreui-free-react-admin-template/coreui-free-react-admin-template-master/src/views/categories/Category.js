import React ,{ useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputCheckbox,
  CLabel,
  CSelect,
  CCardFooter,
  CButton

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import moment from 'moment'
import CategoryService from "../../api/service/CategoryService.js"
import { useFormik} from "formik";
  const User =  (props)  =>  {

  const [data, setData]=useState([])
   let {name,code}=data
  const id =props.match.params.id

  
  const formik = useFormik({
    initialValues:{name,code},
    enableReinitialize: true,
     onSubmit: values => {onSubmit(values)},
    //  onSubmit: values => {
    //    alert(JSON.stringify(values, null, 2));

    //  },
  });


useEffect(() => {
  getCategoryData()

  }, [])

  function onSubmit(values){
    let todo={
      id:id,
      name:values.name,
      code:values.code,

    }
    if(id==-1){
      CategoryService.createCategory(todo)
     .then(() => props.history.push("/admin/categories"))
    }else{
      CategoryService.updateCategory(id,todo)
    .then(() => props.history.push('/admin/categories'))
    }
  }
    function getCategoryData(){

      CategoryService.retrieveCategory(id).then((response) => {
        setData(response.data);
      })


    }
  return (
    <>

    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            User id: {id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    data&&
                     (
                       <>
                        <tr key={data.id}>
                        <td>Name</td>
                        <td><strong>{data.name}</strong></td>
                        </tr>

                        <tr >
                        <td>Code</td>
                        <td><strong>{data.code}</strong></td>
                        </tr>



                        <tr >
                        <td>Created Date</td>
                        <td><strong>{moment(data.createdDate).format("YYYY-MM-DD")}</strong></td>
                        </tr>
                        <tr>
                        <td>Modified Date</td>
                        <td><strong>{moment(data.modifiedDate).format("YYYY-MM-DD")}</strong></td>
                        </tr>

                        </>
                      )

                  }
                </tbody>
              </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow>
        <CCol xs="12" md="12" >
          <CCard>
          <CForm action="" method="post" onSubmit={formik.handleSubmit} className="form-horizontal">
            <CCardHeader>
              Edit User
              <small> id:{id}</small>
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="name">Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="name" name="name" placeholder="name" onChange={formik.handleChange}
             value={formik.values.name|| ""} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="code">Code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="code" name="code" placeholder="code" onChange={formik.handleChange}
             value={formik.values.code|| ""} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>



            </CCardBody>
            <CCardFooter>
              <CButton className="" type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
            </CForm>
          </CCard>

        </CCol>

      </CRow>
</>

  )
}

export default User
