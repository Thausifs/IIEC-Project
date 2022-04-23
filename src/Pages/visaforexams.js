import React from 'react';
import "../Asserts/Css/Pages/visaforexams.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';
// import VISA from '../Components/visa';
// import ImmiGration from '../Components/immigration';
// import InternshipAssistance from '../Components/internshipassistance';
import IELTS from '../Components/IELTS';
import TOEFL from '../Components/TOEFL';
import PTE from '../Components/PTE';
import GMAT from '../Components/GMAT';
import SAT from '../Components/SAT';
import GRE from '../Components/Gre';


const VisaforExams = ()=>{
    return (
        <div className='visaforexamspage'>
        <Header></Header>
        <Navbar></Navbar>
        <h2 className='visaforexamsmainhead'>VISA FOR EXAMS SERVICES</h2>
        <div className='visaforexamsstd'>  <StudyAbroad></StudyAbroad></div>
          
       <div className='visaforexamsfirstdiv'>
          <IELTS/>
          <TOEFL/>
          <PTE/><GMAT/>
          <SAT/>
          <GRE/>
         </div> 
          
       <div className='visaforexamssnextstepdiv' > <YourNextStep></YourNextStep></div>
      <Footer></Footer>
     </div>
    )
    }
   
    export default VisaforExams;