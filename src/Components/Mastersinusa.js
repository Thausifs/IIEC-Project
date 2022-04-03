import React from 'react';
import "../Asserts/Css/ComponentsCss/Mastersinusa.css";
import mastersinusa from "../Asserts/images/mastersinusa.png";

const MastersinUSA = () => {
  return (
    
      <div className="mastersinusacomponents">
        {" "}
        <a href='/mastersinusa'><img className='mastersinusacomponentsimg' src={mastersinusa} width="320px" height="274px" ></img></a>
        <p className="mastersinusacomponentsone">MASTERS IN USA

</p>
        <p className='mastersinusacomponentstwo'>The Master of Sciences and Master of Engineering programs in U.S universities are second to none in the range of specialties, quality and popularity.
 </p>
      </div>
    
  );
};

export default MastersinUSA ;