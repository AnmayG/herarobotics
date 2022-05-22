import React, { useEffect, useRef } from "react";
import Navbar from "../components/general/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Typed from "typed.js";

function LandingPage() {
  let navigate = useNavigate();
  const boldRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(boldRef.current, {
      strings: ["students", "teachers", "learners", "mentors", "everyone."],
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col h-[80vh]">
        <div className="h-[80vh] justify-end items-center absolute overflow-hidden">
          <img src="/landing-page.svg" alt="" />
        </div>
        <div
          className="flex items-center justify-center h-[80vh] w-full absolute"
          // style={{
          //   background: "linear-gradient(0deg, #00000088 10%, #ffffff44 100%)",
          // }}
        >
          <div className="flex flex-col ml-10 items-center justify-center">
            <p className="text-8xl text-black font-extrabold">Hera</p>
            <div>
              <p className="mt-2 text-4xl text-black text-center">
                Holistic Educational Robotics Application
              </p>
              <div className="mb-2 text-7xl text-purple-800 font-bold bg-purple">
                Robotics education designed for{" "}
                <p
                  ref={boldRef}
                  className="text-purple-800 font-extrabold inline"
                >
                  people
                </p>
              </div>
            </div>
            <div className="flex mt-4">
              <Link
                style={{ textDecoration: "none" }}
                className="mr-3 w-fit justify-center text-4xl text-center font-bold text-black rounded-3xl p-2 px-6 outline"
                to="/login"
              >
                Log In
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="w-fit justify-center text-4xl text-center bg-purple-400 font-bold text-white rounded-3xl p-2 px-6"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[60vh] bg-gray-200 items-center">
        <div className="flex justify-center w-full text-4xl font-bold mt-6">
          Educational Robotics For Anyone
        </div>
        <div className="flex justify-center w-full">
          <div className="text-xl mt-2 mb-4">
            Hera provides a platform for any student to gain an interest in
            robotics.
          </div>
        </div>
        <div className="flex w-full justify-center mt-4 mx-8">
          <div className="flex flex-col mx-8 w-[60vh] items-center justify-center h-full">
            <div className="font-bold text-xl">
              Hera provides a new, revolutionary way for students to interact
              with robotics.
            </div>
            <div className="mt-4 text-lg">
              Hera provides a way for students to complete tasks using robotics
              through easy-to-understand, intuitive coding, making it possible
              for anyone to interact with robotics.
            </div>
            <div className="mt-4 text-lg">
              Robotics is a way for software to interact with the physical
              world. Hera makes it possible for anyone to use it, no matter
              their capability.
            </div>
          </div>
          <div className="80vh mr-8">
            <img src="/cater-image.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
