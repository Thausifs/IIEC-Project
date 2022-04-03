import React from 'react';
import "../Asserts/Css/Pages/ImmigratetosouthAfrica.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const ImmigrateToSouthAfrica = ()=>{
    return (
          <div className='ImmigratetosouthAfricapage'>
              <Header></Header>
              <Navbar></Navbar>
             <div className='ImmigratetosouthAfricastd'> <StudyAbroad></StudyAbroad></div>
             <h1 className='ImmigratetosouthAfricamainhead'>Immigrate To South Africa</h1>
<div className='yournextstepimmitosouth'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default ImmigrateToSouthAfrica  ;  