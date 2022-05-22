import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/general/Navbar";
function NewProject() {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="flex w-full h-full">
        <button
          className="flex w-full items-center"
          style={{
            background: "linear-gradient(90deg, #581c8788 10%, #ffffff44 100%)",
          }}
          onClick={() => {
            navigate("/projectloading/?type=hands");
          }}
        >
          {/* <ChevronLeft
            style={{ fontSize: 150, stroke: "#D8B4FE", strokeWidth: 1 }}
          /> */}
          <div className="flex flex-col items-start ml-6">
            <div className="mb-3 text-7xl font-bold text-white">
              Hand Control
            </div>
            <div className="text-3xl font-light text-white">
              Record hand movements for simple control
            </div>
          </div>
        </button>
        <button
          className="flex w-full items-center justify-end"
          style={{
            background:
              "linear-gradient(-90deg, #facc1588 10%, #ffffff44 100%), url('./code.png') no-repeat",
            backgroundSize: "100%"
          }}
          onClick={() => {
            navigate("/projectloading/?type=code");
          }}
        >
          <div className="flex flex-col items-end mr-6">
            <div className="mb-3 text-7xl font-bold">Code Control</div>
            <div className="text-3xl font-light">
              Write code statements for complex movements
            </div>
          </div>{" "}
          {/* <ChevronRight
            style={{ fontSize: 100, stroke: "#D8B4FE", strokeWidth: 1 }}
          /> */}
        </button>
      </div>
    </div>
  );
}

export default NewProject;
