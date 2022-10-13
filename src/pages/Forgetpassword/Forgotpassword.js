import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Forgotpassword.css";

export default function Forgotpassword() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div id="forgot1">
              <Row>
                <Col></Col>
                <Col xs={10} md={10}>
                  <Form.Control type="text" placeholder="Userid" id="forgot2" />
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col xs={1} md={1}></Col>
                <Col id="forgot5" xs={6} md={3}>
                  Phone number
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col xs={1} md={1}></Col>
                <Col xs={10} md={4}>
                  <Form.Control type="text" placeholder="+91  |" id="forgot2" />
                </Col>
                <Col ></Col>

                <Col xs={12} md={1} id="forgot7">
                  OTP
                </Col>

                <Col xs={1} md={1}></Col>
                <Col>
                  <Form.Control type="text" id="forgot9" />
                </Col>
                <Col>
                  <Form.Control type="text" id="forgot9" />
                </Col>
                <Col>
                  <Form.Control type="text" id="forgot9" />
                </Col>
                <Col>
                  <Form.Control type="text" id="forgot9" />
                </Col>
                <Col xs={1} md={0}></Col>

                <Col md={1}></Col>
              </Row>

              <Row id="forgot6">
                <Col></Col>
                <Col md={10} xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter new Password"
                    id="forgot3"
                  />
                </Col>
                <Col></Col>
              </Row>
              <Row id="forgot6">
                <Col></Col>
                <Col md={10} xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="Confirm Password"
                    id="forgot3"
                  />
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md={10} xs={10}>
                  <Button variant="dark" id="forgot4">
                    Login
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
