import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { theme } from "./theme";

const App = () => {
    const [backendData, setBackendData] = useState([{}]);
    useEffect(() => {
      fetch("/api/jobs/show")
        .then((response) => response.json())
        .then((data) => {
          setBackendData(data);
        });
    });

//   const [jobs, setJobs] = useState([{}]);
//   useEffect(() => {
//     fetch("/api/type/jobs")
//       .then((response) => response.json())
//       .then((data) => {
//         setJobs(data);
//       });
//   });
  return (
    <>
      <div>
        {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
            backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
        {/* {jobs.map((data) => (
                      <>
                        <tbody>
                          <tr>
                              <td>{data.jobTypeName}</td>
                              <td>{data.user}</td>
                              <td>{data.createdAt}</td>
                          </tr>
                        </tbody>
                      
                      </>
                    ))} */}
      </div>
      {/* <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider> */}
    </>
  );
};

export default App;
