import React from 'react';
import "../Asserts/Css/ComponentsCss/cometoourfreecounselling.css";
import Cometoourfreecounselling from "../Asserts/images/Cometoourfreecounselling.png";

const CometoourFreeCounselling = () => {
  return (
    <div className='CometoourfreeCounsellingmaindiv'>
      <div className="CometoourfreeCounsellingcomponents">
        {" "}
       <div className='CometoourfreeCounsellingimgdiv'> <img className='timelinefor2022intakesimg' src={Cometoourfreecounselling}  ></img>{" "}</div>
        <p className="CometoourfreeCounsellingone"> Come to our free counselling sessions</p>
        <p className='CometoourfreeCounsellingtwo'>All our counselling sessions are free, and our experienced counsellors help you with the university and course selection, application procedure, offer letters, visa process and pre-departure briefings. We have helped more than 450,000 students find the right course.</p>
      </div>{" "}
    </div>
  );
};

export default CometoourFreeCounselling;