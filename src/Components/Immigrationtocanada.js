import React from 'react';
import "../Asserts/Css/ComponentsCss/Immigrationtocanada.css";
import Canadaimmigration from "../Asserts/images/canadaimmigration.png";

const ImmigrationtoCanada  = () => {
  return (
    <div className='immigrationtocanadamaindiv'>
      <div className="immigrationtocanadacomponents">
        {" "}
        <div className='immigrationtocanadaimgdiv'>   <a href=""><img className='immigrationtocanadaimg' src={Canadaimmigration}  ></img></a> </div>
        <p className="immigrationtocanadaone">Canada </p>
        <p className='immigrationtocanadatwo'>The world has reinvented itself into a Global Village and Globalization has transformed the geographical boundaries into trade blocs. Advancements in technology, ground breaking developments in transportation systems and creation of seamless global businesses has opened up a phenomenal demand for the World Savvy businessman to go out there and grow without limits.  </p>
      </div>
    </div>
  );
};

export default ImmigrationtoCanada ;