import Navbar from "./components/Navbar";
import People from "./components/People";

function App() {
  return (
    <>
      <Navbar />
      <div className="container  px-5 py-24 mx-auto flex flex-wrap">
        <People />
      </div>
    </>
  );
}

export default App;
