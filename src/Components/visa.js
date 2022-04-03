import React from 'react';
import "../Asserts/Css/ComponentsCss/visa.css";
import Visa from "../Asserts/images/visa.png";

const VISA  = () => {
  return (
    
      <div className="visacomponents">
        {" "}
        <img className='visaimg' src={Visa} width="320px" height="274px" ></img>{" "}
        <p className="visaone">Visa </p>
        <p className='visatwo'>The world has reinvented itself into a Global Village and Globalization has transformed the geographical boundaries into trade blocs. Advancements in technology, ground breaking developments in transportation systems and creation of seamless global businesses has opened up a phenomenal demand for the World Savvy businessman to go out there and grow without limits.  </p>
      </div>
    
  );
};

export default VISA ;