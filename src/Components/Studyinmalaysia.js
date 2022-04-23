
import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyinmalaysia.css";
import Studyinmalaysia from "../Asserts/images/Studyinmalaysia.png";

const StudyinMalaysia = () => {
  return (
    <div className='studyinmalaysiamaindiv'>
      <div className="studyinmalaysiacomponents">
        {" "}
       <div className='studyinmalaysiaimgdiv'> <img className='Studyinmalaysiaimg' src={Studyinmalaysia}  ></img>{" "}</div>
        <p className="studyinmalaysiaone">Study in Malaysia </p>
        <p className='studyinmalaysiatwo'>In this peaceful, plural and modern society, Malaysia, located in South East Asia, is a testimony to the world of what it is able to offer academically, socially, ethnically, culturally and in every other aspect of life to make the stay of any international student worth their time, money and effort. It is a fascinating and enchanting nation.</p>
      </div>{" "}
    </div>
  );
};

export default StudyinMalaysia;