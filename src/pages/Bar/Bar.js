import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';
import "./Bar.css";
import {MdDashboard} from "react-icons/md";
import {IoMdBusiness} from "react-icons/io";
import {HiUserGroup} from "react-icons/hi";
import nova from "../../asset/novalogo.png"


const Slidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar id="bar3" textColor="black" backgroundColor="white">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <img id="bar4" src={nova} />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" ><div id="bar1"> Dashboard</div></CDBSidebarMenuItem>
            </NavLink> 

            <NavLink exact to="/patholab" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="building"><div id="bar1"> Patholab</div></CDBSidebarMenuItem>
            </NavLink> 

            <NavLink exact to="/userlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users"><div id="bar1"> User</div></CDBSidebarMenuItem>
            </NavLink> 

          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Slidebar ;