import React from "react";
import error404 from "../images/error-404.png";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mt-10 lg:mt-24 xl:mt-40 ">
        <img className="" src={error404} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
