import React from "react";
import { Col, Container, Form, Image, Row, Table } from "react-bootstrap";
import "./PatholabDetailsComp2.css";
import life from "../../asset/Life.png";
import { AiFillStar } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { IoTrashOutline } from "react-icons/io5";

export default function PatholabDetailsComp2() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col  id="patho1">
            <Row>
              <Col>
                <Image src={life} />
              </Col>
              <Col>
                <Row>
                  {" "}
                  <Col id="patho3">
                    Life Long Patho Lab <TbEdit id="pathoediticon" />
                  </Col>
                  <Col xs="4" md="1">
                    <IoTrashOutline id="patho5" />
                  </Col>
                </Row>
                <div style={{ flexDirection: "row", marginBottom: "0.7rem" }}>
                  <AiFillStar id="starIcon" />
                  <AiFillStar id="starIcon" />
                  <AiFillStar id="starIcon" />
                  <AiFillStar id="starIcon" />
                  <AiFillStar id="starIcon" />
                </div>
                <div id="patho2">Address : Patia.Bhubneswer -751024</div>
                <div id="patho2">Email Id : lifecrae @gmail.com</div>
                <div id="patho2">Phone Number : +91 9876543210</div>
                <div id="patho2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut.{" "}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
