import React from "react";
// import {Routes, Route, useLocation, Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/LandingPage";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/hr/Dashboard";
import Profile from "../components/hr/AdminProfile";
import AdminJobCategory from "../components/hr/AdminJobCategory";
import AdminUserList from "../components/hr/AdminUserList";
function router() {
  return (
    <>
      <Router>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Employee" element={<AdminUserList/>} />
            <Route path="/Jobs" element={<AdminJobCategory/>} />
            <Route path="/Profile" element={<Profile/>} />
            
          </Routes>
      </Router>
    </>
  );
}

export default router;
