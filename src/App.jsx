import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import HomeHeader from "./components/Home/Header/HomeHeader";
import DemoHeader from "./components/Demo/DemoHeader";
import { Blog } from "./Context/Context";
import { ToastContainer } from "react-toastify";
import Profile from "./components/Home/Profile/Profile";
import Write from "./components/Home/Write/Write";
import SinglePost from "./components/Common/Posts/SinglePost";
import EditPost from "./components/Common/Posts/EditPost";
import FilterPost from "./components/Demo/FilterPost";

function App() {
  const { currentUser } = Blog();
  return (
    <>
      <DemoHeader />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;
