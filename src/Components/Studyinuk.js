
import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyinuk.css";
import Studyinuk from "../Asserts/images/Studyinuk.png";

const StudyinUK = () => {
  return (
    <div className='studyinukmaindiv'>
      <div className="studyinukcomponents">
        {" "}
       <div className='studyinukimgdiv'> <img className='studyinukimg' src={Studyinuk}  ></img>{" "}</div>
        <p className="studyinukone">Study in UK</p>
        <p className='studyinuktwo'>The UK is a gateway to Europe! Though a small continent, Europe is diverse and fascinating.</p>
      </div>{" "}
    </div>
  );
};

export default StudyinUK;