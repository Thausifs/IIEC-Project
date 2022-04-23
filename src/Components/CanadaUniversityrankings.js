import React from 'react';
import "../Asserts/Css/ComponentsCss/CanadaUniversityrankings.css";
import canadauniversity from "../Asserts/images/canadauniversity.png";

const CanadaUniversityrankings = () => {
  return (
    <div className='canadauniversityrankingsmaindiv'>
      <div className="canadauniversityrankingscomponents">
        {" "}
        <div className='canadauniversityrankingsimgdiv'> <img className='canadauniversityrankingsimg' src={canadauniversity} ></img></div>
        <p className="canadauniversityrankingsone"> Canada University rankings </p>
        <p className='canadauniversityrankingstwo'>Let’s simply it for you. Here’s a step-by-step guide to help you get started with your journey to studying abroad.</p>
      </div>
      </div>
  );
};

export default CanadaUniversityrankings;