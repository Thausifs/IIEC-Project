import React from 'react';
import "../Asserts/Css/Pages/sixreasonstoiiec.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const SixReasonstoIIEC = ()=>{
    return (
        <div className='sixreasonstoiiecpage'>
            <Header></Header>
            <Navbar></Navbar>
            <div className='sixreasonsdiv'> <StudyAbroad></StudyAbroad></div>
         <h2 className='sixreasonstoiiecmainhead'>Six reasons to choose IIEC</h2>
         <h2 className='sixreasonstoiiecheading'>Study overseas with someone who knows the way</h2>
         <p className='sixreasonstoiiecpara'>IDP is a global leader in international education services. We help international students study in English speaking countries. Our success comes from connecting students with the right course in the right institution and the right country.</p>
         <p className='sixreasonstoiiecpara'>We've been operating for close to 50 years, creating a huge network of opportunity with offices in over 30 countries.</p>
         <h2 className='sixreasonstoiiecheading'>Ready to start your global career? We're here to help.</h2>
         <p className='sixreasonstoiiecpara'>We work with you to help realise your dream of studying overseas for professional and personal growth. We combine experience and technology to help you make the most informed decision possible.</p>
         <h2 className='sixreasonstoiiecheading'>1. We put you first.</h2>
         <p className='sixreasonstoiiecpara'>Need help finding the best course, submitting your university application or guidance for your visa process? Our extensive network of experienced counsellors help you identify and secure the university or college where you can thrive. Your dedicated IDP counsellor will work with you closely, supporting you and your family, throughout your study abroad journey. </p>
         <p className='sixreasonstoiiecpara'>Learn more about our course advice</p>
         <h2 className='sixreasonstoiiecheading'>2. Approachable international education experts.</h2>
         <p className='sixreasonstoiiecpara'>We have more than 700 education counsellors based around the world. Many of our counsellors were international students too, and are ready to do whatever it takes to help you find the right course and country. They're international education experts, ready to go the extra mile and a friendly face who've 'been there and done that' and willing to share what they learned. Our counsellors are the greatest. </p>
         <p className='sixreasonstoiiecpara'>Follow our step-by-step guide to studying abroad</p>
         <h2 className='sixreasonstoiiecheading'>3. Support every step of the way.</h2>
         <p className='sixreasonstoiiecpara'>Our support doesn't end when you receive your university acceptance letter. At IDP, we're dedicated to ensuring you feel supported at every stage of your study journey. We offer a full suite of services, covering English language testing (IELTS), visa assistance and pre-departure advice. Our services are continually evolving to support our students through to graduation and beyond.</p>
         <p className='sixreasonstoiiecpara'>Find out about our student support</p>
         <h2 className='sixreasonstoiiecheading'>4. Proud co-owners of IELTS</h2>
         <p className='sixreasonstoiiecpara'>As a co-owner of IELTS, we can help you book and prepare for your IELTS test. Recognised by more than 10,000 organisations around the world, IELTS is the world’s leading English language test for study, work and migration purposes. Our IELTS network spans in more than 450 test locations across 55 countries. </p>
        
         <p className='sixreasonstoiiecpara'>Know all about the  IELTS</p>
         
         <h2 className='sixreasonstoiiecheadings'>5. Part of a living network</h2>
         <p className='sixreasonstoiiecparas'>We’ll put you in touch with alumni or current students who’ve been where you want to be and are happy to share their stories. IDP is a living network of students, alumni and employers, buzzing across the world. When you arrive in your new country, we’ll connect you with other IDP students through welcome events to help you settle in.</p>
         <h2 className='sixreasonstoiiecheadings'>6. Let’s make it happen </h2>
         <p className='sixreasonstoiiecparas'>If you've been thinking about your study abroad options, let’s work together to find your best country, university and course. Book an appointment with one of our teams, so we can start to plan your journey from where you are today, to where you want to be.</p>
         <YourNextStep></YourNextStep>
         <Footer></Footer>
        </div>

    )
}

export default SixReasonstoIIEC ;