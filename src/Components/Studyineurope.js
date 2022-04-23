
import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyineurope.css";
import Studyineurope from "../Asserts/images/Studyineurope.png";

const StudyinEurope = () => {
  return (
    <div className='studyineuropemaindiv'>
      <div className="studyineuropecomponents">
        {" "}
       <div className='studyineuropeimgdiv'> <img className='studyineuropeimg' src={Studyineurope}  ></img>{" "}</div>
        <p className="studyineuropeone">Study in Europe</p>
        <p className='studyineuropetwo'>We believe that overseas education is not an expense but an investment where in return comes over a lifetime.</p>
      </div>{" "}
    </div>
  );
};

export default StudyinEurope;