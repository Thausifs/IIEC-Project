import React from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card.js';
import Header from '../../components/header';
import StudyAbroad from '../../components/studyabroad';
import "../../styles/pagescss/studyabroadpg/stepbystepguidepg.css";
import WhyStudyAbroad from '../../components/whystudyabroad';
import BottomBannerfirst from '../../components/bottombannerfirst';
import YourNextStep from '../../components/yournextstep';
import Footer from '../../components/footer';


const StepByStepGuide =()=>{
    return (
        <div className='page'>
         <Header/>
         <Navbar/>
         <div className='dis_flex'>
            <div className="flex-container rg-3p"  > 
              <WhyStudyAbroad/>
              <Card icon="Studyabroadintakes" title="Study abroad intakes" content="Did you know academic year in universities abroad differ from the ones in India? Most universities offer two major intakes for the students aspiring to study abroad – Spring intake and fall intake. Let’s help you know all about it."></Card>
              <Card icon="EmploymentProspectsabroad" title="Employment Prospects abroad" content="Know what kinds of job opportunities are available, and how to find them"></Card>
              <Card icon="Benefitsofstudyingabroad" title="Benefits of studying abroad" content="Know what kinds of job opportunities are available, and how to find them"></Card>
              <Card fdsz="7vw" icon="IIecguidetostudyabroad" title="IIEC’s guide to studying abroad " content="We know what it takes to find a good match and set you up for success. From helping you choose the course and country to guiding you through the paperwork, we get things done. This step-by-step guide will help you get started with your journey to studying abroad."></Card>

            </div>
           
            <div className="flex-container" >
                <StudyAbroad hgt="120vw" /> </div>
         </div>
         <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
              <Card  icon="Typesofofferletters" title="Types of offer letters " content="Understand the difference between conditional and unconditional offer letters."></Card>
              <Card  icon="IIecguidetostudyabroad" title="Study Abroad Parent Resources  " content="Here is a list of resources for parents to support and prepare your child for studying abroad."></Card>
               
            </div>
            <BottomBannerfirst/>
            <YourNextStep/>
            <Footer/>
        </div>    
    )
}

export default StepByStepGuide ;
