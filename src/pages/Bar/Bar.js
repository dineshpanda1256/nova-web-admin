import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, Link } from "react-router-dom";
import "./Bar.css";
import { MdDashboard } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import nova from "../../asset/novalogo.png";

const Slidebar = () => {
  const [select, setSelect] = useState("dashboard");

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar id="bar3" textColor="black" backgroundColor="white"  width="5rem">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img id="bar4" src={nova} />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              onClick={() => setSelect("dashboard")}
              exact
              to="/dashboard"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                style={
                  select === "dashboard"
                    ? { color: "green" }
                    : { color: "black" }
                }
                icon="columns"
              >
                <div
                  id="bar1"
                  style={
                    select === "dashboard"
                      ? { color: "green" }
                      : { color: "black" }
                  }
                >
                  {" "}
                  Dashboard
                </div>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink onClick={() => setSelect("patholab")} exact to="/patholab" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="building" style={select === 'patholab' ? {color: 'green'} : {color: 'black'} }>
                <div id="bar1" style={select === 'patholab' ? {color: 'green'} : {color: 'black'} }> Patholab</div>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink onClick={() => setSelect("user")} exact to="/userlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users" style={select === 'user' ? {color: 'green'} : {color: 'black'} }>
                <div id="bar1" style={select === 'user' ? {color: 'green'} : {color: 'black'} }> User</div>
              </CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Slidebar;
