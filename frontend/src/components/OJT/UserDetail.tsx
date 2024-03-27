import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import UserSidebar from "../UserSidebar";
import UserNavar from "../UserNavar";
import { useState, useEffect } from "react";
import OjtSidebar from "./OjtSidebar";
import OjtNavar from "./OjtNavar";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
interface UserData {
  fullname: string | null;
  email: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  position: string;
  type: string;
  jobSkills: Object[];
  jobExperience: Object[];
  createdAt: Date;
}

function UserProfile() {
  const [expanded, setExpanded] = useState(false);
  const [fullname, setFullname] = useState("");
  const [jobCount, setJobCount] = useState("•");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  const user = ReactSession.get("user");

  if (ReactSession.get("user") === "") {
    navigate("/login");
  }

  // const name = ReactSession.get("name");
  // const picture = ReactSession.get("picture");

  const [ser, setUser] = useState<UserData[]>([]);
  useEffect(() => {
    const getUser = async () => {
      const id = ReactSession.get("user");
      try {
        const response = await axios.get(
          `http://localhost:9000/api/user/getUser/${id}`
        );
        setUser(response.data.users);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getUser();
  }, []);

  // Effect hook to load the saved fullname from localStorage when the component mounts
  useEffect(() => {
    // Construct a unique key for localStorage based on the user's id (or email)
    const localStorageKey = `fullname_${user.email}`; // or `fullname_${user.email}` if using email
    const savedFullName = localStorage.getItem(localStorageKey);
    if (savedFullName) {
      setFullname(savedFullName);
    }
    // For dateOfBirth
    const dobKey = `dateOfBirth_${user.email}`;
    const savedDOB = localStorage.getItem(dobKey);
    if (savedDOB) {
      setDateOfBirth(savedDOB);
    }
    const pobKey = `placeOfBirth_${user.email}`;
    const savedPOB = localStorage.getItem(pobKey);
    if (savedPOB) {
      setPlaceOfBirth(savedPOB);
    }
    const userKey = user.email; // Assuming `user.email` is unique
    setAddress(localStorage.getItem(`address_${userKey}`) || "");
    setAge(localStorage.getItem(`age_${userKey}`) || "");
    setNationality(localStorage.getItem(`nationality_${userKey}`) || "");
    const savedGender = localStorage.getItem(`gender_${user.email}`); // Load the saved gender
    if (savedGender) {
      setGender(savedGender); // Update the state if a saved gender exists
    }
  }, [user.email]); // or [user.email] if using email

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFullName = e.target.value;
    setFullname(newFullName);
    // Again, using a unique localStorage key
    const localStorageKey = `fullname_${user.email}`; // or `fullname_${user.email}`
    localStorage.setItem(localStorageKey, newFullName);
  };
  const handleDateOfBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newDOB = e.target.value;
    setDateOfBirth(newDOB);
    const dobKey = `dateOfBirth_${user.email}`;
    localStorage.setItem(dobKey, newDOB);
  };
  const handlePlaceOfBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPlaceOfBirth = e.target.value;
    setPlaceOfBirth(newPlaceOfBirth);
    const pobKey = `placeOfBirth_${user.email}`;
    localStorage.setItem(pobKey, newPlaceOfBirth);
  };
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    localStorage.setItem(`address_${user.email}`, newAddress);
  };
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAge = e.target.value;
    setAge(newAge);
    localStorage.setItem(`age_${user.email}`, newAge);
  };
  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGender = e.target.value;
    setGender(newGender);
    localStorage.setItem(`gender_${user.email}`, newGender);
  };
  const handleNationalityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNationality = e.target.value;
    setNationality(newNationality);
    localStorage.setItem(`nationality_${user.email}`, newNationality);
  };

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
        <div className="relative w-full mt-2 px-8">
          <OjtSidebar expanded={expanded} jobCount={jobCount} />
          <div
            className={`content h-full max-w-full z-1  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full h-full font-bold rounded-3xl flex bg-white text-black p-4 md:overflow-hidden overflow-x-scroll">
              <div className="flex items-center justify-center">
                {/* <FontAwesomeIcon
                    icon={faUser}
                    className="flex w-[105px] h-[100px] border-[5px] border-gray-300 rounded-full p-3 m-8"
                  /> */}
                <img
                  src={user.picture}
                  className="flex w-40 h-40 border-2 border-black rounded-full mx-8"
                ></img>
              </div>
              <div className=" flex flex-col text-center justify-center items-center">
                <p className="text-custom-text-black font-bold text-xl">
                  <EditText
                    name="email"
                    type="email"
                    style={{ width: "auto" }}
                    defaultValue={ser.fullname}
                  />
                </p>

                <span className="text-custom-text-orange font-semibold p-1 text-sm">
                  Software Developer
                </span>
              </div>
              <div className="flex flex-col mx-8 my-12">
                <div className="p-2 ">
                  <h4 className="text-custom-text-black font-bold">EMAIL ID</h4>
                  <span className="text-custom-text-gray font-semibold">
                    <EditText
                      name="email"
                      type="email"
                      style={{ width: "auto" }}
                      defaultValue={ser.email}
                    />
                  </span>
                </div>
                <div className="p-2">
                  <h4 className="text-custom-text-black font-bold">NUMBER</h4>
                  <span className="text-custom-text-gray font-semibold">
                    <EditText
                      name="email"
                      type="email"
                      style={{ width: "220px" }}
                      defaultValue={ser.phoneNumber}
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col my-12">
                <div className="p-2">
                  <h4 className="text-custom-text-black font-bold">MENTOR</h4>
                  <span className="text-custom-text-gray font-semibold ">
                    <EditText
                      name="email"
                      type="email"
                      style={{ width: "220px" }}
                      defaultValue="johndoe"
                    />
                  </span>
                </div>
                <div className="p-2">
                  <h4 className="text-custom-text-black font-bold">SCHEDULE</h4>
                  <span className="text-custom-text-gray font-semibold">
                    <EditText
                      name="email"
                      type="email"
                      style={{ width: "220px" }}
                      defaultValue="6am - 3pm"
                    />
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
                    Fullname: Fullname:
                    <span className="text-custom-text-gray font-semibold p-2">
                      <input
                        type="text"
                        name="fullname"
                        value={fullname}
                        onChange={handleFullNameChange}
                        style={{ display: "inline", margin: "0 8px" }}
                      />
                    </span>
                  </div>
                  <div>
                    Date of Birth:
                    <span className="text-custom-text-gray font-semibold p-2">
                      <input
                        type="date"
                        value={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                      />
                    </span>
                  </div>
                  <div>
                    Place of Birth:{" "}
                    <span className="text-custom-text-gray font-semibold p-2">
                      <input
                        type="placeOfBirth"
                        value={placeOfBirth}
                        onChange={handlePlaceOfBirthChange}
                      />
                    </span>
                  </div>
                  <div>
                    Address :{" "}
                    <span className="text-custom-text-gray font-semibold p-2">
                      <input
                        type="Address"
                        value={address}
                        onChange={handleAddressChange}
                      />
                    </span>
                  </div>
                  <div>
                    Age :{" "}
                    <span className="text-custom-text-gray font-semibold p-2">
                      <input
                        type="Age"
                        value={age}
                        onChange={handleAgeChange}
                      />
                    </span>
                  </div>
                  <div>
                    Gender :{" "}
                    <span className="text-custom-text-gray font-semibold p-2">
                      <select value={gender} onChange={handleGenderChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </span>
                  </div>
                  <div>
                    Nationality :{" "}
                    <span className="text-custom-text-gray font-semibold p-2">
                      <input
                        type="Nationality"
                        value={nationality}
                        onChange={handleNationalityChange}
                      />
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
                <div className="flex flex-row">
                  <div className="py-2 bg-white text-black md:ml-4 rounded-2xl w-[450px]">
                    <div className="font-bold text-custom-text-black my-4 ml-8 space-y-3 pr-8.">
                      <div>
                        <h1 className=" text-xl">SKILLS</h1>

                        <textarea
                          name=""
                          value={ser.jobSkills}
                          id=""
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 bg-white text-black md:ml-4 rounded-2xl w-[450px]">
                    <div className="font-bold text-custom-text-black my-4 ml-8 space-y-3 pr-8.">
                      <div>
                        <h1 className=" text-xl">EXPERIENCE</h1>

                        <textarea
                          className="text-sm font-semibold"
                          name=""
                          value={ser.jobExperience}
                          id=""
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <div className="border-[3px] bg-white text-black md:ml-4 rounded-2xl mt-4">
                    <h3 className="my-4 uppercase font-bold md:ml-8 text-xl text-custom-text-black">
                      certification
                    </h3>
                    <div className="text-custom-text-black text-left md:ml-8 capitalize space-y-2 mb-4 pr-8">
                      <EditTextarea
                        name="description"
                        rows={4}
                        placeholder="Creative Web Design Technical Education and Skills
                          Development Authority(TESDA
                          December 0, 0000 -
                          January 00, 0000"
                      />
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
}

export default UserProfile;
