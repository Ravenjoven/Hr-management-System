import { useEffect, useState } from "react";
import Navar from "./Navar";

import { Link } from "react-router-dom";
import axios from "axios";

// interface Category {
//   _id: string;
//   jobs: string[];
//   jobCategory: string;
// }

export default function JobCategory() {
  //   const [category, setCategory] = useState<Category[]>([]);
  //   useEffect(() => {
  //     // Function to fetch jobs when component mounts
  //     const fetCategory = async () => {
  //       try {
  //         const response = await axios.get(
  //           "http://localhost:9000/api/jobs/getCategory"
  //         );
  //         setCategory(response.data.category);
  //       } catch (error) {
  //         console.error("Error fetching jobs:", error);
  //       }
  //     };
  //     fetCategory();
  //   }, [category]);
  return (
    <div className="min-h-screen max-w-screen bg-stone-100 font-montserrat">
      <>
        <Navar />
        <header className="h-full bg-custom-bg-gray max-w-screen-xl mx-auto rounded-t border-b border-gray-400">
          <section className="flex rounded-2xl mt-10">
            <div className="input-header w-full flex justify-center items-center mx-10 relative my-8">
              <input
                type="text"
                className="w-full rounded-full h-10 px-4"
                placeholder="Search for a job title"
              />
              <button className="bg-sky-950 rounded-full w-32 h-10 text-white absolute right-0 top-0">
                Search
              </button>
            </div>
          </section>
        </header>
        <body className="bg-custom-bg-gray max-w-screen-xl min-h-screen mx-auto rounded-b flex">
          <div className="left-box w-96 border-r border-gray-400 flex flex-col">
            <div className="mx-4 pt-2 space-y-2">
              <h1>Filter by skills:</h1>
              <span>SELECT UP TO 3 SKILLS</span>
              <input
                type="text"
                className="border h-12 rounded w-full bg-transparent border-gray-400"
              />
            </div>
            <div className="mt-2 border-b border-gray-400 mx-4">
              <span className="border rounded bg-blue-800 text-white w-full h-20">
                This is a test skill
              </span>
            </div>
            <div className="mx-4 pt-2 space-y-2">
              <h1>EMPLOYMENT TYPE</h1>
              <div className="flex flex-col items-start space-y-2">
                <div className="flex justify-center items-center">
                  <input type="checkbox" name="" id="" className="w-4 h-4" />
                  <span className="pl-2 font-semibold text-custom-text-gray">
                    FULL TIME
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <input type="checkbox" name="" id="" className="w-4 h-4" />
                  <span className="pl-2 font-semibold text-custom-text-gray">
                    PART TIME
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex justify-center items-center mt-4">
              <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                REFINE SEARCH RESULT
              </button>
            </div>
          </div>
          <div className="right-box w-full h-full">
            <div className="mx-2 my-4 text-[12px]">
              Displaying 30 out of 1,000+ jobs
            </div>
            <div className="space-y-4 mb-20">
              <div className="cards border rounded mx-2 bg-white">
                <div className="m-8">
                  <h1 className="capitalize font-semibold pb-2">
                    Paid media expert (google ads and Meta Ads)
                  </h1>
                  <div className="flex text-[12px]">
                    <span>Testing.</span>Posted on<span>Mar 07, 2024</span>
                  </div>
                  <div className="md:flex">
                    <span>PHP 50,000</span> -
                    <span className="pr-2">80,000 pm</span>(depending on
                    experience)
                  </div>
                  <div className="description">
                    We are an Australian digital marketing agency. We are
                    seeking a Paid Media Expert (Google Ads and Meta Ads) to
                    work Full-Time on Philippines-friendly times. You'll get: *
                    Attractive marketing-based pay rate PLUS 18 days paid leave
                    per year * Full-time position on Philippines-friendly times
                    (Sydney time M-F
                    <a href="" className="text-blue-600">
                      See More.
                    </a>
                  </div>
                </div>
              </div>
              <div className="cards border rounded mx-2 bg-white">
                <div className="m-8">
                  <h1 className="capitalize font-semibold pb-2">
                    Paid media expert (google ads and Meta Ads)
                  </h1>
                  <div className="flex text-[12px]">
                    <span>Testing.</span>Posted on <span>Mar 07, 2024</span>
                  </div>
                  <div className="md:flex">
                    <span>PHP 50,000</span> -
                    <span className="pr-2">80,000 pm</span>(depending on
                    experience)
                  </div>
                  <div className="description">
                    We are an Australian digital marketing agency. We are
                    seeking a Paid Media Expert (Google Ads and Meta Ads) to
                    work Full-Time on Philippines-friendly times. You'll get: *
                    Attractive marketing-based pay rate PLUS 18 days paid leave
                    per year * Full-time position on Philippines-friendly times
                    (Sydney time M-F
                    <a href="" className="text-blue-600">
                      See More.
                    </a>
                  </div>
                </div>
              </div>
              <div className="cards border rounded mx-2 bg-white">
                <div className="m-8">
                  <h1 className="capitalize font-semibold pb-2">
                    Paid media expert (google ads and Meta Ads)
                  </h1>
                  <div className="flex text-[12px]">
                    <span>Testing.</span>Posted on<span>Mar 07, 2024</span>
                  </div>
                  <div className="md:flex text-[14px]">
                    <span>PHP 50,000</span> -
                    <span className="pr-2">80,000 pm</span>(depending on
                    experience)
                  </div>
                  <div className="description">
                    We are an Australian digital marketing agency. We are
                    seeking a Paid Media Expert (Google Ads and Meta Ads) to
                    work Full-Time on Philippines-friendly times. You'll get: *
                    Attractive marketing-based pay rate PLUS 18 days paid leave
                    per year * Full-time position on Philippines-friendly times
                    (Sydney time M-F
                    <a href="" className="text-blue-600">
                      See More.
                    </a>
                  </div>
                </div>
              </div>
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
