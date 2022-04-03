import React from 'react';
import "../Asserts/Css/ComponentsCss/USAJ1.css";
import USAJ1 from "../Asserts/images/USAJ1.png";

const USAj1  = () => {
  return (
    
      <div className="usaj1components">
        {" "}
       <a href="/usaj1"><img className='usaj1componentsimg' src={USAJ1} width="320px" height="274px" ></img></a> 
        <p className="usaj1componentsone">USA J ‐ 1 </p>
        <p className='usaj1componentstwo'>The world has reinvented itself into a Global Village and Globalization has transformed the geographical boundaries into trade blocs. Advancements in technology, ground breaking developments in transportation systems and creation of seamless global businesses has opened up a phenomenal demand for the World Savvy businessman to go out there and grow without limits.  </p>
      </div>
    
  );
};

export default USAj1 ;