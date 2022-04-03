import React from 'react';
import "../Asserts/Css/ComponentsCss/Eb5visa.css";
import Eb5visa from "../Asserts/images/ebsvisa.png";

const EB5Visa= () => {
  return (
    
      <div className="eb5visacomponents">
        {" "}
        <a href='/eb5visa'><img className='eb5visaimg' src={Eb5visa} width="320px" height="274px" ></img></a>
        <p className="eb5visaone">EB5 Visa</p>
        <p className='eb5visatwo'>Get your Intership in USA</p>
      </div>
    
  );
};

export default EB5Visa ;