import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const MeasurementForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    unit: Yup.string()
      .required("Required"),
    upper_limit: Yup.string()
      .required("Required"),
    lower_limit: Yup.string()
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <label>Name</label>
            <Field name="name" type="text"
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>unit</label>
            <Field name="unit" type="text"
                className="form-control" />
            <ErrorMessage
              name="unit"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>Upper Limit</label>
            <Field name="upper_limit" type="text"
                className="form-control" />
            <ErrorMessage
              name="upper_limit"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label>Lower Limit</label>
            <Field name="lower_limit" type="text"
                className="form-control" />
            <ErrorMessage
              name="lower_limit"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg"
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default MeasurementForm;