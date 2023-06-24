import React, { useState } from "react";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { send } from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const getName = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    send(
      "service_5qn24qs",
      "template_g1jsoln",
      { name, email, message },
      "SPL8rJyPUyeCRXNLo"
    )
      .then((res) => {
        console.log("response", res.status);
      })
      .catch((err) => {
        console.log("failed", err);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="py-14 lg:py-24 w-11/12 2xl:w-full mx-auto">    
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14">
        <div className="bg-[#f5f5f5] text-gray-800 w-[350px] sm:w-[400px] lg:w-[500px] 2xl:w-[475px] text-center lg:text-left lg:pl-10 py-14 rounded-sm">
          <p className="mb-2 text-lg text-blue-500 font-bold tracking-wide">
            Contact
          </p>
          <p className="mb-6 text-xl md:text-2xl font-semibold">
            Don't be shy, Hit me up!
          </p>
          {/* <div className="flex flex-col items-center "> */}
            <div className="flex space-x-4 items-center justify-center lg:justify-start mb-4 order-2">
              <GoLocation className="w-6 h-6 -ml-1 text-gray-600 hover:cursor-text hover:text-gray-800"></GoLocation>
              <p className="font-medium hover:text-blue-500">
                Sylhet, Bangladesh
              </p>
            </div>
            <div className="flex space-x-3 items-center justify-center lg:justify-start mb-4 order-3">
              <BsTelephone className="w-5 h-5 text-gray-600 hover:cursor-text hover:text-gray-800"></BsTelephone>
              <p className="font-medium hover:text-blue-500">+8801620608491</p>
            </div>
            <div className="flex space-x-3 items-center justify-center lg:justify-start mb-4 lg:mb-0 order-1">
              <GoMail className="w-6 h-6 text-gray-600 hover:cursor-text hover:text-gray-800"></GoMail>
              <p
                onClick={() =>
                  (window.location = "mailto:mdariful.islam9198@gmail.com")
                }
                className="font-medium hover:cursor-pointer hover:text-blue-500"
              >
                mdariful.islam9198@gmail.com
              </p>
            </div>
          {/* </div> */}
        </div>
        <div>
          <form
            onSubmit={sendEmail}
            className="flex flex-col items-center justify-center space-y-5"
          >
            <input
              onChange={getName}
              className="w-80 xl:w-96 2xl:w-96 h-12 p-2 text-gray-800 border border-[#2b2b2b] focus:border-blue-700 focus:outline-none font-medium"
              type="text"
              value={name}
              placeholder="Full Name"
              required
            />
            <input
              onChange={getEmail}
              className="w-80 xl:w-96 2xl:w-96 h-12 p-2 text-gray-800 border border-[#2b2b2b] focus:border-blue-700 focus:outline-none font-medium"
              type="email"
              value={email}
              placeholder="Email"
              required
            />
            <textarea
              onChange={getMessage}
              className="w-80 xl:w-96 2xl:w-96 p-2 text-gray-800 h-20 border border-[#2b2b2b] focus:border-blue-700 focus:outline-none font-medium"
              value={message}
              name=""
              id=""
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white w-80 lg:w-[120px] py-[10px] bg-[#333333] font-medium tracking-wide shadow-xl rounded-[1px] transition transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-black lg:-ml-[200px] xl:-ml-[265px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
