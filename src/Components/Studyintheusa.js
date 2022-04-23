
import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyintheusa.css";
import Studyintheusa from "../Asserts/images/Studyintheusa.png";

const StudyintheUSA = () => {
  return (
    <div className='studyintheusamaindiv'>
      <div className="studyintheusacomponents">
        {" "}
       <div className='studyintheusaimgdiv'> <img className='studyintheusaimg' src={Studyintheusa}  ></img>{" "}</div>
        <p className="studyintheusaone">Study in the USA </p>
        <p className='studyintheusatwo'>The United States of America will always be the hottest destination for Indian and international students to study in. It is not difficult to determine why. The quality of education, wide-ranging specialties, flexibility, large campuses, friendly professors, funding and international opportunities are only but a few of the reasons for attracting the largest number of students from throughout the world. It is rightly then claimed that the US is the ‘Land of a Million Opportunities’.</p>
      </div>{" "}
    </div>
  );
};

export default StudyintheUSA;