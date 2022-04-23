import React from 'react';
import "../Asserts/Css/ComponentsCss/Bachelorsinusa.css";
import Bachelorsinusa from "../Asserts/images/Bachelorsinusa.png";

const BachelorsinUSA  = () => {
  return (
    <div className='bachelorsinusamaindiv'>
      <div className="bachelorsinusacomponents">
        {" "}
        <div className='bachelorsinusaimgdiv'>  <a href='/bachelorsinusa'><img className='bachelorsinusaimg' src={Bachelorsinusa}  ></img></a></div>
        <p className="bachelorsinusaone">BACHELORS IN USA </p>
        <p className='bachelorsinusatwo'>Bachelor’s level education in USA normally starts after the completion of 12 years of primary and secondary education. Hence, education beyond class XII is also known as ‘post-secondary’ education, in USA.
 </p>
      </div>
      </div>
    
  );
};

export default BachelorsinUSA ;