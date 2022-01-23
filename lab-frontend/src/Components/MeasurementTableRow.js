import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MeasurementTableRow = (props) => {
  const { id, name, unit, upper_limit, lower_limit } = props.obj;
  console.log(props.obj);

  const deleteMeasurement = () => {
    axios.delete(
"http://localhost:4000/measurements/" + id).then((res) => {
        if (res.status === 200) {
          alert("Measurement successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went super wrong"));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{unit}</td>
      <td>{upper_limit}</td>
      <td>{lower_limit}</td>
      <td>
        <Link className="edit-link"
          to={"/edit-measurement/" + id}>
          Edit
        </Link>
        <Button onClick={deleteMeasurement}
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default MeasurementTableRow;