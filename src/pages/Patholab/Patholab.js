import React from 'react';
import { Col, Container, Form, Image, Row, Table } from 'react-bootstrap';
import './Patholab.css';
import { AiFillStar } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import sag from '../../asset/sagarika.png';

export default function PatholabList() {
    return (
        <div>
            <Container fluid id="mainBody">
                <Row className='d-flex align-items-center mb-4 '>
                    <Col md={1} xs={3} className="d-flex justify-content-center" style={{padding: '0px'}}>
                        <Row id="howManyUsers">274 Users</Row>
                    </Col>
                    <Col style={{padding: '0px'}}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                id="searchBar"
                            />
                        </Form>
                    </Col>
                    <Col md={1} xs={3} style={{padding: '0px'}}>
                        <button type="button" className="btn btn-success" id="addBtn">Add</button>
                    </Col>
                </Row>

                <Row id="tableMainRow">
                    <Table style={{ padding: '1rem' }}>
                        <thead>
                            <tr id="tableHeader">
                                <th>Pathology Lab</th>
                                <th>Total Bookings</th>
                                <th>Revenue</th>
                                <th>Address</th>
                                <th>Ratings</th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* 1st row */}
                            <tr id="tableDatas">
                                <td id="tDatas1">
                                    <div id="nameWithPhoto">
                                    <div><Image id="nameWithPhoto2" src={sag} /></div>
                                    <div>
                                        <div id="pathologyNameTxt">LongLife Pathology Labs</div>
                                        <div id="phnNumbTxt">+919876543210</div>
                                    </div>
                                    </div>
                                </td>
                                <td id="tDatas">200</td>
                                <td id="tDatas">$200000</td>
                                <td id="tDatas">
                                    Plot No -000, Nanadan Vihar, Patia, Bhubaneswar-751024
                                </td>
                                <td id="tDatas">
                                    <div style={{ flexDirection: 'row' }}>
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                    </div>
                                </td>
                                <td id="tDatas">
                                    <div style={{ flexDirection: 'row' }}>
                                        <TbEdit id="editIcon" />
                                        <RiDeleteBin6Line id="deleteIcon" />
                                    </div>
                                </td>
                                <td id="tDatas"> </td>
                                <td id="tDatas"> </td>
                            </tr>

                            {/* 2nd row */}
                            <tr id="tableDatas">
                                <td id="tDatas1">
                                    <div id="nameWithPhoto">
                                    <div><Image id="nameWithPhoto2" src={sag} /></div>
                                    <div>
                                        <div id="pathologyNameTxt">LongLife Pathology Labs</div>
                                        <div id="phnNumbTxt">+919876543210</div>
                                        </div>
                                    </div>
                                </td>
                                <td id="tDatas">200</td>
                                <td id="tDatas">$200000</td>
                                <td id="tDatas">
                                    Plot No -000, Nanadan Vihar, Patia, Bhubaneswar-751024
                                </td>
                                <td id="tDatas">
                                    <div style={{ flexDirection: 'row' }}>
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                    </div>
                                </td>
                                <td id="tDatas">
                                    <div style={{ flexDirection: 'row' }}>
                                        <TbEdit id="editIcon" />
                                        <RiDeleteBin6Line id="deleteIcon" />
                                    </div>
                                </td>
                                <td id="tDatas"> </td>
                                <td id="tDatas"> </td>
                            </tr>

                            {/* 3rd row */}
                            <tr id="tableDatas">
                                <td id="tDatas1">
                                    <div id="nameWithPhoto">
                                    <div><Image id="nameWithPhoto2" src={sag} /></div>
                                    <div>
                                        <div id="pathologyNameTxt">LongLife Pathology Labs</div>
                                        <div id="phnNumbTxt">+919876543210</div>
                                        </div>
                                    </div>
                                </td>
                                <td id="tDatas">200</td>
                                <td id="tDatas">$200000</td>
                                <td id="tDatas">
                                    Plot No -000, Nanadan Vihar, Patia, Bhubaneswar-751024
                                </td>
                                <td id="tDatas">
                                    <div style={{ flexDirection: 'row' }}>
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                        <AiFillStar id="starIcon" />
                                    </div>
                                </td>
                                <td id="tDatas">
                                    <div style={{ flexDirection: 'row' }}>
                                        <TbEdit id="editIcon" />
                                        <RiDeleteBin6Line id="deleteIcon" />
                                    </div>
                                </td>
                                <td id="tDatas"> </td>
                                <td id="tDatas"> </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    )
}