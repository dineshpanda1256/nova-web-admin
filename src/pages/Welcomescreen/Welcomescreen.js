import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Welcomescreen.css";
import { FcGoogle } from "react-icons/fc";
import nova from "../../asset/novalogo.png";

export default function Welcomescreen() {
  return (
    <div>
      <Container>
        <Row id="wel1">
          <Col></Col>
          <Col xs={12} md={12}>
            <div id="wel2">
              <div>
                <img src={nova} id="wel3" />
              </div>

              <div id="wel4">Patholab Panel</div>

              <Row id="wel7">
                <Col></Col>
                <Col md={4}>
                  <Form.Control type="text" placeholder="Email*" id="wel5" />
                </Col>
                <Col></Col>
              </Row>

              <Row id="wel7">
                <Col></Col>
                <Col md={4}>
                  <Form.Control type="text" placeholder="Password" id="wel5" />
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={4}>
                  <Button id="wel6" variant="dark">
                    login
                  </Button>
                </Col>
                <Col></Col>
              </Row>

              <div id="wel8">Register Your Lab Now</div>

              <div id="wel8">Forgot Password</div>
              
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
