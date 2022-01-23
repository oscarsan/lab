// CreateMeasirement Component for add new measurement

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import MeasurementForm from "./MeasurementForm";

// CreateMeasurement Component
const CreateMeasurement = (props) => {
  const [formValues, setFormValues] =
    useState({ name: '', unit: '', upper_limit: '' , lower_limit: '' })


  // onSubmit handler
  const onSubmit = measurementObject => {
    axios.post(
'http://localhost:4000/measurements/',
    measurementObject)
      .then(res => {
        if (res.status === 201){
          alert('Measurement successfully created');
          props.history.push("/measurement-list");
          }else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  };

  // Return Measurement form
  return(
    <MeasurementForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create measurement
    </MeasurementForm>
  );
};

// Export CreateMeasurement Component
export default CreateMeasurement