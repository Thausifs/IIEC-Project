import React from 'react';
import "../Asserts/Css/ComponentsCss/immigrationtoaustralia.css";
import Australiaimmigration from "../Asserts/images/australiaimmigration.png";

const ImmigrationtoAustralia  = () => {
  return (
    <div className='australiaimmigrationmaindiv'>
      <div className="australiaimmigrationcomponents">
        {" "}
        <div className='australiaimmigrationimgdiv'>   <a href="/immigratetoaustralia"><img className='australiaimmigrationimg' src={Australiaimmigration}  ></img></a> </div>
        <p className="australiaimmigrationone">Australia </p>
        <p className='australiaimmigrationtwo'>Canada is a country composed of immigrants who have migrated from every country in the world to Canada. Canada’s success is largely due to the contributions made by the new immigrants.  </p>
      </div>
    </div>
  );
};

export default ImmigrationtoAustralia ;