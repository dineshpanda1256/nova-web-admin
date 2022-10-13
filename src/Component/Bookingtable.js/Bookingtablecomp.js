import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import "./Bookingtablecomp.css";

export default function Bookingtablecomp() {
  return (
    <div>
        <Container>
            <Row>
                <Col id="recentbookingcard1" >
                <Row id="recentbookingcard3" >
                <Col>Recent Bookings</Col>
                </Row>
                <Row >
                    <Col id="recentbookingcard4" md="1" xs="1">1</Col>
                    <Col id="recentbookingcard2">Long Life Lab</Col>
                    <Col id="recentbookingcard2">10:45:16 AM</Col>
                    <Col id="recentbookingcard2">9876543210</Col>
                    <Col id="recentbookingcard2">Patia, Bhubneswer</Col>
                </Row>
                <Row >
                    <Col id="recentbookingcard4" xs="1" md="1">2</Col>
                    <Col id="recentbookingcard2">Long Life Lab</Col>
                    <Col id="recentbookingcard2">10:45:16 AM</Col>
                    <Col id="recentbookingcard2">9876543210</Col>
                    <Col id="recentbookingcard2">Patia, Bhubneswer</Col>
                </Row>
                <Row >
                    <Col id="recentbookingcard4" xs="1" md="1">3</Col>
                    <Col id="recentbookingcard2">Long Life Lab</Col>
                    <Col id="recentbookingcard2">10:45:16 AM</Col>
                    <Col id="recentbookingcard2">9876543210</Col>
                    <Col id="recentbookingcard2">Patia, Bhubneswer</Col>
                </Row>
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}
