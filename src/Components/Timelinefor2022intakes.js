import React from 'react';
import "../Asserts/Css/ComponentsCss/Timelinefor2022intakes.css";
import Timelinefor2022Intakes from "../Asserts/images/timelinefor2022intakes.png";

const Timelinefor2022intakes = () => {
  return (
    <div className='timelinefor2022intakesmaindiv'>
      <div className="timelinefor2022intakescomponents">
        {" "}
       <div className='timelinefor2022intakesimgdiv'> <img className='timelinefor2022intakesimg' src={Timelinefor2022Intakes}  ></img>{" "}</div>
        <p className="timelinefor2022intakesone"> Timeline for 2022 intakes </p>
        <p className='timelinefor2022intakestwo'>Plan ahead to be study ready. We have mapped an indicative timeline for you to get started and live your study abroad dreams.</p>
      </div>{" "}
    </div>
  );
};

export default Timelinefor2022intakes;