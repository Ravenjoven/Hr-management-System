import React from "react";
// import {Routes, Route, useLocation, Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/LandingPage";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/hr/Dashboard";
import Profile from "../components/hr/AdminProfile";
import AdminJobCategory from "../components/hr/AdminJobCategory";
import AdminUserList from "../components/hr/AdminUserList";
import AdminAttendance from "../components/hr/AdminAttendance";
import AdminEmployeeManagement from "../components/hr/AdminEmployeeManagement";
import Jobs from "../components/hr/Jobs";
import OjtJobList from "../components/OJT/OjtJobs";
function router() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Ojt" element={<OjtJobList/>} />
          <Route index path="/" element={<HomePage />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Employee" element={<AdminUserList />} />
          <Route path="/Category" element={<AdminJobCategory />} />
          <Route path="/Attendance" element={<AdminAttendance />} />
          <Route
            path="/EmployeeManagement"
            element={<AdminEmployeeManagement />}
          />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default router;
