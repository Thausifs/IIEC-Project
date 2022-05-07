import React from 'react';
import "../Asserts/Css/ComponentsCss/immigrationtosouthafrica.css";
import Southafricaimmigration from "../Asserts/images/southafricaimmigration.png";

const ImmigrationtoSouthafrica  = () => {
  return (
    <div className='southafricaimmigrationmaindiv'>
      <div className="southafricaimmigrationcomponents">
        {" "}
        <div className='southafricaimmigrationimgdiv'>   <a href="/Immigratetosouthafrica"><img className='southafricaimmigrationimg' src={Southafricaimmigration}  ></img></a> </div>
        <p className="southafricaimmigrationone">Immigrate To South Africa </p>
        <p className='southafricaimmigrationtwo'>  </p>
      </div>
    </div>
  );
};

export default ImmigrationtoSouthafrica ;