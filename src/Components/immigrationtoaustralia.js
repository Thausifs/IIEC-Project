import React from 'react';
import "../Asserts/Css/ComponentsCss/immigrationtoaustralia.css";
import Australiaimmigration from "../Asserts/images/australiaimmigration.png";

const ImmigrationtoAustralia  = () => {
  return (
    
      <div className="australiaimmigrationcomponents">
        {" "}
       <a href="immigratetoaustralia"><img className='australiaimmigrationcomponentsimg' src={Australiaimmigration} width="320px" height="274px" ></img></a> 
        <p className="australiaimmigrationcomponentsone">Austrila </p>
        <p className='australiaimmigrationcomponentstwo'>Canada is a country composed of immigrants who have migrated from every country in the world to Canada. Canada’s success is largely due to the contributions made by the new immigrants.  </p>
      </div>
    
  );
};

export default ImmigrationtoAustralia ;