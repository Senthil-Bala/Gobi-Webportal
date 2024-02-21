import React from "react";
import Govt from "./Govt";
import Intern from "./Intern";
import PartTime from "./PartTime";
import Contract from "./Contract";
import Remote from "./Remote";
import Sales from "./Sales";
import AllCategories from "./AllCategories";
function Subheader() {
  return (
    <div className="container d-flex justify-content-around align-items-center"style={{
        height:"60px",
        color: "rgba(138, 138, 138, 1)"

    }}>
        {/* Subheader */}
     <Govt />
      <Intern />
      <PartTime />
      <Remote />
      <Sales />
      <Contract />
      <AllCategories />
    </div>
  );
}

export default Subheader;
