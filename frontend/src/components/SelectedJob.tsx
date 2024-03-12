import { useLocation } from "react-router-dom";
import Navar from "./Navar";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCalendarDays,
  faFileText,
  faPesoSign,
  faSuitcase,
  faTh,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    to: "/login",
  },
];

const loginRoute = data[0].to;

interface Skill {
  id: number;
  name: string;
  value: string;
}

interface Job {
  _id: string;
  jobName: string;
  jobDescription: string;
  jobType: string;
  jobSlot: number;
  jobSkills: Skill[];
  jobSetUp: string;
  jobExperience: number;
  jobCategory: string;
  jobFromSalary: number;
  jobToSalary: number;
  createdAt: Date;
}

export default function JobCategory() {
  const { pathname } = useLocation();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobId = localStorage.getItem("id");

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) return;
      try {
        const response = await axios.get(
          `http://localhost:9000/api/jobs/getJob/${jobId}`
        );
        console.log(response.data);
        setSelectedJob(response.data.job);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJob();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(selectedJob);
  return (
    <div className="min-h-screen max-w-screen bg-stone-100 font-montserrat">
      <>
        <Navar />
        <div className="bg-sky-800 w-full h-40 flex justify-center items-center">
          <Link to={loginRoute}>
            <button
              type="button"
              className="text-white bg-blue-700  justify-center items-center w-60 h-16 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex  me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FontAwesomeIcon icon={faSuitcase} className="pr-2" />
              Apply job
            </button>
          </Link>
        </div>
        <header className="h-full max-w-screen-xl mx-auto mt-10 border-gray-400">
          <section className="w-full h-52 bg-white rounded-2xl flex flex-col shadow-2xl">
            <div className="grid grid-cols-3 h-full">
              <div className="border-r border-gray-300 w-full h-full flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faSuitcase}
                  className="text-[50px] text-custom-text-black"
                />
                <span className="font-bold text-[25px] text-custom-text-black">
                  TYPE OF WORK
                </span>
                {selectedJob && <span>{selectedJob.jobType}</span>}
              </div>
              <div className="border-r border-gray-300 w-full h-full flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faPesoSign}
                  className="text-[50px] text-custom-text-black"
                />
                <span className="font-bold text-[25px] text-custom-text-black">
                  SALARY
                </span>
                <span>
                  {selectedJob?.jobFromSalary.toLocaleString()} -{" "}
                  {selectedJob?.jobToSalary.toLocaleString()}
                </span>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-[50px] text-custom-text-black"
                />
                <span className="font-bold text-[25px] text-custom-text-black">
                  DATE POSTED
                </span>
                <span>
                  {selectedJob?.createdAt
                    ? new Date(selectedJob.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "2-digit",
                        }
                      )
                    : ""}
                </span>
              </div>
            </div>
          </section>
        </header>
        <body className="max-w-screen-xl min-h-screen mx-auto rounded-b flex flex-col">
          <div className="first-div border border-gray-300 w-full h-full mt-20 bg-white rounded">
            <div className="title border-b border-gray-300 py-4 w-full">
              <div className="ml-10 space-x-2">
                <FontAwesomeIcon
                  icon={faFileText}
                  className="text-custom-text-black text-[30px]"
                />
                <span className="text-[20px] font-bold text-custom-text-black">
                  JOB OVERVIEW
                </span>
              </div>
            </div>
            <div className="content px-10">{selectedJob?.jobDescription}</div>
          </div>
          <div className="second-div border border-gray-300 w-full h-full mt-20 bg-white rounded">
            <div className="title border-b border-gray-300 py-4 w-full">
              <div className="ml-10 space-x-2">
                <FontAwesomeIcon
                  icon={faTh}
                  className="text-custom-text-black text-[30px]"
                />
                <span className="text-[20px] font-bold text-custom-text-black">
                  SKILL REQUIREMENT
                </span>
              </div>
            </div>
            <div className="data-list flex flex-col">
              <div className="grid grid-cols-3 gap-10 mx-10 py-10 text-center">
                {selectedJob?.jobSkills &&
                  selectedJob.jobSkills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 rounded px-20">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </body>
        <footer className="h-full  bg-custom-bg-black">
          <div className="py-4 flex flex-col justify-center items-center">
            <img src="./images/footer-logo.png" className="h-32 w-32" />
            <span className="text-gray-50 pt-4">
              Copyright @ 2024 TERAVAULT, INC. dba Teravault Software. All
              rights reversed
            </span>
          </div>
        </footer>
      </>
    </div>
  );
}
