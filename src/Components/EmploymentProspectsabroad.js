import React from 'react';
import "../Asserts/Css/ComponentsCss/EmploymentProspectsabroad.css";
import EmploymentProspectsabroad from "../Asserts/images/EmploymentProspectsabroad.png";

const EmploymentProspectsAbroad = () => {
  return (
    <div >
      <div className="employmentprospectsabroadcomponents">
        {" "}
        <img className='employmentprospectsabroadimg' src={EmploymentProspectsabroad} width="340px" height="304px"></img>{" "}
        <p className="employmentprospectsabroadone"> Employment Prospects abroad</p>
        <p className='employmentprospectsabroadtwo'>Know what kinds of job opportunities are available, and how to find them</p>
      </div>{" "}
    </div>
  );
};

export default EmploymentProspectsAbroad;