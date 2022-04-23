import React from 'react';
import "../Asserts/Css/ComponentsCss/internshipinmalaysia.css";
import internshipinmalaysia from "../Asserts/images/internshipinmalaysia.png";

const InternshipinMalaysia = () => {
  return (
    <div className='Internshipinmalaysiamaindiv'>
      <div className="Internshipinmalaysiacomponents">
        {" "}
       <div className='Internshipinmalaysiaimgdiv'><a href="/internshipmalaysia"> <img className='Internshipinmalaysiaimg' src={internshipinmalaysia}  ></img></a></div>
        <p className="Internshipinmalaysiaone"> Malaysia </p>
        <p className='Internshipinmalaysiatwo'>Get your Intership in Malaysia</p>
      </div>{" "}
    </div>
  );
};

export default InternshipinMalaysia;