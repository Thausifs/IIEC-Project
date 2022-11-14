import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';



const FreeStudyAbroad =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
               <p className="mainhead">Free study abroad counselling</p>
               <p className='pagebold'>Planning a better future? Build it by studying abroad with IIEC.</p>
               <p className="pagepara">IDP is a global leader in international student services and proud co-owner of the IELTS (International English Language Testing System). We help students study in English speaking countries such as Australia, New Zealand, Canada, Ireland, the UK and the US. We’ve been operating for close to 50 years, creating a huge network of opportunity with offices in 30 countries. Our extensive network of approachable experts helps you identify and secure the right institution.</p>
               <p className='pagebold'>We don’t charge for counselling and guidance.</p>

               <p className='pagepara'>All our counselling sessions are free, and we try to make your process of applying abroad as smooth as possible. We have a team of over 700 experienced counsellors based around the world to help with your university and course selection, application procedure, offer letters, visa process and pre-departure briefings. So far, we have helped over 450,000 students find the right course to pursue in their dream destinations. </p>
               <p className='pagepara'>Come, visit us for a free session</p>
               <p className='pagepara'>Walk in to any of our 34 offices in India or fill in the enquiry form to book a free appointment. On the day of your appointment, bring your wish list and course preferences as a starting point. Your IDP counsellor will discuss with you in detail, your education background, preferences and budget to help ascertain your possibilities in potential universities.</p>
              <p className='pagebold'>At IIEC, we support you with: </p>
               
               <p className='pagepara'>Unbiased and expert counselling via personal interview
</p>
               <p className='pagepara'>Assistance in application submission
</p>
               <p className='pagepara'>Registration and preparation guidance for IELTS
</p>
               <p className='pagepara'>Guidance on offer letters
</p>
               <p className='pagepara'>Assistance with health insurance and accommodation
</p>
               <p className='pagepara'>Welcome events in study country
    </p>
               <p className='pagepara'>All our counsellors are professionally certified and many have been international students themselves. Your assigned counsellor will work through all the details and processes to make sure you will have the best possible fit your future university and your area of study.
</p>
               <p className='pagepara'>How can I book an appointment?</p>
               <p className='pagepara'>You may either call us on 1800 102 2233 or walk in to your nearest IDP office in India. You may also book an appointment online.</p>
               <p className='pagepara'>Our support does not end with your acceptance letter. We will be there to assist you even after you reach your new country. Come, see us – It’s free!</p>
              <p className='pagebold'></p>
        
        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
    <Card  icon="Studyabroadintakes" title="Course advice" content="Can’t decide what course to pursue? Course selection entails evaluation of personal aspirations, career goals, employability, timelines, budget and many more. Come to us, we will help you evaluate your strengths and find the right course for you."></Card>
               <Card  icon="Applyfor2022intakes" title="IIEC’s guide to study abroad" content="Let’s simply it for you. Here’s a step-by-step guide to help you get started with your journey to studying abroad."></Card>
         </div>
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default FreeStudyAbroad