import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import Activity from "../components/Activity";
import People from "../components/People";
import Profile from "../components/Profile";
import Carousels from "../components/Carousel";

const Home = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="container  px-5 py-10 mx-auto flex flex-wrap">
        <NavbarTop />
        <Profile />
        <Activity />
        <Carousels />
        <People />
      </div>
    </>
  );
};

export default Home;
