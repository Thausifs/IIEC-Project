import React from 'react';
import "../Asserts/Css/ComponentsCss/Preparefordeparture.css";
import Preparefordeparture from "../Asserts/images/Preparefordeparture.png";

const PrepareforDeparture = () => {
  return (
    <div className='preparefordeparturemaindiv'>
      <div className="preparefordeparturecomponents">
        {" "}
       <div className='preparefordepartureimgdiv'> <img className='preparefordepartureimg' src={Preparefordeparture}  ></img>{" "}</div>
        <p className="preparefordepartureone"> Timeline for 2022 intakes </p>
        <p className='preparefordeparturetwo'>Plan ahead to be study ready. We have mapped an indicative timeline for you to get started and live your study abroad dreams.</p>
      </div>{" "}
    </div>
  );
};

export default PrepareforDeparture;