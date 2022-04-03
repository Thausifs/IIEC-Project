import React from 'react';
import "../Asserts/Css/ComponentsCss/internshipassistance.css";
import Internshipassistance from "../Asserts/images/intershipassistance.png";

const InternshipAssistance = () => {
  return (
    
      <div className="internshipassistancecomponents">
        {" "}
        <img className='internshipassistanceimg' src={Internshipassistance} width="320px" height="274px" ></img>{" "}
        <p className="internshipassistanceone">Intership Assistance</p>
        <p className='internshipassistancetwo'>Get your Intership in USA </p>
      </div>
    
  );
};

export default InternshipAssistance ;