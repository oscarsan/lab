// EditMeasurement Component for update Measurement data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import MeasurementForm from "./MeasurementForm";

// EditMeasurement Component
const EditMeasurement = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    unit: "",
    upper_limit: "",
    lower_limit: "",
  });

  //onSubmit handler
  const onSubmit = (measurementObject) => {
    axios
      .patch(
        "http://localhost:4000/measurements/" +  props.match.params.id,
          measurementObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Measurement successfully updated");
          props.history.push("/measurement-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went badly wrong"));
  };

  // Load data from server and reinitialize measurement form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/measurements/"
        + props.match.params.id
      )
      .then((res) => {
        const { name, unit, upper_limit, lower_limit } = res.data;
        setFormValues({ name, unit, upper_limit, lower_limit });
      })
      .catch((err) => console.log(err));
  }, []);

  // Return student form
  return (
    <MeasurementForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Measurement
    </MeasurementForm>
  );
};

// Export EditStudent Component
export default EditMeasurement;