import React from 'react';
import "../Asserts/Css/ComponentsCss/Courseadvice.css";
import Courseadvice from "../Asserts/images/Courseadvice.png";

const CourseAdvice = () => {
  return (
    <div className='courseadvicemaindiv'>
      <div className="courseadvicecomponents">
        {" "}
       <div className='courseadviceimgdiv'> <img className='courseadviceimg' src={Courseadvice}  ></img>{" "}</div>
        <p className="courseadviceone"> Course advice </p>
        <p className='courseadvicetwo'>With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. Here’s how we can help you find a course that suits your career goals!</p>
      </div>{" "}
    </div>
  );
};

export default CourseAdvice;