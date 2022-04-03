import React from 'react';
import "../Asserts/Css/ComponentsCss/studyabroadintakes.css";
import Studyabroadintakes from "../Asserts/images/Studyabroadintakes.png";

const StudyAbroadIntakes = () => {
  return (
    
      <div className="studyabroadcomponents">
        {" "}
        <img className='studyabroadimg' src={Studyabroadintakes} width="340px" height="304px"></img>{" "}
        <p className="intakes"> Study abroad intakes </p>
        <p className='intakestwo'>Did you know academic year in universities abroad differ from the ones in India? Most universities offer two major intakes for the students aspiring to study abroad – Spring intake and fall intake. Let’s help you know all about it.</p>
      </div>
    
  );
};

export default StudyAbroadIntakes;