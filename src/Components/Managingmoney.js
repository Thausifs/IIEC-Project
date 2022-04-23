import React from 'react';
import "../Asserts/Css/ComponentsCss/managingmoney.css";
import Managingmoney from "../Asserts/images/Managingmoney.png";

const ManagingMoney = () => {
  return (
    <div className='managingmoneymaindiv'>
      <div className="managingmoneycomponents">
        {" "}
        <div className='managingmoneyimgdiv'>   <img className='managingmoneyimg' src={Managingmoney}  ></img></div>
        <p className="managingmoneyone">Managing money </p>
        <p className='managingmoneytwo'>It can be hard to manage expenses and budgeting on your own. Our financial survival guide is here to help you plan your money well.</p>
      </div>
    </div>
  );
};

export default ManagingMoney ;