import { VscBellDot } from "react-icons/vsc";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between -mx-4 mb-8 w-full">
        <h1 className="font-extrabold text-2xl ml-4 text-red-500 title-font leading-none">
          KerjaYuk!
        </h1>
        <Link to="/notification">
          <VscBellDot className="h-8 w-8 mr-5 cursor-pointer" />
        </Link>
      </div>
    </>
  );
};

export default NavbarTop;
