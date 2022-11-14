import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';
import Card2 from '../../components/card2';


const  InternshipAssistance =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <Card2 icon="USAJ1" title="USA J ‐ 1" content="The world has reinvented itself into a Global Village and Globalization has transformed the geographical boundaries into trade blocs. Advancements in technology, ground breaking developments in transportation systems and creation of seamless global businesses has opened up a phenomenal demand for the World Savvy businessman to go out there and grow without limits. "link=""/>
        <Card2 icon="USAJ1_summer" title="USA J1 SUMMER WORK & TRAVEL" content="Canada is a country composed of immigrants who have migrated from every country in the world to Canada. Canada’s success is largely due to the contributions made by the new immigrants. "link=""/>
        <Card2 icon="USAJ1_caretaker" title="USA J1 CARETAKER" content="Get your Intership in USA" link=""/>
        <Card2 icon="Malaysia" title="Malaysia" content="Get your Intership in USA" link=""/>


        </div>
        <div className='flex-container'><StudyAbroad hgt="110vw"/></div>
    </div>
    <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}> 
    
      </div>
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default InternshipAssistance ; 