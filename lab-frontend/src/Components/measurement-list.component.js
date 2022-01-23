import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import MeasurementTableRow from "./MeasurementTableRow";

const MeasurementList = () => {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/measurements/")
      .then(({ data }) => {
        setMeasurements(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return measurements.map((res, i) => {
      return <MeasurementTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Unit</th>
            <th>Upper Limit</th>
            <th>Lower Limit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default MeasurementList;