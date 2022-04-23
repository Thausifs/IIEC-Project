import React from 'react';
import "../Asserts/Css/ComponentsCss/USAapplicationtimeline.css";
import usaapplication from "../Asserts/images/usaapplication.png";

const USAapplicationtimeline  = () => {
  return (
    <div className='usaapplicationtimelinecomponentsmaindiv'>
      <div className="usaapplicationtimelinecomponents">
      
        <div className='usaapplicationtimelinecomponentsimgdiv'> <img className='usaapplicationtimelinecomponentsimg' src={usaapplication}  ></img></div>
        <p className="usaapplicationtimelinecomponentsone">USAapplication </p>
        <p className='usaapplicationtimelinecomponentstwo'>Studying abroad is all about choosing the right destination, university and course. Read along some interesting articles to make the most of your international education experience. </p>
      </div>
    </div>
  );
};

export default USAapplicationtimeline ;