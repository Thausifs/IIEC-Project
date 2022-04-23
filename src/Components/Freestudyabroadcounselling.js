import React from 'react';
import "../Asserts/Css/ComponentsCss/Freestudyabroadcounselling.css";
import Freestudyabroadcounselling from "../Asserts/images/Freestudyabroadcounselling.png";

const FreestudyAbroadCounselling = () => {
  return (
    <div className='freestudyabroadcounsellingmaindiv'>
      <div className="freestudyabroadcounsellingcomponents">
        {" "}
       <div className='freestudyabroadcounsellingimgdiv'> <img className='freestudyabroadcounsellingimg' src={Freestudyabroadcounselling}  ></img>{" "}</div>
        <p className="freestudyabroadcounsellingone"> Free study abroad counselling</p>
        <p className='freestudyabroadcounsellingtwo'>Our counsellors are international education specialists who are ready to do whatever it takes to help you find the right course and country. Best part, all sessions are free!</p>
      </div>{" "}
    </div>
  );
};

export default FreestudyAbroadCounselling;