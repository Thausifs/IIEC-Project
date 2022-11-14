import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';



const  SixReasonstoIIEC =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
               <p className="mainhead">Six reasons to choose IIEC</p>
               <p className="pagebold">Study overseas with someone who knows the way </p>
               <p className='pagepara'>IDP is a global leader in international education services. We help international students study in English speaking countries. Our success comes from connecting students with the right course in the right institution and the right country. </p>
               <p className="pagepara">We've been operating for close to 50 years, creating a huge network of opportunity with offices in over 30 countries.</p>
               <p className='pagebold'>Ready to start your global career? We're here to help.</p>
               <p className='pagepara'>We work with you to help realise your dream of studying overseas for professional and personal growth. We combine experience and technology to help you make the most informed decision possible.</p>
               <p className="pagebold">1. We put you first.</p>
               <p className="pagepara">Need help finding the best course, submitting your university application or guidance for your visa process? Our extensive network of experienced counsellors help you identify and secure the university or college where you can thrive. Your dedicated IDP counsellor will work with you closely, supporting you and your family, throughout your study abroad journey. </p>
               <p className="pageparabold">Learn more about our course advice</p>

               <p className="pagebold">2. Approachable international education experts.</p>
               <p className="pagepara">We have more than 700 education counsellors based around the world. Many of our counsellors were international students too, and are ready to do whatever it takes to help you find the right course and country. They're international education experts, ready to go the extra mile and a friendly face who've 'been there and done that' and willing to share what they learned. Our counsellors are the greatest. </p>
               <p className="pageparabold">Follow our step-by-step guide to studying abroad</p>

               <p className="pagebold">3. Support every step of the way.</p>
               <p className="pagepara">Our support doesn't end when you receive your university acceptance letter. At IDP, we're dedicated to ensuring you feel supported at every stage of your study journey. We offer a full suite of services, covering English language testing (IELTS), visa assistance and pre-departure advice. Our services are continually evolving to support our students through to graduation and beyond.</p>
               <p className="pageparabold">Find out about our student support</p>


               <p className="pagebold">4. Proud co-owners of IELTS</p>
               <p className="pagepara">As a co-owner of IELTS, we can help you book and prepare for your IELTS test. Recognised by more than 10,000 organisations around the world, IELTS is the world’s leading English language test for study, work and migration purposes. Our IELTS network spans in more than 450 test locations across 55 countries. </p>
               <p className="pageparabold">Know all about the  IELTS</p>

               <p className="pagebold">5. Part of a living network</p>
               <p className="pagepara">We’ll put you in touch with alumni or current students who’ve been where you want to be and are happy to share their stories. IDP is a living network of students, alumni and employers, buzzing across the world. When you arrive in your new country, we’ll connect you with other IDP students through welcome events to help you settle in.</p>

               <p className="pagebold">6. Let’s make it happen </p>
               <p className="pagepara">If you've been thinking about your study abroad options, let’s work together to find your best country, university and course. Book an appointment with one of our teams, so we can start to plan your journey from where you are today, to where you want to be.</p>
               
               
        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    
    <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
    <Card  icon="Studyabroadintakes" title="Come to our free counselling sessions" content="Studying overseas is a big step to take. Let’s answers some basic queries so you can understand if you are ready to undertake an international degree."></Card>
               <Card  icon="Applyfor2022intakes" title="Course Advice" content="Can’t decide what course to pursue? Course selection entails evaluation of personal aspirations, career goals, employability, timelines, budget and many more. Come to us, we will help you evaluate your strengths and find the right course for you."></Card>
         </div>
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default SixReasonstoIIEC