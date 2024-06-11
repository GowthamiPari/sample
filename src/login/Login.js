import React, { useState } from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Login = () => {
  const [initialValues,setValues] = useState({username: "", password: ""})
  const validationSchema = Yup.object({
    username:Yup.string().required('Required Field'),
    password:Yup.string().required('Required Field')
  })
 const onSubmit = (values) => {}
 const navigate = useNavigate()
 const handleClick = () => {
    navigate('/signUp')
 }
  return (
    <div className='login_box'> 
    
    <div className="container">
    <h1> Login </h1>
       <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({values,errors,handleSubmit}) => ( <Form>
            
            <div className="container_Username">
                {/* <label htmlFor="username" onChange={handleChange} className="input-label">Username</label> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                <div><FontAwesomeIcon icon={faUser}/></div>
                <Field id = "username" name="username" type="text" value={values.username} placeholder="Enter Username"/>
                <ErrorMessage name = "username"component="div" className='error'/> 
            </div>
            <div className="container_Password">
                {/* <label htmlFor="password" onChange={handleChange} className="input-label">Password</label> */}
                <div><FontAwesomeIcon icon={faLock} /></div>
                <Field id = "password" name="password" type="password" value={values.password} placeholder="Enter Password"/>
                <ErrorMessage name = "password"component="div" className='error'/>
            </div>
            <div className='container_button'>
            <button type="submit" className="submit-button" onClick={() => {console.log(values)}} onSubmit={handleSubmit}>Login</button>
            <button  className="signUp-button" onClick={handleClick}>SignUp</button>
            </div> 
        </Form>
        )}
       </Formik>
       </div>
       </div>
    
  )
}

export default Login