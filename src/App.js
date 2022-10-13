import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import AddCategory from "./pages/Addcategory/AddCategory";
import AddPatholab from "./pages/AddPatholab/AddPatholab";
import AddTest from "./pages/AddTest/AddTest";
import Slidebar from "./pages/Bar/Bar";
import Canceltest from "./pages/Canceltest/Canceltest";
import Dashboard from "./pages/Dashboard/Dashboard";
import Forgotpassword from "./pages/Forgetpassword/Forgotpassword";
import Labregistration from "./pages/Labregistration/Labregistration";
import Logout from "./pages/Logout/Logout";
import Patholab from "./pages/Patholab/Patholab";
import Side from "./pages/SideBar/SideBar";
import UserList from "./pages/UserList/UserList";
import Welcomescreen from "./pages/Welcomescreen/Welcomescreen";

export default function App() {
  return (
    <>
      {/* <Welcomescreen/> */}
      {/* <Forgotpassword /> */}
      {/* <Labregistration/> */}
      {/* <Logout/> */}
      {/* <Canceltest/> */}
     {/* <AddTest/> */}
     {/* <AddCategory/> */}
     {/* <AddPatholab/> */}
      {/* <UserList/> */}
      
      <Side/>


     






    </>
  );
}
