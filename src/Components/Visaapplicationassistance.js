import React from 'react';
import "../Asserts/Css/ComponentsCss/Visaapplicationassistance.css";
import Visaapplicationassistance from "../Asserts/images/visaapplicationassistance.png";

const VisaApplicationAssistance = () => {
  return (
    <div className='visaapplicationassistancemaindiv'>
      <div className="visaapplicationassistancecomponents">
        {" "}
       <div className='visaapplicationassistanceimgdiv'> <img className='visaapplicationassistanceimg' src={Visaapplicationassistance}  ></img>{" "}</div>
        <p className="visaapplicationassistanceone"> Visa application assistance </p>
        <p className='visaapplicationassistancetwo'>We’ll guide you through the application process and help you prepare the right documents for your visa submission.</p>
      </div>{" "}
    </div>
  );
};

export default VisaApplicationAssistance;