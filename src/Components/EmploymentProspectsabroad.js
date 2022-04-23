import React from 'react';
import "../Asserts/Css/ComponentsCss/EmploymentProspectsabroad.css";
import EmploymentProspectsabroad from "../Asserts/images/EmploymentProspectsabroad.png";

const EmploymentProspectsAbroad = () => {
  return (
    
      <div className="employmentprospectsabroadcomponents">
        {" "}
       <div className='employmentprospectimgdiv'> <img className='employmentprospectsabroadimg' src={EmploymentProspectsabroad} ></img>{" "}</div>
        <p className="employmentprospectsabroadone"> Employment Prospects abroad</p>
        <p className='employmentprospectsabroadtwo'>Know what kinds of job opportunities are available, and how to find them</p>
      </div>
    
  );
};

export default EmploymentProspectsAbroad;