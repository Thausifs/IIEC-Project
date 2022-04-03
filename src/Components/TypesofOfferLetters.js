import React from 'react';
import "../Asserts/Css/ComponentsCss/Typesofofferletters.css";
import Typesofofferletters from "../Asserts/images/Typesofofferletters.png";

const TypesofOfferLetters = () => {
  return (
    <div >
      <div className="IIECguidetostudyingabroadcomponents">
        {" "}
        <img className='IIECguidetostudyingabroadimg' src={Typesofofferletters} ></img>{" "}
        <p className="IIECguidetostudyingabroadone">  </p>
        <p className='IIECguidetostudyingabroadtwo'>Understand the difference between conditional and unconditional offer letters.</p>
      </div>{" "}
    </div>
  );
};

export default TypesofOfferLetters ;