import React from 'react';
import "../Asserts/Css/ComponentsCss/immigration.css";
import Immigration from "../Asserts/images/immigration.png";

const ImmiGration  = () => {
  return (
    
      <div className="immigrationcomponents">
        {" "}
        <img className='immigrationimg' src={Immigration} width="320px" height="274px" ></img>{" "}
        <p className="immigrationone">IMMIGRATION</p>
        <p className='immigrationtwo'>Canada is a country composed of immigrants who have migrated from every country in the world to Canada. Canada’s success is largely due to the contributions made by the new immigrants.   </p>
      </div>
    
  );
};

export default ImmiGration ;