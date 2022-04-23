import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyabroadparentresources.css";
import StudyAbroadparentresources  from "../Asserts/images/StudyAbroadparentresources.png";

const StudyAbroadParentResources  = () => {
  return (
      <div className='Studyabroadparentresourcesmaindiv'>
      <div className="Studyabroadparentresourcescomponents">
        {" "}
       <div className='Studyabroadparentresourcesimgdiv'><img className='Studyabroadparentresourcesimg' src={StudyAbroadparentresources} ></img>{" "}</div> 
        <p className="Studyabroadparentresourcesone"> Study Abroad Parent Resources </p>
        <p className='Studyabroadparentresourcestwo'>Here is a list of resources for parents to support and prepare your child for studying abroad.</p>
      </div>
  </div>
  );
};

export default StudyAbroadParentResources ;