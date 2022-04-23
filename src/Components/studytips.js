import React from 'react';
import "../Asserts/Css/ComponentsCss/studytips.css";
import Studytips from "../Asserts/images/studytips.png";

const StudyTips = () => {
  return (
      <div className='studytipsmaindiv'>
      <div className="studytipscomponents">
        {" "}
        <div className='studytipsimgdiv'>    <img className='studytipsimg' src={Studytips} ></img></div>
        <p className="studytipsone">Study tips </p>
        <p className='studytipstwo'>As an international student, it is important to understand how to maintain a balance between your academic and social life. These tips will help you skip the last minute stress.</p>
      </div>
      </div>
  );
};

export default StudyTips ;