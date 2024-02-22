import React from "react";
import { Link } from "react-router-dom";
import Navar from "./Navar";
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
              className="bg-custom-text-orange mr-8 rounded-tr-[50px] p-[30px] rounded-bl-[50px] h-full"
              action=""
            >
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-[40px]"
                placeholder="name@gmail.com"
              />


              <input
                type="password"
                id="password"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-[20px]"
                placeholder="Enter your password"
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

              <button
                type="button"
                className="flex justify-center items-center mt-4 bg-white rounded-xl p-2.5 w-full m-[2px]"
              >
                <img
                  src="../images/Gmail.png"
                  alt=""
                  className="w-[20px] mr-[20px] inline "
                />
                <span className="text-xs">Log in with Google</span>
              </button>

              <p
                id="helper-text-explanation"
                className="mt-8 text-xs text-white"
              >
                Don't have account?
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
