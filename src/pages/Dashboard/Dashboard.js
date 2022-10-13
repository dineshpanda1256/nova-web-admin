import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Bookingtablecomp from '../../Component/Bookingtable.js/Bookingtablecomp'
import Dashboardcomp from '../../Component/Dashboardcomp/Dashboardcomp'
import Dashboardteamcard from '../../Component/Dashboardteamcard/Dashboardteamcard'
import Requestable from '../../Component/Requestable/Requestable'
import Revenuecard from '../../Component/Revenuecard/Revenuecard'
import "./Dashboard.css"
export default function Dashboard() {
  return (
    <div id='dashboard_maincontainer'>
       <Container fluid>
<Row>

  <Col>
  <Dashboardcomp  title='Total Lab' count='64'/>
  </Col>
  <Col>
  <Dashboardcomp title='New Lab Request' count='04'/>
  </Col>
  <Col>
  <Dashboardcomp title ='Total Booking' count='500'/>
  </Col>
  <Col>
  <Dashboardcomp title ='Total user' count='200'/>
  </Col>
</Row>
       </Container>
       <Container style={{marginTop:'1rem'}}>
        <Row>
          <Col md={9}>
          <Requestable/>
          </Col>
          <Col md={3}>
          <Revenuecard/>
          </Col>
        </Row>
       </Container>
       <Container style={{marginTop:'1rem'}}>
        <Row>
          <Col md={9}>
          <Bookingtablecomp/>
          </Col>
          <Col md={3} style={{marginTop:'-2rem'}}>
       <Dashboardteamcard />
          </Col>
        </Row>
       </Container>
    </div>
  )
}
