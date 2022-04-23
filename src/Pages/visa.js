import React from 'react';
import "../Asserts/Css/Pages/visa.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';
// import VISA from '../Components/visa';
// import ImmiGration from '../Components/immigration';
// import InternshipAssistance from '../Components/internshipassistance';
import BusinessVisa from '../Components/Businessvisa';
import DependentVisa from '../Components/Dependentvisa';
import EB5Visa from '../Components/Eb5visa';
import H1BAlternative from '../Components/h1balternative';
import TouristVisa from '../Components/Touristvisa';
import VisaRefusal from '../Components/visarefusal';


const Visa = ()=>{
    return (
        <div className='visapage'>
        <Header></Header>
        <Navbar></Navbar>
        <h2 className='visamainhead'>VISA SERVICES</h2>
        <div className='visastd'>  <StudyAbroad></StudyAbroad></div>
          
       <div className='visafirstdiv'> <BusinessVisa ></BusinessVisa ><DependentVisa/><EB5Visa/><H1BAlternative/><TouristVisa/><VisaRefusal/>
         </div> 
          
       <div className='visafirstyoursnextstepdiv' > <YourNextStep></YourNextStep></div>
      <Footer></Footer>
     </div>
    )
    }
   
    export default Visa;