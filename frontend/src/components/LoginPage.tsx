import React from "react";
const Login = () => {
  return (
    <div className="min-h-screen max-w-screen bg-white font-montserrat">
      <>
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-full ml-[115px]">
            <div className="flex items-center justify-start">
              <img src="../images/img2.png" className="h-10"></img>
              <img src="../images/img3.png" className="h-10 pt-2" />
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-0"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto mr-[80px]"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-400 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:text-custom-text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:text-custom-text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="max-w-screen-xl flex mx-auto ml-5">
          <div className="items-center pl-5 pt-2 mx-auto mt-[20px]">
            <p className="pt-2 text-custom-text-gray">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor incididunt. <br />
              dasl;dka;sld;lsajldjsal;jd;lasd;las;ldasdn;lasnd;asd'asdaslndasn
              <br />
              dla;smd.asdmas.md.,asdas,dmas <br />
              asdasdasdas <br /> asdknasldnlasdasd <br />
              da sdkasdas das <br />
            </p>
            <h1 className="font-bold text-custom-text-gray text-4xl">
              We're passionate about <br />
              helping entrepreneurs change <br />
              the world and build a better
              <br />
              tomorrow.
            </h1>
          </div>
          <div className="flex justify-center items-center mx-auto mt-[40px] h-[60vh]">
            <form
              className="max-w-md bg-[#f89939] p-4 rounded-tr-[50px] p-[30px] rounded-bl-[50px] h-[100%]"
              action=""
            >
              
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-[80px]"
                placeholder="name@gmail.com"
              />

              
              <input
                type="password"
                id="password"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-[30px]"
                placeholder="Enter your password"
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-white "
              >
                Don't have account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign up here!
                </a>
                
              </p>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="mt-4 mx-auto border border-white bg-transparent hover:bg-gray-600 text-white font-small py-2 px-4 rounded-lg focus:outline-none focus:ring-2 "
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </section>
        <footer className="mt-8 bg-gray-600 text-center text-white p-4">
          <div className="flex justify-center items-center">
            <img src="../images/img2.png" className="h-10"></img> 
          </div>
          <br />
            Copyright &copy; 2024 TERAVAULT, INC. dba TeraVault Software. All
            rights reserved
        </footer>
      </>
    </div>
  );
};
export default Login;
