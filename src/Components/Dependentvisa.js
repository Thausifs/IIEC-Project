import React from 'react';
import "../Asserts/Css/ComponentsCss/Dependentvisa.css";
import Dependentvisa from "../Asserts/images/dependentvisa.png";

const DependentVisa = () => {
  return (
    
      <div className="dependentvisacomponents">
        {" "}
        <a href='/dependentvisa'><img className='dependentvisaimg' src={Dependentvisa} width="320px" height="274px" ></img></a>
        <p className="dependentvisaone">Dependent Visa</p>
        <p className='dependentvisatwo'>Canada is a country composed of immigrants who have migrated from every country in the world to Canada. Canada’s success is largely due to the contributions made by the new immigrants.  </p>
      </div>
    
  );
};

export default DependentVisa;