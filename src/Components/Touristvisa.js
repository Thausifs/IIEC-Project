import React from 'react';
import "../Asserts/Css/ComponentsCss/Touristvisa.css";
import Touristvisa from "../Asserts/images/touristvisa.png";

const TouristVisa = () => {
  return (
    
      <div className="touristvisacomponents">
        {" "}
        <a href='/touristvisa'><img className='touristvisaimg' src={Touristvisa} width="320px" height="274px" ></img></a>
        <p className="touristvisaone">Tourist Visa</p>
        <p className='touristvisatwo'>Get your Intership in USA </p>
      </div>
    
  );
};

export default TouristVisa ;