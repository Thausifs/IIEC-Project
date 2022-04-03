import React from 'react';
import "../Asserts/Css/Pages/Immigrationservices.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';
import ImmigrationtoAustralia from '../Components/immigrationtoaustralia';
import ImmigrateToSouthAfrica from '../Components/immigrationtosouthafrica';
import ImmigrationtoCanada from '../Components/Immigrationtocanada';


const ImmigrationServices = ()=>{
    return (
        <div className='immigrationservicespage'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='immigrationservicesstd'>  <StudyAbroad></StudyAbroad></div>
           <h2 className='immigrationservicesmainhead'>VISA SERVICES</h2>
       <div className='immigrationservicesfirstdiv'> <ImmigrationtoCanada/><ImmigrationtoAustralia/><ImmigrateToSouthAfrica/>
         </div> 
          
       <div className='yoursnextstepimmi' > <YourNextStep></YourNextStep></div>
      <Footer></Footer>
     </div>
    )
    }
   
    export default ImmigrationServices;