import React from 'react';
import "../Asserts/Css/ComponentsCss/Touristvisa.css";
import Touristvisa from "../Asserts/images/touristvisa.png";

const TouristVisa = () => {
  return (
    
    <div className='touristvisamaindiv'>
      <div className="touristvisacomponents">
        {" "}
        <div className='touristvisaimgdiv'> <a href='/touristvisa'><img className='touristvisaimg' src={Touristvisa}  ></img></a> </div>
        <p className="touristvisaone">Tourist Visa</p>
        <p className='touristvisatwo'>Get your Intership in USA </p>
      </div>
      </div>
  );
};

export default TouristVisa ;