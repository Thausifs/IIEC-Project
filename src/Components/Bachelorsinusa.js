import React from 'react';
import "../Asserts/Css/ComponentsCss/Bachelorsinusa.css";
import Bachelorsinusa from "../Asserts/images/Bachelorsinusa.png";

const BachelorsinUSA  = () => {
  return (
    
      <div className="Bachelorsinusacomponents">
        {" "}
        <a href='/bachelorsinusa'><img className='Bachelorsinusacomponentsimg' src={Bachelorsinusa} width="320px" height="274px" ></img></a>
        <p className="Bachelorsinusacomponentsone">BACHELORS IN USA </p>
        <p className='Bachelorsinusacomponentstwo'>Bachelor’s level education in USA normally starts after the completion of 12 years of primary and secondary education. Hence, education beyond class XII is also known as ‘post-secondary’ education, in USA.
 </p>
      </div>
    
  );
};

export default BachelorsinUSA ;