import React from 'react';
import "../Asserts/Css/ComponentsCss/statementofpurpose.css";
import Statementofpurpose from "../Asserts/images/Statementofpurpose.png";

const StatementofPurpose = () => {
  return (
    <div className='Statementofpurposemaindiv'>
      <div className="Statementofpurposecomponents">
        {" "}
       <div className='Statementofpurposeimgdiv'> <img className='Statementofpurposeimg' src={Statementofpurpose}  ></img>{" "}</div>
        <p className="Statementofpurposeone">Statement of Purpose (SOP)</p>
        <p className='Statementofpurposetwo'>The SOP is the decision-maker of your application. It helps the admission committee to assess if the course structure is aligned with your career goals, beliefs, subject knowledge, and vision. Know how to write that perfect SOP.</p>
      </div>{" "}
    </div>
  );
};

export default StatementofPurpose;