import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Labregistration.css";
import { IoIosAddCircle } from "react-icons/io";
import novalogo from "../../asset/novalogo.png";

export default function Labregistration() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div id="lab16">
              <img src={novalogo} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container id="lab1">
        <Row>
          <Col md={12}>
            <div id="lab2">
              <Row>
                <Col>
                  <div id="lab4">LAB REGISTRATION PANEL</div>
                </Col>
              </Row>

              <Row>
                <Col></Col>
                <Col xs={12} md={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Lab full name * "
                    id="lab3"
                  />
                </Col>
                <Col xs={12} lg={2} md={2}>
                  <div id="lab13">
                    <label htmlFor="myfile">
                      Add logo
                      <IoIosAddCircle id="lab12" />
                      <input
                        type="file"
                        className="file"
                        id="myfile"
                        name="myfile"
                      />
                    </label>
                  </div>
                </Col>
                <Col ></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name * "
                    id="lab3"
                  />
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    placeholder="Years of Experience in General and Clinical Pathology* "
                    id="lab3"
                  />
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Select id="lab7">
                      <option>Lab Capacity </option>
                      <option>1</option>
                      <option>2</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={5}>
                  <Form.Control
                    type="text"
                    placeholder="Lab test timing, eg: 10.00AM - 7.00PM "
                    id="lab3"
                  />
                </Col>
                <Col md={5}>
                  <Form.Group className="mb-3">
                    <Form.Select id="lab7">
                      <option>Lab Capacity </option>
                      <option>1</option>
                      <option>1</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Lab registration number provided by govt * "
                    id="lab3"
                  />
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={10}>
                  <div>
                    <label id="lab14" htmlFor="myfile">
                      <IoIosAddCircle id="lab15" />
                      <input type="file" className="file" id="myfile" />
                    </label>
                  </div>
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={10}>
                  <div id="lab6">
                    Upload your PAN card in PDF, JPG, Jpeg, PNG format under
                    (file size should be under 1mb){" "}
                  </div>
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={10}>
                  <div>
                    <label id="lab14" htmlFor="myfile">
                      <IoIosAddCircle id="lab15" />
                      <input type="file" className="file" id="myfile" />
                    </label>
                  </div>
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={10}>
                  <div id="lab6">
                    Upload your PAN card in PDF, JPG, Jpeg, PNG format under
                    (file size should be under 1mb){" "}
                  </div>
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={10}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control id="lab10" as="textarea" rows={3} />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>

              <Row id="lab11">
                <Col></Col>
                <Col md={10}>
                  <Form.Group className="mb-3">
                    <Form.Check
                      id="lab6"
                      type="checkbox"
                      label="By ticking this box, you agree to the terms of service and that your parent/legal guardian has agreed to you participating in our programs. If you do not agree, or do not have parental/legal consent, then you may explore our programs here.
"
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col md={10} xs={10}>
                  <Button variant="dark" id="lab9">
                    Register
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
