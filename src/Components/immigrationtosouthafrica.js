import React from 'react';
import "../Asserts/Css/ComponentsCss/immigrationtosouthafrica.css";
import Southafricaimmigration from "../Asserts/images/southafricaimmigration.png";

const ImmigrationtoSouthafrica  = () => {
  return (
    
      <div className="southafricaimmigrationcomponents">
        {" "}
       <a href="/Immigratetosouthafrica"><img className='southafricaimmigrationcomponentsimg' src={Southafricaimmigration} width="320px" height="274px" ></img></a> 
        <p className="southafricaimmigrationcomponentsone">South Africa</p>
        <p className='southafricaimmigrationcomponentstwo'>Get your Intership in USA </p>
      </div>
    
  );
};

export default ImmigrationtoSouthafrica ;