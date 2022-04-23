import React from 'react';
import "../Asserts/Css/ComponentsCss/IELTS.css";
import Ielts from "../Asserts/images/Ielts.png";

const IELTS = () => {
  return (
    <div className='IELTSmaindiv'>
      <div className="IELTScomponents">
        {" "}
       <div className='IELTSimgdiv'> <a href="/ielts"><img className='IELTSimg' src={Ielts}  ></img></a></div>
        <p className="IELTSone"> IELTS </p>
        <p className='IELTStwo'>IIEC is an authorized IELTS test Registration center for the British Council and IDP.  We have an excellent In-House training facility with huge resources, online content, highly skilled and trained Coaches and training materials of highest standards.</p>
      </div>{" "}
    </div>
  );
};

export default IELTS;