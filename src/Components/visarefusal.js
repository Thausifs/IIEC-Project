import React from 'react';
import "../Asserts/Css/ComponentsCss/visarefusal.css";
import Visarefusal from "../Asserts/images/visarefusal.png";

const VisaRefusal = () => {
  return (
    
      <div className="visarefusalcomponents">
        {" "}
        <a href='/refusedapplication'><img className='visarefusalimg' src={Visarefusal} width="320px" height="274px" ></img></a>
        <p className="visarefusalone">Visa Refusal</p>
        <p className='visarefusaltwo'>Get your Intership in USA </p>
      </div>
    
  );
};

export default VisaRefusal ;