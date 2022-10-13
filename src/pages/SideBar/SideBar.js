import Slidebar from "../Bar/Bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "../UserList/UserList";
import { Col, Container, Row } from "react-bootstrap";
import Dashboard from "../Dashboard/Dashboard";
import PatholabList from "../Patholab/Patholab";

function Side() {
  return (
    <div>
      <Container fluid>
        <Router>
          <Row>
            <Col md="2" xs="3">
              <Slidebar />
            </Col>
            <Col
              md="10"
              xs="9"
              style={{ backgroundColor: "aliceblue", paddingTop: "2rem" }}
            >
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="patholab" element={<PatholabList />} />
                <Route path="userlist" element={<UserList />} />
              </Routes>
            </Col>
          </Row>
        </Router>
      </Container>
    </div>
  );
}

export default Side;
