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
import Applications from "../components/OJT/Applications";
import CompDetails from "../components/hr/CompanyDetails";
import UserDetail from "../components/OJT/UserDetail";
import OjtAttendance from "../components/OJT/OjtAttendance";
import FileLeaves from "../components/OJT/FileLeave";
import UnEmpJobList from "../components/OJT/UnEmpJobPage";
import JobCategory from "../components/JobCategory";
import { ReactSession } from "react-client-session";
import SelectedJobs from "../components/SelectedJob";
import RegistrationForm from "../components/Registration" // Adjust the import path as necessary


function router() {
  ReactSession.setStoreType("localStorage");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Registration" element={<RegistrationForm />} />
          <Route path="/FileLeave" element={<FileLeaves />} />
          <Route path="/ojt" element={<UnEmpJobList />} />
          <Route path="/ojt/Application" element={<Applications />} />
          <Route path="/OjtDetails" element={<UserDetail />} />
          <Route path="/OjtJoblist" element={<OjtJobList />} />
          <Route index path="/" element={<HomePage />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/EmployeeList" element={<AdminUserList />} />
          <Route path="/Category" element={<AdminJobCategory />} />
          <Route path="/Attendance" element={<AdminAttendance />} />
          <Route path="/Company" element={<CompDetails />} />
          <Route path="/SelectedJob" element={<SelectedJobs />} />
          <Route
            path="/EmployeeManagement"
            element={<AdminEmployeeManagement />}
          />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/UserProfile" element={<UserDetail />} />
          <Route path="/OjtAttendance" element={<OjtAttendance />} />
          <Route path="/JobCategory" element={<JobCategory />} />
        </Routes>
      </Router>
    </>
  );
}

export default router;
