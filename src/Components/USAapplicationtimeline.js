import React from 'react';
import "../Asserts/Css/ComponentsCss/USAapplicationtimeline.css";
import usaapplication from "../Asserts/images/usaapplication.png";

const USAapplicationtimeline  = () => {
  return (
    
      <div className="usaapplicationtimelinecomponents">
        {" "}
        <img className='usaapplicationtimelinecomponentsimg' src={usaapplication} width="320px" height="274px" ></img>{" "}
        <p className="usaapplicationtimelinecomponentsone">usaapplication </p>
        <p className='usaapplicationtimelinecomponentstwo'>Studying abroad is all about choosing the right destination, university and course. Read along some interesting articles to make the most of your international education experience. </p>
      </div>
    
  );
};

export default USAapplicationtimeline ;