import React from 'react';
import "../Asserts/Css/ComponentsCss/Businessvisa.css";
import Businessvisa from "../Asserts/images/businessvisa.png";

const BusinessVisa = () => {
  return (
    <div className='businessvisamaindiv'>
      <div className="businessvisacomponents">
        {" "}
        <div className='timelinefor2022intakesimgdiv'>  <a href='/businessvisa' > <img className='businessvisaimg' src={Businessvisa}  ></img></a></div>
        <p className="businessvisaone">Business Visa</p>
        <p className='businessvisatwo'>J1 Cultural Exchange Programs offer students, university graduates and young professionals an enriching opportunity to enhance their lives and careers with the experience of living and working in the United States. </p>
      </div>
      </div>
  );
};

export default BusinessVisa ;