import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import OjtNavar from "./OjtNavar";
import Modal from "./Modal";
import OjtSidebar from "./OjtSidebar";
import { ReactSession } from "react-client-session";
import { data } from "autoprefixer";
interface User {
  name: string;
  email: string;
}
interface Job {
  _id: string;
  jobName: string;
  jobDescription: string;
  jobSlots: number;
  jobCategory: string;
  jobSkills: any[];
  createdAt: Date;
}
const OjtJobList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [jobCount, setJobCount] = useState("•");

  useEffect(() => {
    if (jobs.length > 0) {
      setSelectedJob(jobs[0]);
      localStorage.setItem("id", jobs[0]._id);
    }
  }, [jobs]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/jobs/get");
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const formattedJobs = jobs.map((job) => {
    const formattedDate = new Date(job.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    return {
      ...job,
      createdAt: formattedDate,
    };
  });

  const filteredJobs = jobs.filter((job) => {
    const searchQueryLower = searchQuery.toLowerCase();
    return (
      job.jobName.toLowerCase().includes(searchQueryLower) ||
      job.jobDescription.toLowerCase().includes(searchQueryLower) ||
      job.jobSlots.toString().includes(searchQueryLower) || // Assuming jobLimit refers to jobSlots
      job.createdAt.toString().toLowerCase().includes(searchQueryLower)
    );
  });

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (job: any) => {
    localStorage.setItem("id", job?._id);
    setSelectedJob(job);
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
  if (user) {
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
            <OjtSidebar expanded={expanded} jobCount={jobCount} />
            <div
              className={`content h-full max-w-full z-1  ${
                expanded ? "ml-0" : "ml-[280px]"
              }`}
            >
              <div className="flex ml-2 ">
                <div className="left-div mt-4 w-[400px] rounded-2xl">
                  <div>
                    <span className="text-4xl font-bold text-custom-text-black">
                      Hello,<span> {user.family_name}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-center flex-grow pt-9">
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="absolute top-1/2 transform -translate-y-1/2 left-4 w-4 h-4"
                      />
                      <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        className="rounded-2xl border-hide text-black pl-10 w-96 h-12"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <span className="text-[10px] mb-4 text-custom-text-black">
                      {jobs.length} jobs posted
                    </span>
                  </div>
                  <div className=" w-96 h-[450px] overflow-y-auto scrollbar-thin overflow-hidden rounded-3xl mr-2">
                    {filteredJobs.map((job, index) => (
                      <div
                        key={job._id}
                        onClick={() => handleClick(job)}
                        className="w-96 bg-white rounded-3xl p-4 mt-2 cursor-pointer text-white hover:transition ease-in-out delay-70 hover:bg-orange-700 hover:bg-opacity-[25%] active:bg-orange-700"
                      >
                        <div>
                          <span className="text-custom-text-orange text-xs">
                            {formattedJobs[index] &&
                              formattedJobs[index].createdAt}
                          </span>
                        </div>
                        <div className="text-custom-text-black">
                          <span className="capitalize">{job.jobName}</span>
                        </div>
                        <div className="text-xs">
                          {selectedJob === job &&
                            job.jobSkills.map((skill, index) => (
                              <span key={index} className="text-green-600">
                                {index === 0 ? "" : ", "} {skill.name}
                              </span>
                            ))}
                        </div>
                        <div>
                          <span className="text-[10px] text-custom-text-black">
                            {job.jobSlots} slots
                          </span>
                        </div>
                      </div>
                    ))}
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
                    <div className="flex justify-end ">
                      <button
                        onClick={openModal}
                        className="bg-custom-bg-orange mt-12 mr-12 p-2 rounded-xl text-white flex items-center"
                      >
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
                      <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        selectedJob={selectedJob}
                      />
                    </div>
                    <div className="mt-10  w-2">
                      <div className="text-custom-text-black ml-9 text-5xl font-bold">
                        <span className="capitalize">
                          {selectedJob ? selectedJob.jobName : ""}
                        </span>
                      </div>
                    </div>
                    <div className="ml-9 mt-9 text-custom-text-black">
                      <span>Description</span>
                    </div>
                    <div className="ml-9 mt-4 mr-9 text-[12px] text-custom-text-black font-medium">
                      <p className="mb-10">
                        {selectedJob ? selectedJob.jobDescription : ""}
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
};
export default OjtJobList;
