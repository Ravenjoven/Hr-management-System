import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import UserSidebar from "../UserSidebar";
import UserNavar from "../UserNavar";
import { useState, useEffect } from "react";
import UnEmpSidebar from "./UnEmpSidebar";
import OjtSidebar from "./OjtSidebar";
import OjtNavar from "./OjtNavar";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

function UserProfile() {
  interface User {
    name: string;
    email: string;
  }

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };
  const user = ReactSession.get("user");
  // const name = ReactSession.get("name");
  // const picture = ReactSession.get("picture");

  const [ser, setUser] = useState<User[]>([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/user/getUser"
        );
        setUser(response.data.getUser);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUser();
  }, []);
  if(user){
    return (
      <div className="min-h-screen max-w-screen bg-custom-bg-smooth font-montserrat">
        <>
          <OjtNavar />
          <div className="hamburger-menu items-center">
            <button
              className="menu-toggle focus:outline-none"
              onClick={toggleExpanded}
            >
              {expanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="relative w-full mt-8">
            <OjtSidebar expanded={expanded} />
            <div
              className={`content h-full max-w-full z-1  ${
                expanded ? "ml-0" : "ml-[280px]"
              }`}
            >
              <div className="upper-div md:min-w-full h-full font-bol rounded flex bg-white text-black p-4">
                <div className="flex items-center justify-center">
                  {/* <FontAwesomeIcon
                    icon={faUser}
                    className="flex w-[105px] h-[100px] border-[5px] border-gray-300 rounded-full p-3 m-8"
                  /> */}
                  <img src={user.picture}  className="flex w-40 h-40 border-2 border-black rounded-full mx-24"></img>
                </div>
                <div className=" flex flex-col text-center justify-center items-center p-2">
                  <p className="text-custom-text-black font-bold text-2xl">
                    <EditText name="email" type="email" style={{width: '220px'}} defaultValue={user.name}/>
                  </p>
                  <span className="text-custom-text-orange font-semibold p-1 text-sm">
                    Software Developer
                  </span>
                </div>
                <div className="flex flex-col m-12">
                  <div className="p-2 ">
                    <h4 className="text-custom-text-black font-bold">EMAIL ID</h4>
                    <span className="text-custom-text-gray font-semibold">
                    <EditText name="email" type="email" style={{width: '220px'}} defaultValue={user.email}/>
                    </span>
                  </div>
                  <div className="p-2">
                    <h4 className="text-custom-text-black font-bold">NUMBER</h4>
                    <span className="text-custom-text-gray font-semibold">
                    <EditText name="email" type="email" style={{width: '220px'}} defaultValue="129329177"/>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col m-12">
                  <div className="p-2">
                    <h4 className="text-custom-text-black font-bold">MENTOR</h4>
                    <span className="text-custom-text-gray font-semibold ">
                      <EditText name="email" type="email" style={{width: '220px'}} defaultValue="johndoe"/>
                    </span>
                  </div>
                  <div className="p-2">
                    <h4 className="text-custom-text-black font-bold">SCHEDULE</h4>
                    <span className="text-custom-text-gray font-semibold">
                      
                      <EditText name="email" type="email" style={{width: '220px'}} defaultValue="6am - 3pm"/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="left-div mt-4 w-[400px] min-h-screen border-[3px] rounded-2xl bg-white text-black p-4">
                  <div className="font-bold text-custom-text-black my-4 ml-8 space-y-3">
                    <div>
                      <h1 className="font-bold p-2  text-xl">PERSONAL INFO</h1>
                    </div>
                    <div>
                      Fullname:
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText
                          name="textbox1"
                          defaultValue="Teravault Inc"
                          inline
                        />
                      </span>
                    </div>
                    <div>
                      Date of Birth:
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText
                          name="textbox1"
                          defaultValue="00/00/0000"
                          inline
                        />
                      </span>
                    </div>
                    <div>
                      Place of Birth:{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText
                          name="textbox1"
                          defaultValue="Cebu Business Park"
                          inline
                        />
                      </span>
                    </div>
                    <div>
                      Address :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText
                          name="textbox1"
                          defaultValue="Ayala Center, Cebu Business Park"
                          inline
                        />
                      </span>
                    </div>
                    <div>
                      Age :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText name="textbox1" defaultValue="00" inline />
                      </span>
                    </div>
                    <div>
                      Gender :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText name="textbox1" defaultValue="---" inline />
                      </span>
                    </div>
                    <div>
                      Nationality :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText name="textbox1" defaultValue="---" inline />
                      </span>
                    </div>
                    <div>
                      TIN :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText name="textbox1" defaultValue="---" inline />
                      </span>
                    </div>
                    <div>
                      SSS :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText name="textbox1" defaultValue="---" inline />
                      </span>
                    </div>
                    <div>
                      PAG-IBIG :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText name="textbox1" defaultValue="---" inline />
                      </span>
                    </div>
                    <div>
                      PHILC :{" "}
                      <span className="text-custom-text-gray font-semibold p-2">
                        <EditText name="textbox1" defaultValue="---" inline />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="right-div w-full h-full mt-4 md:overflow-hidden overflow-x-scroll">
                  <div className="border-[3px] bg-white text-black md:ml-4 rounded-2xl">
                    <div className="font-bold text-custom-text-black my-4 ml-8 space-y-3">
                      <div>
                        <h1 className=" text-xl">SKILLS</h1>
  
                        <EditTextarea
                          name="description"
                          rows={4}
                          style={{ paddingTop: 0 }}
                          placeholder="Enter a description"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <div className="border-[3px] bg-white text-black md:ml-4 rounded-2xl mt-4">
                      <h3 className="my-4 uppercase font-bold md:ml-8 text-xl text-custom-text-black">
                        certification
                      </h3>
                      <div className="text-custom-text-black text-left md:ml-8 capitalize space-y-2 mb-4">
                        <EditTextarea
                          name="description"
                          rows={4}
                          style={{ paddingTop: 0 }}
                          placeholder="Creative Web Design Technical Education and Skills
                          Development Authority(TESDA
                          December 0, 0000 -
                          January 00, 0000"
                        />
                        {/* Creative Web Design Technical Education and Skills <br />
                        Development Authority(TESDA){" "}
                        <br className="md:hidden block" /> December 0, 0000 -
                        January 00, 0000 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }else{
    return(
      window.location.href="/login"
    )
  }
}

export default UserProfile;
