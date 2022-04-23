import React from 'react';
import "../Asserts/Css/ComponentsCss/Cometoourfreecounsellingsession.css";
import Cometoourfreecounsellingsession from "../Asserts/images/Cometoourfreecounsellingsession.png";

const CometoourFreeCounsellingsession = () => {
  return (
    <div className='Cometoourfreecounsellingsessionmaindiv'>
      <div className="Cometoourfreecounsellingsessioncomponents">
        {" "}
       <div className='Cometoourfreecounsellingsessionimgdiv'> <img className='Cometoourfreecounsellingsessionimg' src={Cometoourfreecounsellingsession}  ></img>{" "}</div>
        <p className="Cometoourfreecounsellingsessionone"> Come to our free counselling sessions </p>
        <p className='Cometoourfreecounsellingsessiontwo'>Studying overseas is a big step to take. Let’s answers some basic queries so you can understand if you are ready to undertake an international degree.</p>
      </div>{" "}
    </div>
  );
};

export default CometoourFreeCounsellingsession;