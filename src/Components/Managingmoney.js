import React from 'react';
import "../Asserts/Css/ComponentsCss/managingmoney.css";
import Managingmoney from "../Asserts/images/Managingmoney.png";

const ManagingMoney = () => {
  return (
    
      <div className="managingmoneycomponents">
        {" "}
        <img className='managingmoneyimg' src={Managingmoney} width="320px" height="274px" ></img>{" "}
        <p className="managingmoneyone">Managing money </p>
        <p className='managingmoneytwo'>It can be hard to manage expenses and budgeting on your own. Our financial survival guide is here to help you plan your money well.</p>
      </div>
    
  );
};

export default ManagingMoney ;