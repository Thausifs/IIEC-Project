import React from 'react';
import "../Asserts/Css/Pages/otherservices.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';
import VISA from '../Components/visa';
import ImmiGration from '../Components/immigration';
import InternshipAssistance from '../Components/internshipassistance';


const OtherServices = ()=>{
    return (
        <div className='otherservicespage'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='otherservicesstd'>  <StudyAbroad></StudyAbroad></div>
       <div className='otherservicesfirstdiv'> <VISA></VISA>
         <ImmiGration></ImmiGration>
         <InternshipAssistance/></div> 
          
       <div className='yoursnextstepdiv' > <YourNextStep></YourNextStep></div>
      <Footer></Footer>
     </div>
    )
    }
   
    export default OtherServices;