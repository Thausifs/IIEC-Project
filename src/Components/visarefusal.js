import React from 'react';
import "../Asserts/Css/ComponentsCss/visarefusal.css";
import Visarefusal from "../Asserts/images/visarefusal.png";

const VisaRefusal = () => {
  return (
    <div className='visarefusalmaindiv'> 
      <div className="visarefusalcomponents">
        {" "}
        <div className='visarefusalimgdiv'>  <a href='/refusedapplication'><img className='visarefusalimg' src={Visarefusal}  ></img></a></div>
        <p className="visarefusalone">Visa Refusal</p>
        <p className='visarefusaltwo'>Get your Intership in USA </p>
      </div>
    </div>
  );
};

export default VisaRefusal ;