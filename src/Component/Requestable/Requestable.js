import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import "./Requestable.css";

export default function Requestable() {
  return (
    <div>
        <Container>
            <Row>
                <Col id="newpatholabcard1" >
                <Row id="newpatholabcard3" >
                <Col>New Patholab Request</Col>
                </Row>
                <Row >
                    <Col id="newpatholabcard4" md="1" xs="1">1</Col>
                    <Col id="newpatholabcard2" >Long Life Lab</Col>
                    <Col id="newpatholabcard2">10:45:16 AM</Col>
                    <Col id="newpatholabcard2" >9876543210</Col>
                    <Col id="newpatholabcard2">Patia, Bhubneswer</Col>
                </Row>
                <Row >
                    <Col id="newpatholabcard4" xs="1" md="1">2</Col>
                    <Col id="newpatholabcard2">Long Life Lab</Col>
                    <Col id="newpatholabcard2">10:45:16 AM</Col>
                    <Col id="newpatholabcard2">9876543210</Col>
                    <Col id="newpatholabcard2">Patia, Bhubneswer</Col>
                </Row>
                <Row >
                    <Col id="newpatholabcard4" xs="1" md="1">3</Col>
                    <Col id="newpatholabcard2">Long Life Lab</Col>
                    <Col id="newpatholabcard2">10:45:16 AM</Col>
                    <Col id="newpatholabcard2">9876543210</Col>
                    <Col id="newpatholabcard2">Patia, Bhubneswer</Col>
                </Row>
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}
