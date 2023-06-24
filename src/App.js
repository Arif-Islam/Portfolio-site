import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import ProjectInfo from "./Pages/ProjectInfo/ProjectInfo";
import Header from "./Pages/Home/Navbar/Header";
import { useEffect } from "react";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div>
      <div className="font-poppins">
        <Header></Header>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            {/* <Route
              path="/project/:id"
              element={<ProjectInfo></ProjectInfo>}
            ></Route> */}
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
