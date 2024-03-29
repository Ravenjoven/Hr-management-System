<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { theme } from './theme';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import { ProSidebarProvider } from 'react-pro-sidebar';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import SingleJob from './pages/SingleJob';
import DashUsers from './pages/admin/DashUsers';
import DashJobs from './pages/admin/DashJobs';
//HOC
const UserDashboardHOC = Layout(UserDashboard)
const UserJobsHistoryHOC = Layout(UserJobsHistory)
const UserInfoDashboardHOC = Layout(UserInfoDashboard)
const AdminDashboardHOC = Layout(AdminDashboard)
const DashUsersHOC = Layout(DashUsers)
const DashJobsHOC = Layout(DashJobs)



const App = () => {
    return (
        <>
            <ToastContainer/>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/search/location/:location' element={<Home/>}/>
                        <Route path='/search/:keyword' element={<Home/>}/>
                        <Route path='/login' element={<LogIn/>}/>
                        <Route path='/job/:id' element={<SingleJob/>}/>
                        <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
                        <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
                        <Route path='/admin/jobs' element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
                        <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC/></UserRoute>}/>
                        <Route path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC/></UserRoute>}/>
                        <Route path='/user/info' element={<UserRoute><UserInfoDashboardHOC/></UserRoute>}/>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
        </>
    );
=======
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
// import { theme } from "./theme";

// const App = () => {
//     const [backendData, setBackendData] = useState([{}]);
//     useEffect(() => {
//       fetch("/api/type/jobs")
//         .then((response) => response.json())
//         .then((data) => {
//           setBackendData(data);
//         });
//     },[]);

//   return (
//     <>
//       <div>
//         {typeof backendData.jobT === "undefined" ? (
//           <p>Loading...</p>
//         ) : (
//             backendData.jobT.map((job, i) => 
//             <div key={i}>
//               <p>{job._id}</p>
//             <p>{job.jobTypeName}</p>
//             <p>{job.user}</p>
//             <p>{job.createdAt}</p>
//             <p>{job.updatedAt}</p>
//             <p>{job.__v}</p>
//             </div>)
//         )}
//       </div>
//       {/* <ThemeProvider theme={theme}>
//                 <CssBaseline />
//                 <BrowserRouter>
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         <Route path='*' element={<NotFound />} />
//                     </Routes>
//                 </BrowserRouter>
//             </ThemeProvider> */}
//     </>
//   );
// };

// export default App;



import './App.css';

function navigate(url){
  window.location.href=url
}
async function auth(){
  try {
    const response = await fetch('http://localhost:9000/request', { method: 'post' });
    const data = await response.json();
    navigate(data.url);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
>>>>>>> fc1588cc9b84710adf279dbb490039dcb3dd5e05
}

function App() {
  return(
    <>
    <div className="">
              <form className="m-8 w-[341px] rounded-tl-none rounded-tr-[50px] rounded-br-none rounded-bl-[50px] bg-darkorange-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start py-[100px] px-[55px] box-border gap-[29px] min-w-[341px] max-w-full mq750:min-w-full mq450:pt-[90px] mq450:px-5 mq450:pb-[75px] mq450:box-border mq1050:flex-1">
                <div className="w-[341px] h-[455px] relative rounded-tl-none rounded-tr-31xl rounded-br-none rounded-bl-31xl bg-darkorange-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
                <div className="self-stretch rounded-mini bg-whitesmoke rounded-[15px] flex flex-row items-center justify-start py-[11px] px-2.5 z-[1] border-[1px] border-solid border-gainsboro-200">
                  <div className="h-[38px] w-[220px] relative rounded-mini bg-whitesmoke box-border hidden border-[1px] border-solid border-gainsboro-200" />
                  <input
                    className="w-[200px] [border:none] [outline:none]  font-semibold font-montserrat text-xs bg-[transparent] h-4 relative text-black text-left inline-block whitespace-nowrap z-[2]"
                    placeholder="Email@gmail.com"
                    type="text"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[14px_0px]">
                  <div className="self-stretch rounded-mini bg-whitesmoke rounded-[15px] flex flex-row items-center justify-start py-[11px] px-[15px] z-[1] border-[1px] border-solid border-gainsboro-200">
                    <div className="h-[38px] w-[220px] relative rounded-mini bg-whitesmoke box-border hidden border-[1px] border-solid border-gainsboro-200" />
                    <input
                      className="w-[200px] [border:none] [outline:none] font-semibold font-montserrat text-xs bg-[transparent] h-4 relative text-black text-left inline-block z-[2]"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <button className="cursor-pointer pt-2 pb-[9px] pr-3.5 pl-[15px] bg-darkorange-200 w-[89px] rounded-[6px] box-border flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-chocolate hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                    <div className="h-9 w-[89px] relative rounded-3xs bg-darkorange-200 box-border hidden border-[1px] border-solid border-white" />
                    <b className="relative text-base font-inter text-whitesmoke text-left z-[2]">
                      Sign in
                    </b>
                  </button>
                  <div className="w-[204px] flex items-center justify-center py-0 px-2 box-border">
                    <b className="text-3xs font-inter text-left z-[1]">
                      <span className="text-white">OR</span>
                    </b>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center bg-white rounded-xl p-2.5 w-full m-[2px]"

                  onClick={()=> auth()}
                >
                  <img
                    src="../images/Gmail.png"
                    alt=""
                    className="w-[20px] mr-[20px] inline "
                  />
                  <span className="text-xs">Log in with Google</span>
                </button>
                <div className="w-[204px] flex flex-row items-start justify-start py-0 px-2 box-border">
                  <b className="flex-1 relative text-3xs font-inter text-left z-[1]">
                    <span className="text-white">Don’t have account?</span>
                    <span className="text-mediumslateblue"> Sign up here!</span>
                  </b>
                </div>
              </form>
            </div>
    </>
  );

}
export default App;