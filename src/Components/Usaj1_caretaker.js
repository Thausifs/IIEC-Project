import React from 'react';
import "../Asserts/Css/ComponentsCss/Usaj1_caretaker.css";
import USAJ1_caretaker from "../Asserts/images/USAJ1_caretaker.png";

const Usaj1_Caretaker  = () => {
  return (
    <div className='Usaj1_caretakermaindiv'>
      <div className="Usaj1_caretakercomponents">
        {" "}
        <div className='Usaj1_caretakerimgdiv'>   <a href="/usaj1caretaker"><img className='Usaj1_caretakercomponentsimg' src={USAJ1_caretaker}  ></img></a> </div>
        <p className="Usaj1_caretakerone">USA J1 CARETAKER</p>
        <p className='Usaj1_caretakertwo'>Get your Intership in USA </p>
      </div>
    </div>
  );
};

export default Usaj1_Caretaker ;