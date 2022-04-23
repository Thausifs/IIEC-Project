import React from 'react';
import "../Asserts/Css/ComponentsCss/Courseadvicesixreasons.css";
import Courseadvicesixreasons from "../Asserts/images/Courseadvicesixreasons.png";

const CourseAdvicesixreasons = () => {
  return (
    <div className='courseadvicesixreasonsmaindiv'>
      <div className="courseadvicesixreasonscomponents">
        {" "}
       <div className='courseadvicesixreasonsimgdiv'> <img className='courseadvicesixreasonsimg' src={Courseadvicesixreasons}  ></img>{" "}</div>
        <p className="courseadvicesixreasonsone"> Course Advice </p>
        <p className='courseadvicesixreasonstwo'>Can’t decide what course to pursue? Course selection entails evaluation of personal aspirations, career goals, employability, timelines, budget and many more. Come to us, we will help you evaluate your strengths and find the right course for you.</p>
      </div>{" "}
    </div>
  );
};

export default CourseAdvicesixreasons;