import React from 'react';
import "../Asserts/Css/ComponentsCss/PTE.css";
import Pte from "../Asserts/images/Pte.png";

const PTE = () => {
  return (
    <div className='PTEmaindiv'>
      <div className="PTEcomponents">
        {" "}
       <div className='PTEimgdiv'> <a href="/PTE"><img className='PTEimg' src={Pte}  ></img></a></div>
        <p className="PTEone"> PTE </p>
        <p className='PTEtwo'>EB-5 Investor Visa Program applies to Investing in the U.S.A.</p>
      </div>{" "}
    </div>
  );
};

export default PTE;