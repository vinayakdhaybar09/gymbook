import React, { useEffect, useState } from "react";

import { FaUserPlus, FaBars } from "react-icons/fa";
import App from "../../App";
import { Drawer, Menu } from "antd";
import "../../styles/layout.css";
import { Link, useNavigate } from "react-router-dom";
import Login from "../auth/Login";

const Layout = () => {
  const [activeTab, setActiveTab] = useState("members")
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      setLogin(false);
      console.log("not logged in");
    }
  }, []);

  if (!login) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = ()=>{
    localStorage.removeItem("loggedIn");
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="layout-page">
      <div className="left-dashboard-layout">
        <Link
          className={
            activeTab === "dashboard"
              ? "menu-options-active"
              : "menu-options-inactive"
          }
          onClick={() => setActiveTab("dashboard")}
          to={"/"}
        >
          Dashboard
        </Link>
        <Link
          className={
            activeTab === "members"
              ? "menu-options-active"
              : "menu-options-inactive"
          }
          onClick={() => setActiveTab("members")}
          to={"/members"}
        >
          Members
        </Link>
        <Link
          className={
            activeTab === "maintainance"
              ? "menu-options-active"
              : "menu-options-inactive"
          }
          onClick={() => setActiveTab("maintainance")}
          to={"/maintainance"}
        >
          Maintainance
        </Link>
        <Link
          className={
            activeTab === "employee"
              ? "menu-options-active"
              : "menu-options-inactive"
          }
          onClick={() => setActiveTab("employee")}
          to={"/employee"}
        >
          Employee
        </Link>
        <p className="menu-options-inactive" onClick={handleLogout}>
          Logout
        </p>
      </div>
      <div className="right-dashboard-layout">
        <div className="main-header">
          <FaBars onClick={showDrawer} className="menu-icon" />
          <p>aamango Admin</p>
        </div>
        <div className="active-layout">
          <App />
        </div>
      </div>
    </div>
  );
};

export default Layout;
