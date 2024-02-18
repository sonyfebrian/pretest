import { LuClock10, LuClock6 } from "react-icons/lu";
import { RxCountdownTimer } from "react-icons/rx";

const Activity = () => {
  return (
    <>
      <h2 className="text-gray-900  text-lg title-font font-bold mb-2">
        Today&apos;s activity
      </h2>

      <div className="flex flex-wrap justify-between -mx-4 -my-8 w-full">
        <div className="py-8 px-1 lg:w-1/3">
          <div className="h-full flex flex-col items-center">
            <LuClock10 className="w-20 h-20 mb-4 text-red-500" />
            <p className="font-bold  text-lg text-gray-800 title-font leading-none">
              18:30
            </p>
            <p className="font-medium text-sm mt-2 text-gray-800 title-font leading-none">
              Check In
            </p>
          </div>
        </div>
        <div className="py-8 px-1 lg:w-1/3">
          <div className="h-full flex flex-col items-center">
            <RxCountdownTimer className="w-20 h-20 mb-4 text-red-500" />
            <p className="font-bold text-lg text-red-500 title-font leading-none">
              03:00:00
            </p>
            <p className="font-medium text-sm mt-2 text-gray-800 title-font leading-none">
              Working Hours
            </p>
          </div>
        </div>
        <div className="py-8 px-1 lg:w-1/3">
          <div className="h-full flex flex-col items-center">
            <LuClock6 className="w-20 h-20 mb-4 text-red-500" />
            <p className="font-medium text-lg text-gray-800 title-font leading-none">
              --:--
            </p>
            <p className="font-medium text-sm mt-2 text-gray-800 title-font leading-none">
              Check Out
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
