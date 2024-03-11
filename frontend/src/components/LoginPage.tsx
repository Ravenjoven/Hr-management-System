import Navar from "./Navar";
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    label: "Sign In",
    to: "/Dashboard",
  },
];

const firstRoute = data[0].to;
const firstLabel = data[0].label;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevents the default form submit action

    try {
      const response = await axios.post('http://localhost:5174/login', {
  email: email,
  password: password,
  });

      // Handle success (e.g., storing the token, redirecting the user)
      console.log(response.data);
      // Assuming the token is returned in response.data.token
      // Store it in localStorage or in a state management library
      localStorage.setItem('token', response.data.token);

      // Redirect or update UI
    } catch (error) {
      // Handle error (e.g., displaying an error message)
      console.error(error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred, please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between min-h-screen max-w-screen bg-white font-montserrat">
      <>
        <Navar />
        <section className="max-w-screen-xl flex ml-8 mr-8">
          <div className="w-full pl-5 pt-2">
            <svg
              className="w-560 h-auto sm:w-full"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="650"
              height="250"
              preserveAspectRatio="none"
              viewBox="0 0 1440 560"
            >
              <g mask='url("#SvgjsMask1004")' fill="none">

              </g>
            </svg>
            <h1 className="font-bold text-custom-text-gray text-2xl">
              We're passionate about <br />
              helping entrepreneurs change <br />
              the world and build a better
              <br />
              tomorrow.
            </h1>
          </div>
          <div className="w-full flex justify-end mt-4">
            <form
              onSubmit={handleSignIn}
              className="bg-custom-text-orange mr-8 rounded-tr-[50px] p-[30px] rounded-bl-[50px] h-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-[40px]"
                placeholder="name@gmail.com"
                required
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-[20px]"
                placeholder="Enter your password"
                required
              />
              <button
                type="submit"
                className="flex justify-center items-center mt-4 mx-auto text-sm border border-white bg-transparent hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 "
              >
                <Link to={firstRoute} className="block w-full h-full">
                  {firstLabel}
                </Link>
              </button>
              <div className="mt-4 grid grid-cols-3 items-center text-black">
                <hr className="border-black" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-black" />
              </div>
 
              {/* Your Google login button */}
              <p
                id="helper-text-explanation"
                className="mt-8 text-xs text-white"
              >
                Don't have an account?
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign up here!
                </a>
              </p>
            </form>
          </div>
        </section>
        <footer className="w-full bg-custom-bg-black static bottom-0 text-center text-white p-4 text-xs">
          <div className="grid content-end">
            <div className="flex justify-center ">
              <img src="../images/img2.png" className="w-[40px] h-10 "></img>
            </div>
            <br />
            Copyright &copy; 2024 TERAVAULT, INC. dba TeraVault Software. All
            rights reserved
          </div>
        </footer>
      </>
    </div>
  );
};

export default Login;
