import React from 'react';
import "../Asserts/Css/ComponentsCss/SAT.css";
import Sat from "../Asserts/images/Sat.png";

const SAT = () => {
  return (
    <div className='SATmaindiv'>
      <div className="SATcomponents">
        {" "}
       <div className='SATimgdiv'> <a href="/sat"><img className='SATimg' src={Sat}  ></img></a></div>
        <p className="SATone"> SAT </p>
        <p className='SATtwo'>IIEC is an authorized SAT test Registration center for the British Council and IDP.  We have an excellent In-House training facility with huge resources, online content, highly skilled and trained Coaches and training materials of highest standards.</p>
      </div>{" "}
    </div>
  );
};

export default SAT;