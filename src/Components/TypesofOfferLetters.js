import React from 'react';
import "../Asserts/Css/ComponentsCss/Typesofofferletters.css";
import Typesofofferletters from "../Asserts/images/Typesofofferletters.png";

const TypesofOfferLetters = () => {
  return (
    <div className='TypesofOfferLettersmaindiv' >
      <div className="TypesofOfferLetterscomponents">
        {" "}
       <div className="TypesofOfferLettersimgdiv"> <img className='IIECguidetostudyingabroadimg' src={Typesofofferletters} ></img>{" "}</div>
     
        <p className='TypesofOfferLetterstwo'>Understand the difference between conditional and unconditional offer letters.</p>
      </div>{" "}
    </div>
  );
};

export default TypesofOfferLetters ;