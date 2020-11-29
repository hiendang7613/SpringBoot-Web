import React ,{ useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CLabel,
  CSelect,
  CCardFooter,
  CButton

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import moment from 'moment'
import UserService from "../../api/service/UserService.js"
import { useFormik} from "formik";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';



const animatedComponents = makeAnimated();

  const User =  (props)  =>  {
    const selectedCheckboxes=[];
    const [selectedValue, setSelectedValue] = useState([]);
  const [data, setData]=useState([])
   let {email, jobTitle,fullName,phone,imageUrl,intro,status,userName,password,roleCode}=data
  const id =props.match.params.id

  const items = [
    { value: 'nguoi-dung', label: 'Nguoi dung' },
    { value: 'quan-ly', label: 'Quan ly' },
    { value: 'admin', label: 'Admin' }
  ]
  const formik = useFormik({
    initialValues:{email, jobTitle,fullName,phone,imageUrl,intro,status,userName,password,roleCode},
    enableReinitialize: true,
     onSubmit: values => {onSubmit(values)},
    //  onSubmit: values => {
    //    alert(JSON.stringify(values, null, 2));

    //  },
  });
console.log({email, jobTitle,fullName,phone,imageUrl,intro,status,userName,password,roleCode})

useEffect(() => {
  const  getUserData = () =>{
    if(id !== '-1'){
    UserService.retrieveUser(id).then((response) => {
      console.log(response.data);
      response.data.role.map((item)=>{
       selectedCheckboxes.push({value:item.code,label:item.name})
       return null
      })

      setData(response.data);
    })
  }
  }
    getUserData()
  }, [id])

  function onSubmit(values){
    let todo={
      id:id,
      userName:values.userName,
      password:values.password,
      email:values.email,
      jobTitle:values.jobTitle,
      fullName:values.fullName,
      phone:values.phone,
      imageUrl:values.imageUrl,
      intro:values.intro,
      status:values.status?values.status:1,
      roleCode:selectedValue
    }


    if(id==='-1'){
      UserService.createUser(todo)
     .then(() => props.history.push("/admin/users"))
    }else{
      UserService.updateUser(id,todo)
    .then( () => props.history.push('/admin/users'))
    }
  }
  const handleSelectChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);

  }


  return (
    <>
  { id !== '-1' ?(
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
                        <td>Username</td>
                        <td><strong>{data.userName}</strong></td>
                        </tr>

                        <tr >
                        <td>Full name</td>
                        <td><strong>{data.fullName}</strong></td>
                        </tr>
                        <tr >
                        <td>Phone</td>
                        <td><strong>{data.phone}</strong></td>
                        </tr>
                        <tr >
                          <td>Email</td>
                          <td><strong>{data.email}</strong></td>
                        </tr>
                        <tr >
                          <td>Role</td>
                          <td>
                        {
                          data.role &&
                          data.role.map((item)=>

                           (
                          <strong key={item.id}>"{item.name}" </strong>
                        ))
                        }
                        </td>
                        </tr>
                        <tr >
                        <td>Registed Date</td>
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
  ):""
    }
    <CRow>
        <CCol xs="12" md="12" >
          <CCard>
          <CForm action="" method="post" onSubmit={formik.handleSubmit} className="form-horizontal">
            <CCardHeader>
              Edit User
              <small> id:{id}</small>
            </CCardHeader>
            <CCardBody>



              {/* <CFormGroup >
                  <CCol xs="12" md="9">
                    <CInput type="hidden" id="text-input" name="text-input" value={match.params.id} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup> */}
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="userName">Username</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="userName" name="userName" placeholder="Username" onChange={formik.handleChange}
             value={formik.values.userName|| ""} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="password" name="password" placeholder="Password" onChange={formik.handleChange}
             value={formik.values.password|| ""} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="fullname">Full Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="fullName" name="fullName" placeholder="Full Name"
                    onChange={formik.handleChange} value={formik.values.fullName||""}
                      />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email">Email Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email" name="email" placeholder="Enter Email" autoComplete="email" onChange={formik.handleChange} value={formik.values.email|| ""}/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="imageUrl">Image Url</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="imageUrl" name="imageUrl" placeholder="link image" onChange={formik.handleChange} value={formik.values.imageUrl|| ""} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="phone">Phone</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="number" id="phone" name="phone" placeholder="Phone" onChange={formik.handleChange} value={formik.values.phone|| ""} />
                    <CFormText></CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="intro">Introduction</CLabel>
                  </CCol>
                   <CCol xs="12" md="9">
                    <CTextarea
                      name="intro"
                      id="intro"
                      onChange={formik.handleChange} value={formik.values.intro|| ""}
                      rows="9"
                      placeholder="Content..."
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect  custom name="status" id="status" onChange={formik.handleChange}  value={`${formik.values.status}`||"1"}>
                      <option  value="1">Active</option>
                      <option  value="2">Pending</option>
                      <option  value="3">Banned</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3"><CLabel>Role</CLabel></CCol>
                  <CCol md="9">
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      defaultValue={selectedCheckboxes}
                       onChange={(e)=>handleSelectChange(e)}
                      isMulti
                      isClearable
                      options={items}
                    />
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
