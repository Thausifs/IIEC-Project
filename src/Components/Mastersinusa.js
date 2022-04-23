import React from 'react';
import "../Asserts/Css/ComponentsCss/Mastersinusa.css";
import mastersinusa from "../Asserts/images/mastersinusa.png";

const MastersinUSA = () => {
  return (
    <div className='mastersinusamaindiv'>
      <div className="mastersinusacomponents">
        {" "}
        <div className='mastersinusaimgdiv'>   <a href='/mastersinusa'><img className='mastersinusacomponentsimg' src={mastersinusa}  ></img></a></div>
        <p className="mastersinusaone">MASTERS IN USA

</p>
        <p className='mastersinusatwo'>The Master of Sciences and Master of Engineering programs in U.S universities are second to none in the range of specialties, quality and popularity.
 </p>
      </div>
      </div>
  );
};

export default MastersinUSA ;