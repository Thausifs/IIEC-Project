import React from 'react';
import "../Asserts/Css/ComponentsCss/Networkingandsocialising.css";
import Networkingandsocialising from "../Asserts/images/NetworkingandSocialising.png";

const NetworkingandSocialising  = () => {
  return (
    <div className='networkingandSocialisingmaindiv'>
      <div className="networkingandSocialisingcomponents">
        {" "}
        <div className='networkingandSocialisingimgdiv'>  <img className='networkingandSocialisingimg' src={Networkingandsocialising} ></img></div>
        <p className="networkingandSocialisingone">Networking and socialising</p>
        <p className='networkingandSocialisingtwo'>Learn how to network and socialise for a successful professional life. These simple tips will help you get out and about. </p>
      </div>
      </div>
  );
};

export default NetworkingandSocialising ;