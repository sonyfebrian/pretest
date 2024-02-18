import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import Notification from "./views/Notification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </>
  );
}

export default App;
