import React from 'react';
import "../Asserts/Css/Pages/internshipassistanceservice.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';
import USAj1_Summer from '../Components/Usaj1_summer';
import Usaj1_Caretaker from '../Components/Usaj1_caretaker';
import MalaySia from '../Components/Malaysia';
import USAJ1 from '../Components/USAJ1';


const InternshipAssistance = ()=>{
    return (
        <div className='internshipassistancepage'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='internshipassistancestd'>  <StudyAbroad></StudyAbroad></div>
           <h2 className='internshipassistancemainhead'>INTERNSHIP ASSISTANCE SERVICES</h2>
       <div className='internshipassistancefirstdiv'> <USAJ1/><USAj1_Summer/><Usaj1_Caretaker/><MalaySia/>
         </div> 
          
       <div className='yoursnextstepIAS' > <YourNextStep></YourNextStep></div>
      <Footer></Footer>
     </div>
    )
    }
   
    export default InternshipAssistance;