import React from 'react';
import "../Asserts/Css/ComponentsCss/Businessvisa.css";
import Businessvisa from "../Asserts/images/businessvisa.png";

const BusinessVisa = () => {
  return (
    
      <div className="businessvisacomponents">
        {" "}
       <a href='/businessvisa' > <img className='businessvisaimg' src={Businessvisa} width="320px" height="274px" ></img></a>
        <p className="businessvisaone">Business Visa</p>
        <p className='businessvisatwo'>J1 Cultural Exchange Programs offer students, university graduates and young professionals an enriching opportunity to enhance their lives and careers with the experience of living and working in the United States. </p>
      </div>
    
  );
};

export default BusinessVisa ;