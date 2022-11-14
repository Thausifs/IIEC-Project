import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';



const  CourseAdvice =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>   
    <div className='dis_flex'>
        <div className="flex-container">
               <p className="mainhead">Course Advice To Find What’s Best For You IIEC</p>
               <p className="pagebold">We’ll help you find the perfect course that best suits your career goals</p>
               <p className="pagepara">Whether you’re still considering possible courses, tossing up between two fields of study or have no idea what kind of career you want, we can help you find the best course and coordinate your university application.</p>
               <p className='pageparabold'>Let’s find your best fit </p>
               <p className="pagepara">With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. Don’t worry, we are here to hand-hold you during the entire process. Our teams are backed by a sophisticated knowledge matching system that contains all the latest information on our partner institutions, including schools, English language colleges, vocational colleges, and universities. </p>
               <p className='pageparabold'>We work on your dream goals </p>
               <p className="pagepara">It may seem obvious, but your education, experiences and topics of interest are the first steps to finding your dream course. Also, your chosen course should put you on a path to a profession you’ll love for life. Your IIEC counsellor will work with you to shortlist a range of courses and dive down deep into the detail of course handbooks and subject choices. Once you decide on the course of your dreams, we’ll help you to shortlist the perfect destination and educational institution for you. </p>
               <p className='pageparabold'>Struggling to choose a course? find the right one</p>
               <p className='pageparabold'>Consider the timelines and budgets</p>
               <p className="pagepara">Knowing how much a course will cost and how much you can afford to spend on your education are significant factors in choosing where and what to study. </p>
               <p className="pagepara">Carefully consider the academic year you wish to enrol in and the intake you want to apply for. Remember, every country has its own intake and you need to time your application process</p>
               <p className='pageparabold'>Explore study abroad intakes</p>
               <p className="pagepara">Your IIEC counsellor will also guide you through the practicalities of when, where and how you can apply to study and commence your course in these destinations. </p>
               <p className='pageparabold'>Course experience and campus life
</p>
               <p className="pagepara">The environment and social culture of a university are important factors in determining how satisfied and happy you’ll be in your course. Every student’s preferences are different. You may thrive in a lively city campus, or you might prefer a smaller, rural location. You might want a campus with lots of cultural diversity or one with active clubs and societies. We’ll take all of this into account as we help you select your choice.
</p>
<p className='pageparabold'>Explore the campus life, facilities, infrastructure and much more about your dream university. </p>
<p className='pageparabold'>Study abroad scholarships </p>
               <p className="pagepara">We understand funding your international education can be quite a concern, but don’t worry, there are numerous scholarships available for meritorious students. Your IIEC counsellor will help you find the best scholarship options for you to manage those expenses with ease.
</p>          
<p className='pageparabold'>
Explore scholarships
</p>
               <p className='pageparabold'>Apply with confidence, we’ve got your back
</p>
               <p className="pagepara">We take the hassle out of submitting your university and school applications. Your designated IIEC counsellor will submit your applications on your behalf. 

</p>
               <p className="pagepara">Our team will also help with course application documents, compile your applications, certify supporting documents and send your application directly to your chosen university or institution. 
</p>
              
 
        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
    <p className='mainhead'>Application assessment and acceptance
</p>
               <p className="pagepara">Most universities and institutions respond within 2-6 weeks of your application being submitted, and if they offer you a place in a course, you will receive an official offer letter. You can also attend our various education fairs and seminars where representatives from top universities area available to interact directly and assess your eligibility for the course on-the-spot. 
</p>
         <p className='pagebold'>Explore virtual events by IIEC 
</p>
         <p className='pagebold'>Acceptance and payment, the final steps
</p>
        
               <p className="pagepara">If there are no conditions on your offer letter that you need to meet, you can accept the offer immediately. Examples of conditions that could be specified include submission of a new IELTS test result, your academic transcript of a recently completed study, or certain certified documents.</p>
               <p className="pagepara">If you wish to save your time and hassle, you can accept your university offers at your nearest IIEC office by paying the specified deposit.
</p>
               <p className="pagepara">If your tuition fee payment is in the form of a bank draft, make it payable to your institution and we can help courier it for you. </p>

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
export default CourseAdvice