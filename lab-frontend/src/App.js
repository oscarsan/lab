// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Switch,
    Route, Link } from "react-router-dom";
  
// Import other React Component
import CreateMeasurement from 
    "./Components/create-measurement.component";
import EditMeasurement from 
    "./Components/edit-measurement.component";
import MeasurementList from 
    "./Components/measurement-list.component";
  
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-measurement"} 
                  className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-measurement"} 
                    className="nav-link">
                    Create Measurement
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/measurement-list"} 
                    className="nav-link">
                    Measurement List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" 
                    component={CreateMeasurement} />
                  <Route path="/create-measurement" 
                    component={CreateMeasurement} />
                  <Route path="/edit-measurement/:id" 
                    component={EditMeasurement} />
                  <Route path="/measurement-list" 
                    component={MeasurementList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;