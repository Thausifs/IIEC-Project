import React from 'react';
import "../Asserts/Css/ComponentsCss/MBAinusa.css";
import MBAinusa from "../Asserts/images/MBAinusa.png";

const MBAinUSA  = () => {
  return (
    
      <div className="mbainusacomponents">
        {" "}
       <a href='/mbainusa'><img className='mbainusaimg' src={MBAinusa} width="320px" height="274px" ></img></a> 
        <p className="mbainusacomponentsone">MBA IN USA </p>
        <p className='mbainusacomponentstwo'>The USA is considered to be the birthplace of professional management. While it is possible that other countries might have professional management at different stages of their evolution </p>
      </div>
    
  );
};

export default MBAinUSA ;