import React from 'react';
import "../Asserts/Css/ComponentsCss/Immigrationtocanada.css";
import Canadaimmigration from "../Asserts/images/canadaimmigration.png";

const ImmigrationtoCanada  = () => {
  return (
    
      <div className="immigrationtocanadacomponents">
        {" "}
       <a href=""> <img className='immigrationtocanadacomponentsimg' src={Canadaimmigration} width="320px" height="274px" ></img></a>
        <p className="immigrationtocanadacomponentsone">Canada </p>
        <p className='immigrationtocanadacomponentstwo'>The world has reinvented itself into a Global Village and Globalization has transformed the geographical boundaries into trade blocs. Advancements in technology, ground breaking developments in transportation systems and creation of seamless global businesses has opened up a phenomenal demand for the World Savvy businessman to go out there and grow without limits.  </p>
      </div>
    
  );
};

export default ImmigrationtoCanada ;