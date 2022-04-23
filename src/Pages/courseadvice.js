import React from 'react';
import "../Asserts/Css/Pages/courseadvice.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';

import CourseAdvicesixreasons from '../Components/Courseadvicesixreasons';
import IIecguidetoStudyAbroad from '../Components/IIecguidetostudyabroad';




const CourseAdvice = ()=>{
    return (
        <div className='courseadvicepage'>
            <Header></Header>
            <Navbar></Navbar>
          <div className='courseadvicestd'>  <StudyAbroad></StudyAbroad></div> 

            <h2 className='courseadvicemainhead'>Course advice to find what’s best for you IIEC</h2>
            <h2 className='courseadviceheading'>We’ll help you find the perfect course that best suits your career goals</h2>
            <p className='courseadvicepara'>Whether you’re still considering possible courses, tossing up between two fields of study or have no idea what kind of career you want, we can help you find the best course and coordinate your university application. </p>
            <h2 className='courseadviceheading'>Let’s find your best fit </h2>
            <p className='courseadvicepara'>With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. Don’t worry, we are here to hand-hold you during the entire process. Our teams are backed by a sophisticated knowledge matching system that contains all the latest information on our partner institutions, including schools, English language colleges, vocational colleges, and universities. </p>
            <h2 className='courseadviceheading'>We work on your dream goals </h2>
            <p className='courseadvicepara'>It may seem obvious, but your education, experiences and topics of interest are the first steps to finding your dream course. Also, your chosen course should put you on a path to a profession you’ll love for life. Your IIEC counsellor will work with you to shortlist a range of courses and dive down deep into the detail of course handbooks and subject choices. Once you decide on the course of your dreams, we’ll help you to shortlist the perfect destination and educational institution for you. </p>
            <h2 className='courseadviceheading'>Struggling to choose a course? find the right one</h2>
            <h2 className='courseadviceheading'>Consider the timelines and budgets</h2>
            <p className='courseadvicepara'>Knowing how much a course will cost and how much you can afford to spend on your education are significant factors in choosing where and what to study. </p>
            <p className='courseadvicepara'>Carefully consider the academic year you wish to enrol in and the intake you want to apply for. Remember, every country has its own intake and you need to time your application process </p>
            <h2 className='courseadviceheading'>Explore study abroad intakes</h2>
             <p className='courseadvicepara'>Your IIEC counsellor will also guide you through the practicalities of when, where and how you can apply to study and commence your course in these destinations. </p>
             <h2 className='courseadviceheading'>Course experience and campus life</h2>
             <p className='courseadvicepara'>The environment and social culture of a university are important factors in determining how satisfied and happy you’ll be in your course. Every student’s preferences are different. You may thrive in a lively city campus, or you might prefer a smaller, rural location. You might want a campus with lots of cultural diversity or one with active clubs and societies. We’ll take all of this into account as we help you select your choice.</p>
             <h2 className='courseadviceheadings'>Explore the campus life, facilities, infrastructure and much more about your dream university. </h2>
             <h2 className='courseadviceheadings'>Study abroad scholarship.  </h2>
             <p className='courseadviceparas'>We understand funding your international education can be quite a concern, but don’t worry, there are numerous scholarships available for meritorious students. Your IIEC counsellor will help you find the best scholarship options for you to manage those expenses with ease.</p>
             <p className='courseadviceparas'>Explore scholarships</p>
             <h2 className='courseadviceheadings'>Explore scholarships</h2>
             <p className='courseadviceparas'>We take the hassle out of submitting your university and school applications. Your designated IIEC counsellor will submit your applications on your behalf. </p>
             <p className='courseadviceparas'>Our team will also help with course application documents, compile your applications, certify supporting documents and send your application directly to your chosen university or institution. </p>
             <h1 className='courseadviceheadings'>Application assessment and acceptance</h1>
             <p className='courseadviceparas'>Most universities and institutions respond within 2-6 weeks of your application being submitted, and if they offer you a place in a course, you will receive an official offer letter. You can also attend our various education fairs and seminars where representatives from top universities area available to interact directly and assess your eligibility for the course on-the-spot. </p>
             <h1 className='courseadviceheadings'>Explore virtual events by IIEC </h1>
             <h1 className='courseadviceheadings'>Acceptance and payment, the final steps</h1>
             <p className='courseadviceparas'>If there are no conditions on your offer letter that you need to meet, you can accept the offer immediately. Examples of conditions that could be specified include submission of a new IELTS test result, your academic transcript of a recently completed study, or certain certified documents.</p>
             <p className='courseadviceparas'>If you wish to save your time and hassle, you can accept your university offers at your nearest IIEC office by paying the specified deposit.</p>
             <p className='courseadviceparas'>If your tuition fee payment is in the form of a bank draft, make it payable to your institution and we can help courier it for you. </p>
             <div className='notediv'>
                 <p className='courseadviceparas'>Note: Given the current COVID-19 situation, there might be some changes in the 2020/2021 intakes. Don’t worry, our international education experts are here to guide you with the latest updates to help you apply to your desired course and institution. Feel free to connect with our experts for a free counselling session and keep posted about the latest COVID- 19 updates. </p>
             </div>
             <div className='courseadvicebottomdiv'>
            <CourseAdvicesixreasons/>
            <IIecguidetoStudyAbroad/>
        </div>
              <YourNextStep></YourNextStep>
              <Footer></Footer>
        </div>

    )
}
export default CourseAdvice ;