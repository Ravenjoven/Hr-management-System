import { useLocation } from "react-router-dom";
import Navar from "./Navar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const data = [
  {
    to: "/SelectedJob",
  },
];
const firstRoute = data[0].to;

interface Skill {
  id: number;
  name: string;
  value: string;
}

interface Jobs {
  _id: string;
  jobName: string;
  jobDescription: string;
  jobType: string;
  jobSlot: number;
  jobSkills: Array<{ id: number; name: string; value: string }>;
  jobSetUp: string;
  jobExperience: number;
  jobCategory: string;
  jobFromSalary: number;
  jobToSalary: number;
  createdAt: Date;
}

export default function JobCategory() {
  const { pathname } = useLocation();
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [filterJobSkills, setfilterJobSkills] = useState<Jobs[]>([]);
  const [skills, setSkills] = useState<
    Array<{ id: number; name: string; value: string }>
  >([]);
  const location = useLocation();
  const categoryId = location.state;

  useEffect(() => {
    const fetchJob = async () => {
      if (!categoryId) return;
      try {
        const response = await axios.get(
          `http://localhost:9000/api/jobs/getJobs/${categoryId}`
        );
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJob();
  }, []);

  useEffect(() => {
    // Extract skills and de-duplicate
    const allSkills = jobs.flatMap((job) => job.jobSkills);
    // Using a map to track unique skills by name
    const skillsMap = new Map();
    for (const skill of allSkills) {
      if (!skillsMap.has(skill.name)) {
        skillsMap.set(skill.name, skill);
      }
    }
    // Converting Map values back to an array
    const uniqueSkills = Array.from(skillsMap.values());
    setSkills(uniqueSkills);
  }, [jobs]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const addSkillIfValid = () => {
    const skillToAdd = skills.find(
      (skill) => skill.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (
      skillToAdd &&
      selectedSkills.length < 3 &&
      !selectedSkills.find((skill) => skill.id === skillToAdd.id)
    ) {
      setSelectedSkills((prev) => [...prev, skillToAdd]);
    }
    setInputValue("");
  };

  const removeSkill = (id: any) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill.id !== id));
  };

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

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const truncateText = (text: string, maxLength: number) => {
    // Check if the text length is greater than the specified max length
    if (text.length > maxLength) {
      // If so, truncate the text to the max length and append "..."
      return text.substring(0, maxLength) + "...";
    } else {
      // If not, return the text as is
      return text;
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.jobName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const refineSearchResults = () => {
    const jobMatchesSelectedSkills = (job: any) => {
      if (selectedSkills.length === 0) return true;
      const selectedSkillIds = new Set(selectedSkills.map((skill) => skill.id));
      return job.jobSkills.some((skill: { id: number }) =>
        selectedSkillIds.has(skill.id)
      );
    };

    const newFilteredJobs = jobs.filter(
      (job) =>
        job.jobName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        jobMatchesSelectedSkills(job)
    );

    setfilterJobSkills(newFilteredJobs);
  };

  const newTab = (url: any, jodId: string) => {
    localStorage.setItem("id", jodId);
    window.open(url);
  };

  return (
    <div className="min-h-screen max-w-screen bg-stone-100 font-montserrat">
      <>
        <Navar />
        {/* <Link to={firstRoute}>
          <h4 className="max-w-screen-xl mx-auto text-blue-600 pt-2">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Homepage
          </h4>
        </Link> */}
        <header className="h-full bg-custom-bg-gray max-w-screen-xl mx-auto rounded-t border-b border-gray-400">
          <section className="flex rounded-2xl mt-10">
            <div className="input-header w-full flex justify-center items-center mx-10 relative my-8">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                className="w-full rounded-full h-10 pl-10 pr-20" // Adjusted padding
                onChange={handleSearchChange}
                placeholder="Search for a job title"
              />
              <button className="bg-sky-950 rounded-full w-32 h-10 text-white absolute right-0 top-0 hover:bg-blue-600 transition">
                Search
              </button>
            </div>
          </section>
        </header>
        <body className="bg-custom-bg-gray max-w-screen-xl min-h-screen mx-auto rounded-b flex">
          <div className="left-box w-96 border-r border-gray-400 flex flex-col">
            <div className="mx-4 pt-2 space-y-2">
              <h1 className="text-[20px] font-medium">Filter by skills:</h1>
              <span className="text-[14px] font-medium">
                SELECT UP TO 3 SKILLS
              </span>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onMouseOver={() => addSkillIfValid()}
                  placeholder="Search for skills"
                  className="pl-10 pr-4 py-2 border rounded w-full bg-transparent border-gray-400"
                  name="skills"
                  list="skill-list"
                />
              </div>
              <datalist id="skill-list">
                {skills.map((skill, index) => (
                  <option key={index} value={skill.name} />
                ))}
              </datalist>
            </div>
            <div className="mt-10 border-b border-gray-400 mx-4 space-y-2">
              <div className="grid grid-cols-2">
                {selectedSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="border rounded bg-blue-800 h-8 hover:bg-blue-600  text-white flex items-center justify-between p-2 overflow-hidden"
                  >
                    <span className="truncate text-[12px]">{skill.name}</span>
                    <button
                      onClick={() => removeSkill(skill.id)}
                      className="text-white ml-2"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-4 pt-5 space-y-2">
              <h1 className="text-[14px] font-medium">EMPLOYMENT TYPE</h1>
              <div className="flex flex-col items-start space-y-2">
                <div className="flex justify-center items-center">
                  <input type="checkbox" name="" id="" className="w-4 h-4" />
                  <span className="pl-2 font-semibold text-custom-text-gray">
                    CONTRACTOR
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <input type="checkbox" name="" id="" className="w-4 h-4" />
                  <span className="pl-2 font-semibold text-custom-text-gray">
                    EMPLOYEE
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <input type="checkbox" name="" id="" className="w-4 h-4" />
                  <span className="pl-2 font-semibold text-custom-text-gray">
                    INTERN
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex justify-center items-center mt-4">
              <button
                type="button"
                onClick={refineSearchResults}
                className="text-blue-700 font-semibold hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                REFINE SEARCH RESULT
              </button>
            </div>
          </div>
          <div className="right-box w-full h-full">
            <div className="mx-2 my-4 text-[12px]">
              {[...new Set(jobs.map((job) => job.jobCategory))].map(
                (category, index) => (
                  <div key={index} className="capitalize">
                    {category}
                  </div>
                )
              )}
              Displaying {jobs.length} jobs
            </div>
            <div className="space-y-4 mb-20">
              {filteredJobs.map((job, index) => (
                <div key={index} className="cards border rounded mx-2 bg-white">
                  <div className="m-8">
                    <h1 className="pb-2">
                      <span className="capitalize font-semibold">
                        {job.jobName}
                      </span>
                      <span className="text-normal ml-2 rounded bg-green-400 text-white">
                        {job.jobType}
                      </span>
                    </h1>
                    <div className="flex text-[12px]">
                      Posted on
                      <span className="pl-1">
                        {formattedJobs[index] && formattedJobs[index].createdAt}
                      </span>
                    </div>
                    {job.jobFromSalary > 0 && job.jobToSalary > 0 && (
                      <div className="md:flex">
                        <span>PHP {job.jobFromSalary.toLocaleString()}</span> -
                        <span className="pr-2">
                          {job.jobToSalary.toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="description">
                      {truncateText(job.jobDescription, 300)}
                      <a
                        href=""
                        onClick={() => newTab(firstRoute, job._id)}
                        className="text-blue-600"
                      >
                        See More.
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </body>
        <footer className="h-full mt-32 bg-custom-bg-black">
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
