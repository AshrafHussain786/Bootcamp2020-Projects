import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';

function FormikFormWithYup() {    
    const formik = useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: (values) => {
        console.log(values)
        // submit form
      },
      validationSchema: yup.object({
        email: yup.string().email().required('This field is required.'),
        password: yup.string()
          .min(6, 'Password is too short.')
          .max(12, 'Password is too long.')
          .required('This field is required.')
      })
    })
    return (
      <div>
        <h3><u>Formik Form with Yup</u></h3>
        <form onSubmit={formik.handleSubmit}>
          <label>
            Enter Email
            <input type="text" id="email"
              onChange={formik.handleChange}
              placeholder="Enter email ...."
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
              onChange={formik.handleChange}
              placeholder="Enter password ...."
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
  
  export default FormikFormWithYup;