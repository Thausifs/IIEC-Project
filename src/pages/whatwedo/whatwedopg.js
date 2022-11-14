import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';
import BottomBannerfirst from '../../components/bottombannerfirst';


const  WhatWeDo =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
               <p className="mainhead">What we do</p>
               <p className="pageparabold">Study abroad with someone who knows the way.</p>
               <p className='pagepara'>IDP is a global leader in international educational services. We’ve been in the industry for close to 50 years and know the best practices to help you realise your dream of studying abroad. Our range of services, experienced staff and foothold in the industry ensures that your international future is bright and rewarding. </p>
               <p className='mainhead'>Student Essential Services</p>
               <Card  icon="Courseadvice" title="Course advice" content="With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. Here’s how we can help you find a course that suits your career goals!"></Card>
               <Card  icon="visaapplicationassistance" title="Visa application assistance" content="We’ll guide you through the application process and help you prepare the right documents for your visa submission."></Card>
               <Card  icon="wanttopack" title="Prepare for departure" content="Get off the plane feeling confident and ready for the adventures ahead with our pre-departure support. Let’s get you study ready!"></Card>
               <Card  icon="NetworkingandSocialising" title="Free study abroad counselling" content="Our counsellors are international education specialists who are ready to do whatever it takes to help you find the right course and country. Best part, all sessions are free!"></Card>
        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
        <BottomBannerfirst/>
    </div>
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default WhatWeDo 