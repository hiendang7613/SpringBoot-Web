import React ,{ useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CSelect,
  CInput,
  CLabel,
  CCardFooter,
  CButton

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import moment from 'moment'
import CommentService from "../../api/service/CommentService.js"
import { useFormik} from "formik";
  const Category =  (props)  =>  {

  const [data, setData]=useState([])
   let {content,status,newId}=data
  const id =props.match.params.id


  const formik = useFormik({
    initialValues:{content,status,newId},
    enableReinitialize: true,
     onSubmit: values => {onSubmit(values)},
    //  onSubmit: values => {
    //    alert(JSON.stringify(values, null, 2));

    //  },
  });


useEffect(() => {
  function getCommentData(){
    if(id !== '-1'){
      CommentService.retrieveComment(id).then((response) => {
      setData(response.data);
    })
  }

  }
  getCommentData()

  }, [id])

  function onSubmit(values){
    let todo={
      id:id,
      content:values.content,
      status: values.status || 1,
      newId: values.newId,


    }
    if(id === '-1'){
      CommentService.createComment(todo)
     .then(() => props.history.push("/admin/comments"))
    }else{
      CommentService.updateCommenty(id,todo)
    .then(() => props.history.push('/admin/comments'))
    }
  }

  return (
    <>
  { id !== '-1' ?(
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Comment id: {id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    data&&
                     (
                       <>
                        <tr key={data.id}>
                        <td>Id</td>
                        <td><strong>{data.id}</strong></td>
                        </tr>

                        <tr >
                        <td>Content</td>
                        <td><strong>{data.content}</strong></td>
                        </tr>
                        <tr >
                        <td>NewId</td>
                        <td><strong>{data.newId}</strong></td>
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
  ):""}
    <CRow>
        <CCol xs="12" md="12" >
          <CCard>
          <CForm action="" method="post" onSubmit={formik.handleSubmit} className="form-horizontal">
            <CCardHeader>
              Form Category
              <small> id:{id}</small>
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="content">Content</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="content" name="content" placeholder="content" onChange={formik.handleChange}
             value={formik.values.content|| ""} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="newId">NewId</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="newId" name="newId" placeholder="newId" onChange={formik.handleChange}
             value={formik.values.newId|| ""} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="status" id="status" onChange={formik.handleChange} value={`${formik.values.status}`|| "1"}>
                      <option value="1">Active</option>
                      <option value="2">Pending</option>
                      <option value="3">Banned</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>



            </CCardBody>
            <CCardFooter>
              <CButton className="" type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>

            </CCardFooter>
            </CForm>
          </CCard>

        </CCol>

      </CRow>
</>

  )
}

export default Category
