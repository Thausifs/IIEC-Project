import React from 'react';
import "../Asserts/Css/ComponentsCss/IIecguidetostudyabroad.css";
import IIecguidetostudyabroad from "../Asserts/images/IIecguidetostudyabroad.png";

const IIecguidetoStudyAbroad = () => {
  return (
    <div className='iiecguidetostudyabroadmaindiv'>
      <div className="iiecguidetostudyabroadcomponents">
        {" "}
       <div className='iiecguidetostudyabroadimgdiv'> <img className='IIecguidetostudyabroadimg' src={IIecguidetostudyabroad}  ></img>{" "}</div>
        <p className="iiecguidetostudyabroadone"> IIEC’s guide to study abroad </p>
        <p className='iiecguidetostudyabroadtwo'>Let’s simply it for you. Here’s a step-by-step guide to help you get started with your journey to studying abroad.</p>
      </div>{" "}
    </div>
  );
};

export default IIecguidetoStudyAbroad;