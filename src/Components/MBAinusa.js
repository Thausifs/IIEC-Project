import React from 'react';
import "../Asserts/Css/ComponentsCss/MBAinusa.css";
import MBAinusa from "../Asserts/images/MBAinusa.png";

const MBAinUSA  = () => {
  return (
    <div className='mbainusamaindiv'>
      <div className="mbainusacomponents">
        {" "}
        <div className='mbainusaimgdiv'>  <a href='/mbainusa'><img className='mbainusaimg' src={MBAinusa}  ></img></a> </div>
        <p className="mbainusaone">MBA IN USA </p>
        <p className='mbainusatwo'>The USA is considered to be the birthplace of professional management. While it is possible that other countries might have professional management at different stages of their evolution </p>
      </div>
      </div>
  );
};

export default MBAinUSA ;