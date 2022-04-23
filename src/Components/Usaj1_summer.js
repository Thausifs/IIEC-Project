import React from 'react';
import "../Asserts/Css/ComponentsCss/Usaj1_summer.css";
import USAJ1_summer from "../Asserts/images/USAJ1_summer.png";

const USAj1_Summer  = () => {
  return (
    <div className='usa1_summermaindiv'>
      <div className="usa1_summercomponents">
        {" "}
        <div className='usa1_summerimgdiv'>  <a href="/usaj1summer"><img className='usa1_summercomponentsimg' src={USAJ1_summer}  ></img></a> </div>
        <p className="usa1_summerone">USA J1 SUMMER WORK & TRAVEL </p>
        <p className='usa1_summertwo'>Canada is a country composed of immigrants who have migrated from every country in the world to Canada. Canada’s success is largely due to the contributions made by the new immigrants.   </p>
      </div>
    </div>
  );
};

export default USAj1_Summer ;