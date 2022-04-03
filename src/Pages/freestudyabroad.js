import React from 'react';
import "../Asserts/Css/Pages/freestudyabroad.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const FreeStudyAbroad = ()=>{
    return (
        <div className='freestudyabroadpage'>
            <Header></Header>
            <Navbar></Navbar>
           <div className='freestudystd'> <StudyAbroad></StudyAbroad></div>
          <h2 className='freestudyabroadmainhead'>Free study abroad counselling</h2>
           <h2 className='freestudyabroadheading'>Planning a better future? Build it by studying abroad with IIEC.</h2>
           <p className='freestudyabroadpara'>IDP is a global leader in international student services and proud co-owner of the IELTS (International English Language Testing System). We help students study in English speaking countries such as Australia, New Zealand, Canada, Ireland, the UK and the US. We’ve been operating for close to 50 years, creating a huge network of opportunity with offices in 30 countries. Our extensive network of approachable experts helps you identify and secure the right institution.</p>
           <h2 className='freestudyabroadheading'>We don’t charge for counselling and guidance</h2>
           <p className='freestudyabroadpara'>All our counselling sessions are free, and we try to make your process of applying abroad as smooth as possible. We have a team of over 700 experienced counsellors based around the world to help with your university and course selection, application procedure, offer letters, visa process and pre-departure briefings. So far, we have helped over 450,000 students find the right course to pursue in their dream destinations.</p>
           <p className='freestudyabroadpara'>Come, visit us for a free session</p>
           <p className='freestudyabroadpara'>Walk in to any of our 34 offices in India or fill in the enquiry form to book a free appointment. On the day of your appointment, bring your wish list and course preferences as a starting point. Your IDP counsellor will discuss with you in detail, your education background, preferences and budget to help ascertain your possibilities in potential universities.</p>
           <h2 className='freestudyabroadheading'>At IIEC, we support you with</h2>
           <div className='freestudydivone'>
               <p className='freestudyabroadpara'>Unbiased and expert counselling via personal interview</p>
               <p className='freestudyabroadpara'>Assistance in application submission</p>
               <p className='freestudyabroadpara'>Registration and preparation guidance for IELTS</p>
               <p className='freestudyabroadpara'>Guidance on offer letters</p>
               <p className='freestudyabroadpara'>Assistance with health insurance and accommodation</p>
               <p className='freestudyabroadpara'>Welcome events in study country</p>
           </div>
           <div className='freestudydivtwo'>
               <p className='freestudyabroadpara'>Shortlisting of potential schools and universities</p>
               <p className='freestudyabroadpara'>Guidance in writing Statement of Purpose (SOP)</p>
               <p className='freestudyabroadpara'>Guidance on available scholarships and how to apply</p>
               <p className='freestudyabroadpara'>Assistance in visa application</p>
               <p className='freestudyabroadpara'>Regular follow-up and support in person, call and e- mail</p>
               <p className='freestudyabroadpara'>Pre-departure briefing once you’ve received your visa</p>
           </div>
           <p className='freestudyabroadpara'>All our counsellors are professionally certified and many have been international students themselves. Your assigned counsellor will work through all the details and processes to make sure you will have the best possible fit your future university and your area of study.</p>
           <p className='freestudyabroadpara'>How can I book an appointment?</p>
           <p className='freestudyabroadpara'>You may either call us on 1800 102 2233 or walk in to your nearest IDP office in India. You may also book an appointment online.</p>
           <p className='freestudyabroadpara'>Our support does not end with your acceptance letter. We will be there to assist you even after you reach your new country. Come, see us – It’s free!</p>

        <YourNextStep></YourNextStep>
        <Footer></Footer>
        </div>
    )
}

export default FreeStudyAbroad ;