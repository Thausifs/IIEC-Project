import React from 'react';
import "../Asserts/Css/ComponentsCss/h1balternative.css";
import H1Bvisa from "../Asserts/images/H1Bvisa.png";

const HlBAternative = () => {
  return (
    <div className='h1balternativemaindiv'>
      <div className="h1balternativecomponents">
        {" "}
        <div className='h1balternativeimgdiv'> <a href='/h1balternative'> <img className='h1balternativeimg' src={H1Bvisa} width="320px" height="274px" ></img></a></div>
        <p className="h1balternativeone">H1B Alternative</p>
        <p className='h1balternativetwo'>Get your Intership in USA </p>
      </div>
    </div>
  );
};

export default HlBAternative ;