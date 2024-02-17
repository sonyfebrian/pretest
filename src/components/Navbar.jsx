import {
  FaHome,
  FaRegCalendarCheck,
  FaFileAlt,
  FaRegSun,
} from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      {" "}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t shadow-[0_8px_30px_rgb(0,0,0,0.12)]  border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full w-full grid-cols-5 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <FaHome className="w-5 h-5" />
            <span className="text-sm text-gray-500 absolute -mb-12 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Home
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <FaRegCalendarCheck className="w-5 h-5" />
            <span className="text-sm absolute -mb-12  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Attendance
            </span>
          </button>

          <button
            type="button"
            className="w-16 h-16 -mt-8 ml-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white mb-4 sm:ml-8"
          >
            <VscSignOut className="w-8 h-8" />
            <span className="text-sm absolute -mb-28 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Check Out
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <FaFileAlt className="w-5 h-5" />
            <span className="text-sm text-gray-500 absolute -mb-12 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Form
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <FaRegSun className="w-5 h-5" />
            <span className="text-sm text-gray-500 absolute -mb-12 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Setting
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
