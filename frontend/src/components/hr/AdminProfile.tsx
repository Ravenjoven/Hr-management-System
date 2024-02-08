import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar";

function ProfilePage() {
  return (
    <div className="min-h-screen max-w-screen bg-white font-montserrat">
      <>
        <nav className="border-b-4 border-gray-400  top-0 sticky z-50">
          <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto md:p-4 h-full">
            <div className="flex items-center justify-start">
              <img src="../images/img2.png" className="h-10"></img>
              <img src="../images/img3.png" className="h-10 pt-2" />
            </div>

            <div className="block w-auto h-auto pr-4" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block md:py-2 px-3 rounded md:bg-transparent md:text-orange-400 md:p-0 hover:text-blue-400"
                    aria-current="page"
                  >
                    <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Sidebar />
        <div className="content fixed h-screen w-full mt-8 md:ml-[280px]">
          <div className="upper-div w-[80%] h-10 font-bold bg-custom-text-orange rounded flex text-white">
            <span className="my-auto pl-4">PERSONAL INFO</span>
          </div>
          <div className="right-div w-60 h-full mt-4 border-[3px] rounded-2xl border-custom-text-orange">
            <div className="border-b border-black flex flex-col text-center justify-center items-center">
              <div className=" border-[3px] border-custom-text-orange rounded-l-full rounded-br-full mt-8 mb-2 rounded-tr-lg h-40 w-40"></div>
              <h4 className="text-black font-bold">TERAVAULT</h4>
              <span className="text-custom-text-gray font-semibold">
                HR Manager
              </span>
            </div>
            <div>Details</div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ProfilePage;
