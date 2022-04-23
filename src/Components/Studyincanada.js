
import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyincanada.css";
import Studyincanada from "../Asserts/images/Studyincanada.png";

const StudyinCanada = () => {
  return (
    <div className='studyincanadamaindiv'>
      <div className="studyincanadacomponents">
        {" "}
       <div className='studyincanadaimgdiv'> <img className='studyincanadaimg' src={Studyincanada}  ></img>{" "}</div>
        <p className="studyincanadaone"> Study in Canada </p>
        <p className='studyincanadatwo'>Academic excellence, affordability, quality of life and adventure – Canada stands out as an ideal place to study. In 2017, Canada experienced almost 500,000 international students studying at all levels in the country; which explains its popularity across the globe.</p>
      </div>{" "}
    </div>
  );
};

export default StudyinCanada;