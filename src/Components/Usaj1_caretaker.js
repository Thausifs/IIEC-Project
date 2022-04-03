import React from 'react';
import "../Asserts/Css/ComponentsCss/Usaj1_caretaker.css";
import USAJ1_caretaker from "../Asserts/images/USAJ1_caretaker.png";

const Usaj1_Caretaker  = () => {
  return (
    
      <div className="Usaj1_caretakercomponents">
        {" "}
       <a href="/usaj1caretaker"><img className='Usaj1_caretakercomponentsimg' src={USAJ1_caretaker} width="320px" height="274px" ></img></a> 
        <p className="Usaj1_caretakercomponentsone">USA J1 CARETAKER</p>
        <p className='Usaj1_caretakercomponentstwo'>Get your Intership in USA </p>
      </div>
    
  );
};

export default Usaj1_Caretaker ;