import React from 'react';
import "../Asserts/Css/ComponentsCss/GMAT.css";
import Gmat from "../Asserts/images/Gmat.png";

const GMAT = () => {
  return (
    <div className='GMATmaindiv'>
      <div className="GMATcomponents">
        {" "}
       <div className='GMATimgdiv'> <a href="/gmat"><img className='GMATimg' src={Gmat}  ></img></a></div>
        <p className="GMATone"> GMAT </p>
        <p className='GMATtwo'>IIEC is an authorized GMAT test Registration center for the British Council and IDP.  We have an excellent In-House training facility with huge resources, online content, highly skilled and trained Coaches and training materials of highest standards.</p>
      </div>{" "}
    </div>
  );
};

export default GMAT;