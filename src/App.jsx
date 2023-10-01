import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import Members from "./pages/members/Members";
import Maintainance from "./pages/maintainance/Maintainance";
import Employee from "./pages/employee/Employee";
import Login from "./pages/auth/Login";
import MemberDetails from "./pages/members/MemberDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/members" element={<Members />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/members/:id" element={<MemberDetails />} />
        
        <Route exact path="/maintainance" element={<Maintainance />} />
        <Route exact path="/employee" element={<Employee />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
