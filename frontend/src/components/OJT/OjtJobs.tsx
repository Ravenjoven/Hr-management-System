import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../OJT/Style.css";
import OjtNavar from "./OjtNavar";
import OjtSidebar from "./OjtSidebar";

function OjtJobList() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };
  return (
    <div className="min-h-screen max-w-screen bg-custom-bg-smooth font-montserrat font-bold">
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
        <div className="relative w-full mt-2 bg-custom-bg-smooth">
          <OjtSidebar expanded={expanded} />
          <div
            className={`content h-full max-w-full z-1  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="flex">
              <div className="left-div mt-4 w-[400px] rounded-2xl">
                <div>
                  <span className="text-4xl font-bold text-custom-text-black">
                    Hello, John Doe!
                  </span>
                </div>
                <div className="flex items-center justify-center flex-grow pt-9">
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="absolute top-1/2 transform -translate-y-1/2 left-4 w-4 h-4"
                    />
                    <input
                      type="text"
                      className="rounded-2xl border-hide text-black pl-10 w-96 h-12"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <span className="text-[10px] mb-4 text-custom-text-black">
                    25 jobs posted
                  </span>
                </div>
                <div className=" w-96 h-[450px] overflow-y-auto scrollbar-thin overflow-hidden">
                  <div className="w-96 bg-white rounded-3xl p-4 mt-2 cursor-pointer text-white hover:transition ease-in-out delay-70 hover:bg-orange-700 hover:bg-opacity-[25%] active:bg-orange-700 ">
                    <div>
                      <span className="text-custom-text-orange text-xs">
                        february 00, 2024
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-custom-text-black">
                        Software Developer
                      </span>
                    </div>
                    <div className="text-xs font-bold text-custom-text-black">
                      <span className="text-custom-text-green">
                      Frontend 
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-custom-text-black">
                        10 applicants
                      </span>
                    </div>
                  </div>
                  <div className="w-96 bg-white rounded-3xl p-4 mt-2 cursor-pointer text-white hover:transition ease-in-out delay-70 hover:bg-orange-700 hover:bg-opacity-[25%] active:bg-orange-700 ">
                    <div>
                      <span className="text-custom-text-orange text-xs">
                        february 00, 2024
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-custom-text-black ">
                        Software Developer
                      </span>
                    </div>
                    <div className="text-xs font-bold text-custom-text-black">
                      <span className="text-custom-text-green">
                      Frontend 
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-custom-text-black">
                        10 applicants
                      </span>
                    </div>
                  </div>
                  <div className="w-96 bg-white rounded-3xl p-4 mt-2 cursor-pointer text-white hover:transition ease-in-out delay-70 hover:bg-orange-700 hover:bg-opacity-[25%] active:bg-orange-700 ">
                    <div>
                      <span className="text-custom-text-orange text-xs">
                        february 00, 2024
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-custom-text-black">
                        Software Developer
                      </span>
                    </div>
                    <div className="text-xs font-bold text-custom-text-black">
                      <span className="text-custom-text-green">
                      Frontend 
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-custom-text-black">
                        10 applicants
                      </span>
                    </div>
                  </div>
                  <div className="w-96 bg-white rounded-3xl p-4 mt-2 cursor-pointer text-white hover:transition ease-in-out delay-70 hover:bg-orange-700 hover:bg-opacity-[25%] active:bg-orange-700 ">
                    <div>
                      <span className="text-custom-text-orange text-xs">
                        february 00, 2024
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-custom-text-black">
                        Software Developer
                      </span>
                    </div>
                    <div className="text-xs font-bold text-custom-text-black">
                      <span className="text-custom-text-green">
                      Frontend 
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-custom-text-black">
                        10 applicants
                      </span>
                    </div>
                  </div>
                  <div className="w-96 bg-white rounded-3xl p-4 mt-2 cursor-pointer text-white hover:transition ease-in-out delay-70 hover:bg-orange-700 hover:bg-opacity-[25%] active:bg-orange-700 ">
                    <div>
                      <span className="text-custom-text-orange text-xs">
                        february 00, 2024
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-custom-text-black">
                        Software Developer
                      </span>
                    </div>
                    <div className="text-xs font-bold text-custom-text-black">
                      <span className="text-custom-text-green">
                      Frontend 
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-custom-text-black">
                        10 applicants
                      </span>
                    </div>
                  </div>
                  <div className="w-96 bg-white rounded-3xl p-4 mt-2 cursor-pointer text-white hover:transition ease-in-out delay-70 hover:bg-orange-700 hover:bg-opacity-[25%] active:bg-orange-700 ">
                    <div>
                      <span className="text-custom-text-orange text-xs">
                        february 00, 2024
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-custom-text-black">
                        Software Developer
                      </span>
                    </div>
                    <div className="text-xs font-bold text-custom-text-black">
                      <span className="text-custom-text-green">
                      Frontend 
                      </span>
                    </div>  
                    <div>
                      <span className="text-[10px] text-custom-text-black">
                        10 applicants
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white md:ml-4 rounded-3xl right-div w-full mt-4 md:overflow-hidden overflow-x-scroll pl-4 ml-4">
                <div>
                  <div>
                    <img
                      src="../images/img3.png"
                      alt=""
                      className="pt-12 pl-9 w-[150px] flex float-left"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button  className="bg-custom-bg-orange mt-12 mr-12 p-2 rounded-xl text-white flex items-center">
                      Apply now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        transform="rotate(45)"
                        className="ml-1"
                      >
                        <g fill="none">
                          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M13.06 3.283a1.5 1.5 0 0 0-2.12 0L5.281 8.939a1.5 1.5 0 0 0 2.122 2.122L10.5 7.965V19.5a1.5 1.5 0 0 0 3 0V7.965l3.096 3.096a1.5 1.5 0 1 0 2.122-2.122z"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="mt-10  w-2">
                    <span className="text-custom-text-black ml-9 text-5xl font-bold">
                      Software <span className="ml-9">Developer</span>
                    </span>
                  </div>
                  <div className="ml-9 mt-9 text-custom-text-black">
                    <span>Description</span>
                  </div>
                  <div className="ml-9 mt-4 mr-9 text-[12px] text-custom-text-black">
                    <p className="mb-10">
                      Lorem ipsum dolor sit amet. Aut soluta labore et fuga
                      minus rem temporibus quidem aut fuga odio et quam ipsa.
                      Eos quibusdam voluptatum et voluptate sequi in voluptate
                      voluptatibus eos aspernatur voluptatem in neque voluptatem
                      qui voluptates quia quo facere dolorem. Lorem ipsum dolor
                      sit amet. Aut soluta labore et fuga minus rem temporibus
                      quidem aut fuga odio et quam ipsa. Eos quibusdam
                      voluptatum et voluptate sequi in voluptate voluptatibus
                      eos aspernatur voluptatem in neque voluptatem qui
                      voluptates quia quo facere dolorem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet. Aut soluta labore et fuga
                      minus rem temporibus quidem aut fuga odio et quam ipsa.
                      Eos quibusdam voluptatum et voluptate sequi in voluptate
                      voluptatibus eos aspernatur voluptatem in neque voluptatem
                      qui voluptates quia quo facere dolorem. Lorem ipsum dolor
                      sit amet. Aut soluta labore et fuga minus rem temporibus
                      quidem aut fuga odio et quam ipsa. Eos quibusdam
                      voluptatum et voluptate sequi in voluptate voluptatibus
                      eos aspernatur voluptatem in neque voluptatem qui
                      voluptates quia quo facere dolorem.
                    </p>
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
export default OjtJobList;
