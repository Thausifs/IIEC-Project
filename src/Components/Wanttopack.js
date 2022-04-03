import React from 'react';
import "../Asserts/Css/ComponentsCss/Wanttopack.css";
import Wanttopack from "../Asserts/images/wanttopack.png";



const WanttoPack = () => {
  return (
    
      <div className="wanttopackcomponents">
        {" "}
        <img className='wanttopackimg' src={Wanttopack} width="320px" height="274px" ></img>{" "}
        <p className="wanttopackone">What to pack</p>
        <p className='wanttopacktwo'>Being organised when you are packing will save you a lot of time and hassle in your new country. Our checklist will ensure you don’t miss anything out.</p>
      </div>
    
  );
};

export default WanttoPack ;