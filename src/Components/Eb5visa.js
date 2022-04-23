import React from 'react';
import "../Asserts/Css/ComponentsCss/Eb5visa.css";
import Eb5visa from "../Asserts/images/ebsvisa.png";

const EB5Visa= () => {
  return (
    <div className='eb5visamaindiv'>
      <div className="eb5visacomponents">
        {" "}
        <div className='eb5visaimgdiv'>  <a href='/eb5visa'><img className='eb5visaimg' src={Eb5visa}  ></img></a></div>
        <p className="eb5visaone">EB5 Visa</p>
        <p className='eb5visatwo'>Get your Intership in USA</p>
      </div>
    </div>
  );
};

export default EB5Visa ;