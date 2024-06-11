import React, { useState } from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Register = () => {
    const[initialValues,setValues]=useState({firstname: "", lastname: "", email: "", password: ""})
    const validationSchema = Yup.object({
        firstname:Yup.string().required('Required Field'),
        lastname:Yup.string().required('Required Field'),
        email:Yup.string().required('Required Field'),
        password:Yup.string().required('Required Field')
    })
    const onSubmit = (values) => {}
  return (
    <div className='Register_box'> 
    <div>
        <h1>Register</h1>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({values,handleChange,errors,handleSubmit}) => ( <Form>
            <div>
                <div className="container_firstname">
                    <label htmlFor= "firstname" onChange={handleChange} >FirstName</label>
                    <Field id = "firstname" name ="firstname" type ="text" value={values.name} placeholder="Enter FirstName"/>
                    <ErrorMessage name="firstname"/>   
                </div>
                <div className="container_lastname">
                    <label htmlFor="lastname" onChange={handleChange} >LastName</label>
                    <Field id="lastname" name="lastname" type ="text" value={values.lastname} placeholder ="Enter LastName"/>
                    <ErrorMessage name="lastname"/>
                </div>
                <div className="container_email">
                    <label htmlFor="email" onChange={handleChange} >Email</label>
                    <Field id="email" name="email" type ="email" value={values.email} placeholder ="Enter Email"/>
                    <ErrorMessage name ="email" />
                </div>
                <div className="container_password">
                    <label htmlFor="password" onChange={handleChange}>Password</label>
                    <Field id="password" name="password" type ="password" value={values.password} placeholder ="Enter Password"/>
                    <ErrorMessage name="password"/>
                </div>
                <button type="submit" className="submit-button" onClick={() => {console.log(values)}} onSubmit={handleSubmit}>Register</button>
            </div>
        </Form>
            )}

    </Formik>
    </div>
    </div>
  )
}

export default Register