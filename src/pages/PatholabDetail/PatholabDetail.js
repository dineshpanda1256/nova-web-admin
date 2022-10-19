import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Addcategory from "../../Component/Addcategory/Addcategory"
import PatholabDetailsComp1 from '../../Component/PatholabDetailsComp1/PatholabDetailsComp1'
import PatholabDetailsComp2 from '../../Component/PatholabDetailsComp2/PatholabDetailsComp2'
import TotalRevenue from '../../Component/TotalRevenue/TotalRevenue'
import NavBar2 from '../NavBar2/NavBar2'

export default function PatholabDetail() {
  return (
    <div>

<Container>
        <Row>
          <Row>
            {" "}
            <Col>
              <NavBar2 />
            </Col>
          </Row>
        </Row>
      </Container>

      <Container fluid>
        <Row><Col md="8">
          <PatholabDetailsComp2/>
          </Col>
          <Col md="4">
          <TotalRevenue/>
          </Col>
          </Row>
        <Row>
        <Col>
        <Row>
        <Col><Addcategory/></Col>
        </Row>
        </Col>
          <Col md="5"><PatholabDetailsComp1/></Col>
          </Row>

      </Container>
            


    </div>
  )
}
