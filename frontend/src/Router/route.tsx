import React from "react";
// import {Routes, Route, useLocation, Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/LandingPage";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/hr/Dashboard";

function router() {
  return (
    <>
      <Router>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Dashboard" element={<Dashboard/>} />
            
          </Routes>
      </Router>
    </>
  );
}

export default router;
