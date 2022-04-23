
import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyinaustralia.css";
import Studyinaustralia from "../Asserts/images/Studyinaustralia.png";

const StudyinAustralia = () => {
  return (
    <div className='studyinaustraliamaindiv'>
      <div className="studyinaustraliacomponents">
        {" "}
       <div className='studyinaustraliaimgdiv'> <img className='Studyinaustraliaimg' src={Studyinaustralia}  ></img>{" "}</div>
        <p className="studyinaustraliaone"> Study in the Australia </p>
        <p className='studyinaustraliatwo'>Australia, the land down under, is an ideal place to enjoy a world class education and an outstanding quality of life. It offers a diverse range of study options for international students, with more than 1,100 institutions and 22,000 courses to choose from.</p>
      </div>{" "}
    </div>
  );
};

export default StudyinAustralia;