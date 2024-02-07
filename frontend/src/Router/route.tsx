import React from "react";
// import {Routes, Route, useLocation, Router} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/LandingPage";

import LoginPage from "../components/LoginPage";

function router() {
  return (
    <>
      <Router>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default router;
