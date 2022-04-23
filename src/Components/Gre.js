import React from 'react';
import "../Asserts/Css/ComponentsCss/Gre.css";
import Gre from "../Asserts/images/Gre.png";

const GRE = () => {
  return (
    <div className='GREmaindiv'>
      <div className="GREcomponents">
        {" "}
       <div className='GREimgdiv'> <a href="/gre"><img className='GREimg' src={Gre}  ></img></a></div>
        <p className="GREone"> GRE </p>
        <p className='GREtwo'>IIEC is an authorized GRE test Registration center for the British Council and IDP.  We have an excellent In-House training facility with huge resources, online content, highly skilled and trained Coaches and training materials of highest standards.</p>
      </div>{" "}
    </div>
  );
};

export default GRE;