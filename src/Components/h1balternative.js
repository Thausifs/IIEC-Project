import React from 'react';
import "../Asserts/Css/ComponentsCss/h1balternative.css";
import H1Bvisa from "../Asserts/images/H1Bvisa.png";

const HlBAternative = () => {
  return (
    
      <div className="h1balternativecomponents">
        {" "}
       <a href='/h1balternative'> <img className='h1balternativeimg' src={H1Bvisa} width="320px" height="274px" ></img></a>
        <p className="h1balternativeone">H1B Alternative</p>
        <p className='h1balternativetwo'>Get your Intership in USA </p>
      </div>
    
  );
};

export default HlBAternative ;