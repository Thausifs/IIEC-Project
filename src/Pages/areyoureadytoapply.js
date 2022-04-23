import React from 'react';
import "../Asserts/Css/Pages/areyoureadytoapply.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import YourNextStep from '../Components/YourNextStep';
import StudyAbroad from '../Components/StudyAbroad';

import CometoourFreeCounselling from '../Components/cometoourfreecounselling';
import Timelinefor2022intakes from '../Components/Timelinefor2022intakes';

CometoourFreeCounselling

const AreYouReadytoApply = ()=>{
    return (
           <div className='areyoureadypage'>
                <Header></Header>
             <Navbar></Navbar>
             <div className='areyoreadystd'><StudyAbroad></StudyAbroad></div>
             <h1 className='areyoureadymainhead'>Are you ready to apply?</h1>
              <p className='areyoureadyparafirst'>Find out if you are really ready to study abroad.</p>
              <hr className='hrline'></hr>
              
              <p className='areyoureadypara'>Studying abroad is a life-changing decision – experiences like exploring the largest library in London, studying in a country with students from over 90 countries, taking a study tour to the Blarney Castle of Ireland or an engagement activity in Whanganui don’t happens every day. But for us, it is our everyday. We know what suits Indian students the best – a perfect blend of quality education, life experiences, work opportunities and good return of investment</p>
              <p className='areyoureadypara'>
Here are the answers to some of the most common questions we get from students just like you.</p>
             <h2 className='areyoureadyheading'>Are you really ready to study abroad?
</h2>
           <p className='areyoureadypara'>
Studying abroad is a big step to take. All students get nervous about starting a new course but for international students it also means getting used to a new country, new city and potentially another language or accent.
</p>
<p className='areyoureadypara'>However, it's a great idea to talk openly about any concerns you have before applying with your family as well as one of our counsellors so that you are confident and ready to take the next step. Talking to friends or teachers who have studied abroad will also give you some valuable tips and real-life advice to consider.
</p>
<h2 className='areyoureadyheading'>
What are the services provided by IIEC?
</h2>
<p className='areyoureadypara'>Students like you come to us for advice and help on everything – from choosing a study country, university or course to course application assistance. We also provide advice on accommodation options, visa applications and even link you up with other support partners such as education loan providers, property rental agents and student/alumni associations.
</p>
<h2 className='areyoureadyheading'>Which countries can I choose from?</h2>
<p className='areyoureadypara'>We represent universities, schools and colleges in Australia, Canada, New Zealand, and the United Kingdom, Ireland and the United States of America.
</p>
<h2 className='areyoureadyheading'>How do I apply?</h2>
<p className='areyoureadypara'>Our experienced counsellors will help you compile your application and certify the supporting documents. Your counsellor will then submit your application on your behalf to your university or school of choice.</p>
<h2 className='areyoureadyheading'>Do I need to make an appointment to meet an IDP counsellor?</h2>
<p className='areyoureadypara'>You can schedule an appointment with one of our counsellors by completing our online enquiry form. We also welcome walk-ins from Monday to Saturday between 9.00 am and 5.30 pm.</p>
<h2 className='areyoureadyheading'>What certificates and other documents should I bring to my appointment?</h2>
<p className='areyoureadypara'>You’ll need to bring documents to verify your identity (valid passport) and your educational certificates – high school, intermediate and graduation (if applicable). This will help your counsellor streamline your application.
</p>
<h2 className='areyoureadyheadings'>Which universities and colleges do you partner with?
</h2>
<p className='areyoureadyparas'>IDP represents more than 700 universities and colleges globally, which is the largest institution network available in India. You can apply to any of the 38 Australian public universities (including all Group of Eight universities), all eight New Zealand universities, a majority of UK universities (including the Russell Group), reputed universities in Ireland, American universities and college, and many quality Canadian institutions.
</p>
<h2 className='areyoureadyheadings'>Do I have to pay for a UCAS application for UK universities?
</h2>
<p className='areyoureadyparas'>You can avoid paying any UCAS application fees when you apply for a course in the UK via IDP. Discuss this with your IDP counsellor.
</p>
<h2 className='areyoureadyheadings'>How long do applications take to process?
</h2>
<p className='areyoureadyparas'>It takes four to six weeks to process a course application. It may take longer if it is during peak period or a holiday season. We know this can feel like a really long wait! We'll keep communicating with you during this time to help you keep calm and hope for the best.
</p>
<h2 className='areyoureadyheadings'>
How much does IDP charge for its services?
</h2>
<p className='areyoureadyparas'>IIEC doesn’t charge any agent fees for applications, so you’ll get all the assistance at no cost. Many universities and colleges also waive their application fees when you apply through us.
</p>
<h2 className='areyoureadyheadings'>Where is the IDP India office?</h2>
<p className='areyoureadyparas'>Students can walk in to any of our 38 offices in India. Find the details of your nearest IDP office here</p>
<div className='areyoureadybox'> <CometoourFreeCounselling/>
                <Timelinefor2022intakes/></div>
<div className='areyoureadyYNS'><YourNextStep></YourNextStep></div>
<Footer></Footer>
           </div>

    )}
    export default AreYouReadytoApply ;
