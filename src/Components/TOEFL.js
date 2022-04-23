import React from 'react';
import "../Asserts/Css/ComponentsCss/TOEFL.css";
import Toefl from "../Asserts/images/Toefl.png";

const TOEFL = () => {
  return (
    <div className='TOEFLmaindiv'>
      <div className="TOEFLcomponents">
        {" "}
       <div className='TOEFLimgdiv'> <a href="/toefl"><img className='TOEFLimg' src={Toefl}  ></img></a></div>
        <p className="TOEFLone"> TOEFL </p>
        <p className='TOEFLtwo'>TOEFL course offers extensive coverage on all topics. Our trainers will examine key fundamentals, the right approach, effective solving technique and test taking strategies. No stone will be left unturned! Expect plenty of interaction and practice from the leading TOEFL specialist.

</p>
      </div>{" "}
    </div>
  );
};

export default TOEFL;