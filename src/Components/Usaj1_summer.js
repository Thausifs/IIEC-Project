import React from 'react';
import "../Asserts/Css/ComponentsCss/Usaj1_summer.css";
import USAJ1_summer from "../Asserts/images/USAJ1_summer.png";

const USAj1_Summer  = () => {
  return (
    
      <div className="usa1_summercomponents">
        {" "}
       <a href="/usaj1summer"><img className='usa1_summercomponentsimg' src={USAJ1_summer} width="320px" height="274px" ></img></a> 
        <p className="usa1_summercomponentsone">USA J1 SUMMER WORK & TRAVEL </p>
        <p className='usa1_summercomponentstwo'>Canada is a country composed of immigrants who have migrated from every country in the world to Canada. Canada’s success is largely due to the contributions made by the new immigrants.   </p>
      </div>
    
  );
};

export default USAj1_Summer ;