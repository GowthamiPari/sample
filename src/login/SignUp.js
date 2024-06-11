import React, { useState } from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {faUser,faLock,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SignUp = () => {
    const[initialValues,setValues]=useState({signup_firstname: "", signup_lastname: "", signup_email: "", signup_password: ""})
    const validationSchema = Yup.object({
        signup_firstname:Yup.string().required('Required Field'),
        signup_lastname:Yup.string().required('Required Field'),
        signup_email:Yup.string().required('Required Field'),
        signup_password:Yup.string().required('Required Field')
    })
 const onSubmit = (values) => {}
 const navigate = useNavigate()
 const handleClick = () => {
    navigate('/signUp')
 }
  return (
<div className='SignUp_box'> 
    
    <div className="container">
    <h1> SignUp</h1>
       <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({values,handleSubmit}) => ( <Form>
            <div className="signup_firstname">
                {/* <label htmlFor="username" onChange={handleChange} className="input-label">Username</label> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                <div><FontAwesomeIcon icon={faUser}/></div>
                <Field id = "signup_firstname" name="signup_firstname" type="text" value={values.firstname} placeholder="Enter Firstname"/>
                 <ErrorMessage name = "signup_firstname"component="div" className='error'/> 
            </div>
            <div className="signup_lastname">
                {/* <label htmlFor="username" onChange={handleChange} className="input-label">Username</label> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                <div><FontAwesomeIcon icon={faUser}/></div>
                <Field id = "signup_lastname" name="signup_lastname" type="text" value={values.lastname} placeholder="Enter Lastname"/>
                 <ErrorMessage name = "signup_lastname"component="div" className='error'/> 
            </div>
            <div className="signup_email">
                {/* <label htmlFor="username" onChange={handleChange} className="input-label">Username</label> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                <div><FontAwesomeIcon icon={faEnvelope}/></div>
                <Field id = "signup_email" name="signup_email" type="email" value={values.email} placeholder="Enter Email"/>
                 <ErrorMessage name = "signup_email"component="div" className='error'/> 
            </div>
            <div className="signup_password">
                {/* <label htmlFor="password" onChange={handleChange} className="input-label">Password</label> */}
                <div><FontAwesomeIcon icon={faLock} /></div>
                <Field id = "signup_password" name="signup_password" type="password" value={values.password} placeholder="Enter Password"/>
                <ErrorMessage name = "signup_password"component="div" className='error'/>
            </div>
            <div className='signUp'>
            <button type ="submit" className="signUp" onClick={() => {console.log(values)}} onSubmit={handleSubmit}>SignUp</button>
            </div> 
        </Form>

        )}
       </Formik>
       </div>
       </div>
        )
    }
    
    export default SignUp