import React, { useEffect, useState } from "react";
import Navar from "./Navar";
import { jwtDecode } from "jwt-decode";
import { ReactSession, history } from "react-client-session";
import axios , { AxiosError } from "axios";

import UserProfile from "./OJT/UserDetail";
// import { Redirect } from 'react-router-dom';


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

  const handleSignIn = async (e: { preventDefault: () => void; }) => {
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
    } catch (error: any) {
      // Handle error (e.g., displaying an error message)
      console.error(error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred, please try again.');
      }
    }
  };

  interface User {
    name?: string | null;
    iat?: number;
    iss?: string;
    picture?: string;
    family_name?: string;
    given_name?: string;
    email?: string | null;
    jti?: string;
  }

  const [user, setUser] = useState<User>({ email: null });
  const [logIn, setLogIn] = useState(false);

  //@ts-ignore
  const google = window.google;
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "335370154466-jlrgvk1qbnhte3kc6hcsp7kg64fl95jt.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    /* global google  */

    google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  useEffect(() => {
    if (user) {
      // Check if user is defined
      axios
        .post("http://localhost:9000/api/user/addUser", user, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          alert("User added successfully");

          console.log("Response:", response.data);
        })
        .catch((error) => {
          // alert("An error occurred while adding the user");
          console.log(user);
          console.error("An error occurred while adding the user:", error);
        });
    }
  }, [user]);

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     await ReactSession.setStoreType("localStorage");
  //     await ReactSession.set("mail", user.email);
  //     await ReactSession.set("name", user.name);
  //     await ReactSession.set("picture", user.picture);

  //     const mail = await ReactSession.get("mail");
  //     if (mail) {
  //       setLogIn(true);
  //     } else {
  //       setLogIn(false);
  //     }
  //   };

  //   checkLoggedIn();
  // }, [user]);

  // if (logIn) {
  //   window.location.href = "/UserProfile";
  // }

  function handleCallbackResponse(response: { credential: any }) {
    const userObject = jwtDecode(response.credential);
    setUser(userObject as User);

    ReactSession.set("user", userObject);

    window.location.href = "/UserProfile";
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-between min-h-screen max-w-screen  bg-white font-montserrat">
        <Navar />
        <section className="mx-20">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="lg:w-full lg:h-[70%] xs:w-full xs:h-[50%]">
                <svg
                  className="lg:w-[90%] lg:h-full xs:w-[50%] xs:h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  preserveAspectRatio="none"
                  viewBox="0 0 1440 560"
                >
                  <g mask='url("#SvgjsMask1004")' fill="none">
                    <path
                      d="M85.09 55.87L150.05 93.37L150.05 168.37L85.09 205.87L20.14 168.37L20.14 93.37zM85.09 505.87L150.05 543.37L150.05 618.37L85.09 655.87L20.14 618.37L20.14 543.37zM215 280.87L279.95 318.37L279.95 393.37L215 430.87L150.05 393.37L150.05 318.37zM344.91 55.87L409.86 93.37L409.86 168.37L344.91 205.87L279.95 168.37L279.95 93.37zM734.63 55.87L799.59 93.37L799.59 168.37L734.63 205.87L669.68 168.37L669.68 93.37zM734.63 505.87L799.59 543.37L799.59 618.37L734.63 655.87L669.68 618.37L669.68 543.37zM929.49 -56.63L994.45 -19.13L994.45 55.87L929.49 93.37L864.54 55.87L864.54 -19.13zM1254.26 55.87L1319.21 93.37L1319.21 168.37L1254.26 205.87L1189.31 168.37L1189.31 93.37zM1189.31 393.37L1254.26 430.87L1254.26 505.87L1189.31 543.37L1124.35 505.87L1124.35 430.87z"
                      stroke="#03305d"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M77.59 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM77.59 205.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM12.64 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM12.64 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM77.59 505.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 618.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM77.59 655.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM12.64 618.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM12.64 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM207.5 280.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM272.45 318.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM272.45 393.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM207.5 430.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 393.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM142.55 318.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM337.41 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM402.36 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM402.36 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM337.41 205.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM272.45 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM272.45 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM727.13 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM792.09 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM792.09 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM727.13 205.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM662.18 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM662.18 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM727.13 505.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM792.09 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM792.09 618.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM727.13 655.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM662.18 618.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM662.18 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM921.99 -56.63 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM986.95 -19.13 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM986.95 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM921.99 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM857.04 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM857.04 -19.13 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1246.76 55.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1311.71 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1311.71 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1246.76 205.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1181.81 168.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1181.81 93.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1181.81 393.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1246.76 430.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1246.76 505.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1181.81 543.37 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1116.85 505.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1116.85 430.87 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0z"
                      fill="#03305d"
                    ></path>
                    <path
                      d="M71.22 385.58L122.31 415.08L122.31 474.08L71.22 503.58L20.12 474.08L20.12 415.08zM173.41 31.58L224.51 61.08L224.51 120.08L173.41 149.58L122.31 120.08L122.31 61.08zM122.31 120.08L173.41 149.58L173.41 208.58L122.31 238.08L71.22 208.58L71.22 149.58zM173.41 208.58L224.51 238.08L224.51 297.08L173.41 326.58L122.31 297.08L122.31 238.08zM173.41 385.58L224.51 415.08L224.51 474.08L173.41 503.58L122.31 474.08L122.31 415.08zM224.51 120.08L275.6 149.58L275.6 208.58L224.51 238.08L173.41 208.58L173.41 149.58zM224.51 297.08L275.6 326.58L275.6 385.58L224.51 415.08L173.41 385.58L173.41 326.58zM326.7 120.08L377.8 149.58L377.8 208.58L326.7 238.08L275.6 208.58L275.6 149.58zM377.8 208.58L428.9 238.08L428.9 297.08L377.8 326.58L326.7 297.08L326.7 238.08zM326.7 297.08L377.8 326.58L377.8 385.58L326.7 415.08L275.6 385.58L275.6 326.58zM377.8 385.58L428.9 415.08L428.9 474.08L377.8 503.58L326.7 474.08L326.7 415.08zM428.9 297.08L479.99 326.58L479.99 385.58L428.9 415.08L377.8 385.58L377.8 326.58zM428.9 474.08L479.99 503.58L479.99 562.58L428.9 592.08L377.8 562.58L377.8 503.58zM531.09 297.08L582.19 326.58L582.19 385.58L531.09 415.08L479.99 385.58L479.99 326.58zM684.38 385.58L735.48 415.08L735.48 474.08L684.38 503.58L633.28 474.08L633.28 415.08zM837.67 297.08L888.77 326.58L888.77 385.58L837.67 415.08L786.57 385.58L786.57 326.58zM888.77 385.58L939.87 415.08L939.87 474.08L888.77 503.58L837.67 474.08L837.67 415.08zM939.87 474.08L990.96 503.58L990.96 562.58L939.87 592.08L888.77 562.58L888.77 503.58zM1093.16 385.58L1144.25 415.08L1144.25 474.08L1093.16 503.58L1042.06 474.08L1042.06 415.08zM1144.25 120.08L1195.35 149.58L1195.35 208.58L1144.25 238.08L1093.16 208.58L1093.16 149.58zM1144.25 297.08L1195.35 326.58L1195.35 385.58L1144.25 415.08L1093.16 385.58L1093.16 326.58zM1348.64 120.08L1399.74 149.58L1399.74 208.58L1348.64 238.08L1297.54 208.58L1297.54 149.58zM1348.64 297.08L1399.74 326.58L1399.74 385.58L1348.64 415.08L1297.54 385.58L1297.54 326.58zM1399.74 385.58L1450.83 415.08L1450.83 474.08L1399.74 503.58L1348.64 474.08L1348.64 415.08zM1501.93 208.58L1553.03 238.08L1553.03 297.08L1501.93 326.58L1450.83 297.08L1450.83 238.08zM1450.83 297.08L1501.93 326.58L1501.93 385.58L1450.83 415.08L1399.74 385.58L1399.74 326.58zM1450.83 474.08L1501.93 503.58L1501.93 562.58L1450.83 592.08L1399.74 562.58L1399.74 503.58z"
                      stroke="rgba(247, 153, 57, 1)"
                      stroke-width="2"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex relative justify-center items-center">
                <h1 className=" font-bold text-custom-text-gray lg:text-[300%] xs:text-[100%]">
                  We're passionate about helping entrepreneurs change the world
                  and build a better tomorrow.
                </h1>
              </div>
            </div>
            <div className="">
              <form 
              onSubmit={handleSignIn}
              className="m-8 w-[341px] rounded-tl-none rounded-tr-[50px] rounded-br-none rounded-bl-[50px] bg-custom-bg-orange shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start py-[100px] px-[55px] box-border gap-[29px] min-w-[341px] max-w-full mq750:min-w-full mq450:pt-[90px] mq450:px-5 mq450:pb-[75px] mq450:box-border mq1050:flex-1">
                <div className="w-[341px] h-[455px] relative rounded-tl-none rounded-tr-31xl rounded-br-none rounded-bl-31xl bg-darkorange-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
                <div className="self-stretch rounded-mini bg-whitesmoke rounded-[15px] flex flex-row items-center justify-start py-[11px] px-2.5 z-[1] border-[1px] border-solid border-gainsboro-200">
                  <div className="h-[38px] w-[220px] relative rounded-mini bg-whitesmoke box-border hidden border-[1px] border-solid border-gainsboro-200" />
                  <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                    className="w-[200px] [border:none] [outline:none]  font-semibold font-montserrat text-xs bg-[transparent] h-4 relative text-black text-left inline-block whitespace-nowrap z-[2]"
                    placeholder="Email@gmail.com"
                    name="email"
                    // onChange={handleInput}
                    type="text"
                    required
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[14px_0px]">
                  <div className="self-stretch rounded-mini bg-whitesmoke rounded-[15px] flex flex-row items-center justify-start py-[11px] px-[15px] z-[1] border-[1px] border-solid border-gainsboro-200">
                    <div className="h-[38px] w-[220px] relative rounded-mini bg-whitesmoke box-border hidden border-[1px] border-solid border-gainsboro-200" />
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                      className="w-[200px] [border:none] [outline:none] font-semibold font-montserrat text-xs bg-[transparent] h-4 relative text-black text-left inline-block z-[2]"
                      placeholder="Password"
                      name="password"
                      // onChange={handleInput}
                      type="password"
                      required
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

                <button id="SignInDiv"></button>
                <div className="w-[204px] flex flex-row items-start justify-start py-0 px-2 box-border">
                  <b className="flex-1 relative text-3xs font-inter text-left z-[1]">
                    <span className="text-white">Don’t have account?</span>
                    <span className="text-mediumslateblue"> Sign up here!</span>
                  </b>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* <footer className="w-full bg-custom-bg-black static bottom-0 text-center text-white p-4 text-xs"> */}
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
      </div>
    </>
  );
};

export default Login;
