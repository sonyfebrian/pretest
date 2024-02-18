import { FcOk } from "react-icons/fc";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineSick } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="  mx-auto">
          <Link to="/">
            <div className="flex flex-wrap justify-start bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5  mb-8 w-full">
              <FaArrowLeft className="w-5 h-5" />
              <h1 className="font-extrabold text-2xl ml-4 text-red-500 title-font leading-none">
                Notification
              </h1>
            </div>
          </Link>
          {[1, 2, 3].map((index) => (
            <>
              <div
                key={index}
                className="flex items-center lg:w-3/5 mx-auto bg-indigo-100  p-5  sm:flex-row flex-col"
              >
                <div className="sm:w-20 sm:h-20 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-red-500 to-red-900  flex-shrink-0">
                  <FaCoins className="w-10 h-10 text-orange-400" />
                </div>
                <div className="sm:w-4 sm:h-4 h-4 w-4 -ml-12 -mb-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <FcOk className="h-4 w-4" />
                </div>
                <div className="flex-grow sm:text-left text-center ml-10 mt-6 sm:mt-0">
                  <div className="flex flex-wrap justify-between mb-1  w-full">
                    <h2 className="   title-font font-extrabold leading-none">
                      Reimbursement
                    </h2>
                    <h2 className=" title-font leading-none">Today</h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:w-3/5 mx-auto p-5 sm:flex-row flex-col">
                <div className="sm:w-20 sm:h-20 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-red-500 to-red-900  flex-shrink-0">
                  <MdOutlineTimer className="w-10 h-10 text-white " />
                </div>
                <div className="sm:w-4 sm:h-4 h-4 w-4 -ml-12 -mb-20  inline-flex items-center justify-center rounded-full bg-red-600 text-white text-sm flex-shrink-0">
                  X
                </div>
                <div className="flex-grow sm:text-left text-center ml-10 mt-6 sm:mt-0">
                  <div className="flex flex-wrap justify-between mb-1  w-full">
                    <h2 className="   title-font font-extrabold leading-none">
                      Overtime
                    </h2>
                    <h2 className=" title-font leading-none">Yesterday</h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:w-3/5 mx-auto bg-indigo-100  p-5  sm:flex-row flex-col">
                <div className="sm:w-20 sm:h-20 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-red-500 to-red-900 text-indigo-500 flex-shrink-0">
                  <MdOutlineSick className="w-10 h-10 text-white" />
                </div>
                <div className="sm:w-4 sm:h-4 h-4 w-4 -ml-12 -mb-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <FaArrowCircleRight className="h-4 w-4 " />
                </div>
                <div className="flex-grow sm:text-left text-center ml-10 mt-6 sm:mt-0">
                  <div className="flex flex-wrap justify-between mb-1  w-full">
                    <h2 className="   title-font font-extrabold leading-none">
                      Sickness
                    </h2>
                    <h2 className=" title-font leading-none">2022-10-09</h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Notification;
