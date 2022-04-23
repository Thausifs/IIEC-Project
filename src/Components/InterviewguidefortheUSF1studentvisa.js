import React from 'react';
import "../Asserts/Css/ComponentsCss/InterviewguidefortheUSF1studentvisa.css";
import InterviewguidefortheUSF1studentvisa from "../Asserts/images/InterviewguidefortheUSF1studentvisa.png";

const InterviewguidefortheUSF1StudentVisa  = () => {
  return (
    <div className='InterviewguidefortheUSF1studentvisamaindiv'>
      <div className="InterviewguidefortheUSF1studentvisacomponents">
        {" "}
        <div className='InterviewguidefortheUSF1studentvisaimgdiv'> <img className='InterviewguidefortheUSF1studentvisaimg' src={InterviewguidefortheUSF1studentvisa } ></img></div>
        <p className="InterviewguidefortheUSF1studentvisaone">Interview guide for the US F-1 student visa  </p>
        <p className='InterviewguidefortheUSF1studentvisatwo'>Read up insightful articles authored by IDP experts. Plan ahead to be study ready. We have mapped an indicative timeline for you to get started and live your study abroad dreams. </p>
      </div>
    </div>  
  );
};

export default InterviewguidefortheUSF1StudentVisa ;