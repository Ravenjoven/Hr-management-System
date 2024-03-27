import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navar from "./Navar";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import RegisterModal from "./Modal/RegisterModal";

interface User {
  profileObj?: string | null;
  name?: string;
  email?: string | null;
  imageUrl?: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User>({ email: null });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/user/signin",
        {
          email,
          password,
        }
      );
      console.log(response);
      const userRole = response.data.stat;
      const userId = response.data.id;

      // Redirect based on user role
      if (userRole === "Admin") {
        ReactSession.set("user", userId);
        if (ReactSession.get("user") !== "") {
          navigate("/Dashboard");
        }
        // Redirect to dashboard
      } else if (userRole === "User" || userRole === "Employee") {
        // Redirect to UserProfil
        ReactSession.set("user", userId);
        if (ReactSession.get("user") !== "") {
          navigate("/UserProfile");
        }
      }
      toast.success("Login successful");
    } catch (error) {
      // Handle login error
      toast.error("Invalid email or password");
    }
  };
  //show password function
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //Google Log in

  const googleLogin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log("Login Success! Current user:", credentialResponse);
      const accessToken = credentialResponse.access_token;
      try {
        
        const userInfoResponse = await fetch(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userInfo = await userInfoResponse.json();

        const userName = userInfo.name;
        const userEmail = userInfo.email;
        const userProfilePicture = userInfo.picture;

        ReactSession.set("info", userInfo);
        ReactSession.set("email", userEmail);
        if (ReactSession.get("email") !== "") {
          navigate("/userProfile");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
    scope: "openid email profile",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ToastContainer />
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
                <h1 className=" font-bold text-custom-text-gray lg:text-2xl xs:text-sm">
                  We're passionate about helping entrepreneurs change the world
                  and build a better tomorrow.
                </h1>
              </div>
            </div>
            <div className="m-4 w-[341px] rounded-tl-none rounded-tr-[50px] rounded-br-none rounded-bl-[50px] bg-custom-bg-orange shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start py-[100px] px-[55px] box-border gap-[29px] min-w-[341px] max-w-full mq750:min-w-full mq450:pt-[90px] mq450:px-5 mq450:pb-[75px] mq450:box-border mq1050:flex-1">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignIn();
                }}
              >
                <div className="self-stretch my-2 rounded-mini bg-gray-50 rounded-[15px] flex flex-row items-center justify-start py-[11px] px-2.5 z-[1] border-[1px] border-solid border-gainsboro-200">
                  <input
                    className="w-[200px] [border:none] [outline:none] font-montserrat text-xs bg-[transparent] h-4 relative text-black text-left inline-block whitespace-nowrap z-[2]"
                    placeholder="Email@gmail.com"
                    type="email"
                    id="email"
                    aria-describedby="helper-text-explanation"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[14px_0px]">
                  <div className="self-stretch my-2 rounded-mini bg-gray-50 rounded-[15px] flex flex-row items-center justify-start py-[11px] px-[15px] z-[1] border-[1px] border-solid border-gainsboro-200">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      aria-describedby="helper-text-explanation"
                      className="w-[200px] [border:none] [outline:none] font-montserrat text-xs bg-[transparent] h-4 relative text-black text-left inline-block z-[2]"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="inline-block ml-2 focus:outline-none"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="flex justify-center items-center mt-4 mx-auto text-sm border border-white bg-transparent hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 "
                  >
                    Sign In
                  </button>
                  <div className="w-[204px] flex items-center justify-center py-0 px-2 box-border">
                    <b className="text-3xs font-inter text-left z-[1]">
                      <span className="text-white text-sm">OR</span>
                    </b>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="flex justify-center items-center mt-4 bg-white rounded-xl p-2.5 w-full m-[2px]"
                    onClick={() => googleLogin()} // Attach the login function to your button's onClick event
                  >
                    <img
                      src="../images/Gmail.png"
                      alt="Google"
                      className="w-[20px] mr-[20px] inline"
                    />
                    <span className="text-xs">Log in with Google</span>
                  </button>
                </div>
              </form>
              <div>
                <p
                  id="helper-text-explanation"
                  className="mt-8 text-xs text-white flex"
                >
                  Don't have account?
                  <div
                    onClick={openModal}
                    className="font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign up here!
                  </div>
                </p>
                {isOpen && (
                  <RegisterModal
                    isOpen={isOpen}
                    onClose={closeModal}
                    title="Sign Up"
                  ></RegisterModal>
                )}
              </div>
            </div>
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
      </div>
    </>
  );
};

export default Login;

// function App () {
