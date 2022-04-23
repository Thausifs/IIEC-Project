 import React from 'react';
import "../Asserts/Css/ComponentsCss/Benefitsofstudyingabroad.css";
import Benefitsofstudyingabroad from "../Asserts/images/Benefitsofstudyingabroad.png";

const BenefitsofStudyingAbroad = () => {
  return (
    <div  className='benefitsofstudyingabroadmaindiv'>
      <div className="benefitsofstudyingabroadcomponents">
        {" "}
       <div className='benefitsofstudyingabroadimgdiv'> <img className='benefitsofstudyingabroadimg' src={Benefitsofstudyingabroad} ></img>{" "}</div>
        <p className="benefitsofstudyingabroadone"> Benefits of studying abroad</p>
        <p className='benefitsofstudyingabroadtwo'>Earning an international degree is not only about expanding your career and personal horizons but also about having an experience of a lifetime. We share reasons why you should consider studying internationally.</p>
      </div>{" "}
    </div>
  );
};

export default BenefitsofStudyingAbroad;


