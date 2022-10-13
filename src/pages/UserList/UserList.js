import React from "react";
import { Container, Image, Table, Row, Col } from "react-bootstrap";
import "./UserList.css";
import sag from "../../asset/sagarika.png";
import { IoTrashOutline } from "react-icons/io5";

export default function UserList() {
  return (
    <div>
      <Container fluid>
        <Row id="user_list4">
          <Table style={{ marginTop: "1rem" }}>
            <thead>
              <tr id="user_list1">
                <th></th>
                <th></th>
                <th>User</th>
                <th>Email</th>
                <th>Dob</th>
                <th>Address</th>
                <th>Total booking</th>
                <th>Revenue</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr id="user_list_body">
                <td></td>
                <td></td>
                <td>
                  <div id="user_list2">
                    <div>
                      <Image id="user_list3" src={sag} />
                    </div>
                    <div>
                      <div id="user_list_name">Sagarika Mohanty</div>
                      <div id="user_list_number">+919876543210</div>
                    </div>
                  </div>
                </td>
                <td id="user_list6">Sagarika@gmail.com</td>
                <td id="user_list6">15.09.2022</td>
                <td id="user_list6">
                  Plot No -000, nanadan Vihar,patia,Bhubaneswar-751024
                </td>
                <td id="user_list6">10</td>
                <td id="user_list6">$8000</td>
                <td >
                  <IoTrashOutline id="user_list_icon1" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr id="user_list_body">
                <td></td>
                <td></td>
                <td>
                  <div id="user_list2">
                    <div>
                      <Image id="user_list3" src={sag} />
                    </div>
                    <div>
                      <div id="user_list_name">Sagarika Mohanty</div>
                      <div id="user_list_number">+919876543210</div>
                    </div>
                  </div>
                </td>
                <td id="user_list6">Sagarika@gmail.com</td>
                <td id="user_list6">15.09.2022</td>
                <td id="user_list6">
                  Plot No -000, nanadan Vihar,patia,Bhubaneswar-751024
                </td>
                <td id="user_list6">10</td>
                <td id="user_list6">$8000</td>
                <td >
                  <IoTrashOutline id="user_list_icon1" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr id="user_list_body">
                <td></td>
                <td></td>
                <td>
                  <div id="user_list2">
                    <div>
                      <Image id="user_list3" src={sag} />
                    </div>
                    <div>
                      <div id="user_list_name">Sagarika Mohanty</div>
                      <div id="user_list_number">+919876543210</div>
                    </div>
                  </div>
                </td>
                <td id="user_list6">Sagarika@gmail.com</td>
                <td id="user_list6">15.09.2022</td>
                <td id="user_list6">
                  Plot No -000, nanadan Vihar,patia,Bhubaneswar-751024
                </td>
                <td id="user_list6">10</td>
                <td id="user_list6">$8000</td>
                <td >
                  <IoTrashOutline id="user_list_icon1" />
                </td>
                <td></td>
                <td></td>
              </tr>

              
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}
