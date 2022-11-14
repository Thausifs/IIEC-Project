import React from 'react';
import Navbar from '../../components/navbar';
// import Card from '../../components/card.js';
import Header from '../../components/header';
import StudyAbroad from '../../components/studyabroad';
import "../../styles/pagescss/studyabroadpg/studyabroadbenefitspg.css";
import Footer from '../../components/footer';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';


const StudyAbroadBenefits = () => {
    return (
        <div className="page">
            <Header/>
            <Navbar/>
            <div className='dis_flex'>
        <div className="flex-container">
            <p className='mainhead'>Are you ready to apply? </p>
            <p className='pagepara'>Find out if you are really ready to study abroad.</p>
            <p className='pagepara'>studying abroad is a life-changing decision – experiences like exploring the largest library in London, studying in a country with students from over 90 countries, taking a study tour to the Blarney Castle of Ireland or an engagement activity in Whanganui don’t happens every day. But for us, it is our everyday. We know what suits Indian students the best – a perfect blend of quality education, life experiences, work opportunities and good return of investment</p>
            <p className='pagepara'>Here are the answers to some of the most common questions we get from students just like you.</p>
            <p className='mainhead'>Are you really ready to study abroad?</p>
            <p className='pagepara'>Studying abroad is a big step to take. All students get nervous about starting a new course but for international students it also means getting used to a new country, new city and potentially another language or accent.</p>
            <p className='pagepara'>However, it's a great idea to talk openly about any concerns you have before applying with your family as well as one of our counsellors so that you are confident and ready to take the next step. Talking to friends or teachers who have studied abroad will also give you some valuable tips and real-life advice to consider.</p>
            <p className='mainhead'>What are the services provided by IIEC?</p>
            <p className='pagepara'>Students like you come to us for advice and help on everything – from choosing a study country, university or course to course application assistance. We also provide advice on accommodation options, visa applications and even link you up with other support partners such as education loan providers, property rental agents and student/alumni associations.</p>
            <p className='mainhead'>Which countries can I choose from?</p>
            <p className='pagepara'>We represent universities, schools and colleges in Australia, Canada, New Zealand, and the United Kingdom, Ireland and the United States of America.</p>
            <p className='mainhead'>How do I apply?</p>
            <p className='pagepara'>Our experienced counsellors will help you compile your application and certify the supporting documents. Your counsellor will then submit your application on your behalf to your university or school of choice.</p>
            <p className='mainhead'>Do I need to make an appointment to meet an IDP counsellor?</p>
            <p className='pagepara'>You can schedule an appointment with one of our counsellors by completing our online enquiry form. We also welcome walk-ins from Monday to Saturday between 9.00 am and 5.30 pm.</p>
            
        </div>
        <div className="flex-container">
            <StudyAbroad hgt="120vw"/>
        </div>
        </div>
        <div className='pagebtmcon'>
        <p className='mainhead'>What certificates and other documents should I bring to my appointment?</p>
            <p className='pagepara'>You’ll need to bring documents to verify your identity (valid passport) and your educational certificates – high school, intermediate and graduation (if applicable). This will help your counsellor streamline your application.</p>
            <p className='mainhead'>Which universities and colleges do you partner with?</p>
            <p className='pagepara'>IDP represents more than 700 universities and colleges globally, which is the largest institution network available in India. You can apply to any of the 38 Australian public universities (including all Group of Eight universities), all eight New Zealand universities, a majority of UK universities (including the Russell Group), reputed universities in Ireland, American universities and college, and many quality Canadian institutions.</p>
            <p className='mainhead'>Do I have to pay for a UCAS application for UK universities?</p>
            <p className='pagepara'>You can avoid paying any UCAS application fees when you apply for a course in the UK via IDP. Discuss this with your IDP counsellor.</p>
            <p className='mainhead'>How long do applications take to process?</p>
            <p className='pagepara'>It takes four to six weeks to process a course application. It may take longer if it is during peak period or a holiday season. We know this can feel like a really long wait! We'll keep communicating with you during this time to help you keep calm and hope for the best.</p>
            <p className='mainhead'>How much does IDP charge for its services?</p>
            <p className='pagepara'>IIEC doesn’t charge any agent fees for applications, so you’ll get all the assistance at no cost. Many universities and colleges also waive their application fees when you apply through us.</p>
            <p className='mainhead'>Where is the IDP India office?</p>
            <p className='pagepara'>Students can walk in to any of our 38 offices in India. Find the details of your nearest IDP office here</p>
        </div>
        <div  className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
        <Card  icon="timelinefor2022intakes" title="Timeline for 2022 intakes" content="Plan ahead to be study ready. We have mapped an indicative timeline for you to get started and live your study abroad dreams."></Card>
              <Card  icon="canadauniversity" title="Canada University rankings" content="Let’s simply it for you. Here’s a step-by-step guide to help you get started with your journey to studying abroad."></Card>
        </div>
        <YourNextStep/>
            <Footer/>
         </div>   

    )
}


export default StudyAbroadBenefits ;