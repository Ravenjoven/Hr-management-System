import AdminNavar from "../AdminNavar";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import AddCategory from "../Modal/AddCategoryModal";
import axios from "axios";

interface Category {
  _id: string;
  jobCategory: string;
}

function AdminJobCategory() {
  const [category, setCategory] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Function to fetch jobs when component mounts
    const fetCategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/jobs/getCategory"
        );
        setCategory(response.data.category);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetCategory();
  }, [category]);

  return (
    <div className="min-h-screen max-w-screen bg-white font-montserrat">
      <>
        <AdminNavar />
        <div className="fixed  z-50">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            onClick={toggleExpanded}
            className="cursor-pointer z-50 inline-flex items-center text-sm text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-8 h-8 hover:bg-gray-100"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="relative w-full mt-8">
          <Sidebar expanded={expanded} />
          <div
            className={`content h-full max-w-full z-1  ${
              expanded ? "ml-0" : "ml-[280px]"
            }`}
          >
            <div className="upper-div md:min-w-full h-16 bg-custom-text-orange rounded flex text-white items-center rounded-tr-[25px]">
              <div className="pl-4 uppercase font-bold">Category List</div>
              <div className="flex-grow"></div>
              <div>
                <button
                  onClick={handleOpen}
                  className="border-[3px] flex justify-end items-end hover:bg-blue-400 border-custom-text-white m-4 bg-green-400 text-white py-2 px-4 rounded"
                >
                  Add Category
                </button>
                {isOpen && (
                  <AddCategory
                    isOpen={isOpen}
                    onClose={handClose}
                    title="Add Category"
                  ></AddCategory>
                )}
              </div>
            </div>
            <div className="lower-div w-full flex flex-col h-full border-[3px] border-custom-text-orange rounded-md mt-4">
              <section className="flex">
                <div className="w-full h-full my-auto px-auto text-left">
                  <h1 className="font-bold pl-4 w-full text-custom-text-gray text-3xl">
                    We're passionate about <br />
                    helping entrepreneurs <br /> change the world and build{" "}
                    <br />a better tomorrow.
                  </h1>
                </div>
                <div className="w-full">
                  <img
                    src="../images/image.png"
                    className="w-[350px] h-90 mx-auto"
                  />
                </div>
              </section>
              <div className="grid md:grid-cols-5 grid-cols-1 w-full h-full gap-8 my-2">
                {category.map((categories, index) => (
                  <div
                    key={index}
                    className="h-28 bg-custom-bg-gray rounded-xl text-center pt-8 cursor-pointer hover:bg-transparent hover:border-2 border-black"
                  >
                    <h5 className="font-bold text-custom-text-black capitalize">
                      {categories.jobCategory}
                    </h5>
                    <span className="text-custom-text-black">
                      1 job available
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default AdminJobCategory;
