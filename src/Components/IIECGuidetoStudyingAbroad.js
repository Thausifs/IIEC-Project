import React from 'react';
import "../Asserts/Css/ComponentsCss/IIECguidetostudyingabroad.css";
import IIECguidetostudyingabroad  from "../Asserts/images/IIECguidetostudyingabroad.png";

const IIECGuidetoStudyingAbroad = () => {
  return (
    <div className='IIECguidetostudyingabroadmaindiv' >
      <div className="IIECguidetostudyingabroadcomponents">
        {" "}
       <div className='IIECguidetostudyingabroadimgdiv'><img className='IIECguidetostudyingabroadimg' src={IIECguidetostudyingabroad} ></img>{" "}</div> 
        <p className="IIECguidetostudyingabroadone"> IIEC’s guide to studying abroad </p>
        <p className='IIECguidetostudyingabroadtwo'>We know what it takes to find a good match and set you up for success. From helping you choose the course and country to guiding you through the paperwork, we get things done. This step-by-step guide will help you get started with your journey to studying abroad.</p>
      </div>{" "}
    </div>
  );
};

export default IIECGuidetoStudyingAbroad ;