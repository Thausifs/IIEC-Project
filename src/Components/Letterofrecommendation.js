import React from 'react';
import "../Asserts/Css/ComponentsCss/Letterofrecommendation.css";
import Letterofrecommendation from "../Asserts/images/Letterofrecommendation.png";

const LetterofRecommendation = () => {
  return (
    <div className='letterofrecommendationmaindiv'>
      <div className="letterofrecommendationcomponents">
        {" "}
       <div className='letterofrecommendationimgdiv'> <img className='Letterofrecommendationimg' src={Letterofrecommendation}  ></img>{" "}</div>
        <p className="letterofrecommendationone">Letter of Recommendation (LOR)</p>
        <p className='letterofrecommendationtwo'>The LOR helps the admissions committee to get a detailed insight into your life and the relevance of the recommendation, but there are a few guidelines to be kept in mind while getting that amazing one. Read up to know more. .</p>
      </div>{" "}
    </div>
  );
};

export default LetterofRecommendation;