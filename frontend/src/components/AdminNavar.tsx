import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
function AdminNavar() {
  return (
    <nav className="border-b-4 border-gray-400 bg-white top-0 sticky z-50">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto md:p-4 h-full">
        <div className="flex items-center justify-start">
          <img src="../images/img2.png" className="h-10"></img>
          <img src="../images/img3.png" className="h-10 pt-2" />
        </div>

        <div className="block w-auto h-auto pr-4" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block md:py-2 rounded md:bg-transparent md:text-orange-400 md:p-0 hover:text-blue-400"
                aria-current="page"
              >
                <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:py-2 rounded md:bg-transparent md:text-orange-400 md:p-0 hover:text-blue-400"
                aria-current="page"
              >
                <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavar;
