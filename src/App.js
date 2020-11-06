import React from "react";
import FormikForm from "./FormikForm";
import FormikFormWithYup from "./FormikFormWithYup";
import StepperComponent from "./Stepper";
import './App.css';

function App(){
    return (
      <div className="App">           
          <FormikForm />
          <hr />
          <FormikFormWithYup /> 
          <hr />    
          <StepperComponent />         
      </div>
    );
  }

export default App;