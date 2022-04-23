
import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyinkorea.css";
import Studyinkorea from "../Asserts/images/Studyinkorea.png";

const StudyinKorea = () => {
  return (
    <div className='studyinkoreamaindiv'>
      <div className="studyinkoreacomponents">
        {" "}
       <div className='studyinkoreaimgdiv'> <img className='studyinkoreaimg' src={Studyinkorea}  ></img>{" "}</div>
        <p className="studyinkoreaone"> Study in Korea </p>
        <p className='studyinkoreatwo'>The Republic of Korea is a highly successful country on the Asian continent. Most of the technology-related supply to India comes from South Korea. It is a global leader in technology and industrial sectors and provides a wide range of job opportunities in the same. South Korea is a place known for its impeccable education system</p>
      </div>{" "}
    </div>
  );
};

export default StudyinKorea;