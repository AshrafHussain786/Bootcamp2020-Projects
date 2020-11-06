import React from 'react'
import { useFormik } from "formik";

function FormikForm() {    
    const formik = useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: (values) => {
        console.log(values)
        // submit form
      },
      validate: (values) => {
        let error = {};
  
        if (!values.email)
          error.email = "Email is required"
        if (!values.password)
          error.password = "Password is required"
        return error;
      }
    })
    return (
      <div>
        <h3><u>Formik Form</u></h3>
        <form onSubmit={formik.handleSubmit}>
          <label>
            Enter Email Address
            <input type="text" id="email"
              placeholder="Enter email ...."
              onChange={formik.handleChange}
              value={formik.values.email} /> 
           
            {formik.errors.email ?
              <div className="error">{formik.errors.email}</div>
              : ""}
  
          </label>
          <br />
          <br />
  
          <label>
            Enter Password
            <input type="password" id="password"
                placeholder="Enter password ...."
              onChange={formik.handleChange}
              value={formik.values.password} /> 
              
            {formik.errors.password ?
              <div className="error">{formik.errors.password}</div>
              : ""
            }
  
          </label>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default FormikForm;
