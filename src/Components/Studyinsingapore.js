
import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyinsingapore.css";
import Studyinsingapore from "../Asserts/images/Studyinsingapore.png";

const StudyinSingapore = () => {
  return (
    <div className='studyinsingaporemaindiv'>
      <div className="studyinsingaporecomponents">
        {" "}
       <div className='studyinsingaporeimgdiv'> <img className='studyinsingaporeimg' src={Studyinsingapore}  ></img>{" "}</div>
        <p className="studyinsingaporeone"> Study in Singapore </p>
        <p className='studyinsingaporetwo'>Studying in Singapore, no doubt, will act as a platform to a brighter future. Driven by excellence, Institutions in Singapore offer a broad-based curriculum and global perspective to equip students with the relevant qualifications and training to succeed in a competitive environment. Hence educational institutions offer the latest and best in educational tools and technologies</p>
      </div>{" "}
    </div>
  );
};

export default StudyinSingapore;