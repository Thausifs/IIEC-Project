import React from 'react';
import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';


const  GuidetoStudyAbroad =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
            <p className='mainhead'>Step-by-step guide to studying overseas</p>
            <p className='pagepara'>With close to 50 years’ experience and more than 450,000 successful student placements around the world, we know what it takes to find a good match and set you up for success.</p>
            <p className='pagebold'>1. Research well</p>
            <p className='pagepara'>Do your research! Investigate courses, universities and their locations. Look up on the teaching modules, research opportunities, campus life and employment prospects before you narrow down your selection. You can ask your friends and family or reach out to the alumni of universities you are interested in for a wider perspective. Use Facebook or LinkedIn to reach out to them more effectively. Also, do remember to include your budget and available scholarships as a part of your research.</p>
            <p className='pagepara'>We understand researching can be an exhausting process, but we can help here. Come to your nearest IDP office for a free counselling session and we’ll guide you to your career path.</p>
            <p className='pagebold'>Start your search!</p>
             <p className='pagebold'>2. Speak with one of our IDP counsellors </p>   
             <p className='pagepara'>When you’re ready, make an appointment with an IDP counsellor. Our counsellors are professionally certified and many have been international students themselves. They’re a friendly face with the wealth of first-hand professional and personal experience from different study locations all over the world.</p>
             <p className='pagepara'>Bring your wish list and course preferences along with you to your appointment as a starting point. Your counsellor will work through all the big and small details to ensure the best possible fit between you, your future university and your area of study.</p>
             <p className='pagebold'>Set up a free appointment!</p>
             <p className='pagebold'>3. Make your application </p>
             <p className='pagepara'>After you’ve chosen your course and university, it’s time to apply.</p>
             <p className='pagepara'>Your IDP counsellor will support your university and course applications. They will personally contact your chosen university or school to smoothen out the process and help improve your chances of acceptance. We take our job very seriously and follow the strictest legal and ethical standards.</p>
             <p className='pagepara'>If you need to take an English test to qualify for your course, practice hard to get good grades. In a test such as IELTS, it is important to be grammatically sound besides having a wide range of vocabulary.</p>
             <p className='pagepara'>Know all about IELTS.</p>
 </div>
         
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
    <p className='mainhead' >4. Offer acceptance</p>
         <p className='pagepara' >Once your application is received, the university or school will assess it thoroughly and notify you of the verdict. It can take up to a few weeks (or longer for postgraduate levels) for your application to be processed.</p>
         <p className='pagepara' >If your application is successfully selected, you’ll receive a letter of offer and an acceptance form. Before you accept the offer, go through it carefully with your counsellor to check for any conditions that may apply.</p>
         <p className='pagepara' >If you are accepted for more than one course or school, your counsellor will help you decide on the best option for you.</p>
         <p className='mainhead'>5. Student visa</p>
         <p className='pagepara'>After accepting the letter of offer, the most important task is to apply for your student visa. Since each country has its own set of formalities to fulfill, your IDP counsellor will guide you through the visa application process and help prepare the documents needed for your submission.</p>
         <p className='mainhead'>Here’s a student visa checklist!</p>
         <p className='pagepara'>Here’s are the top most common documents you would require for your student visa. For a detailed document list as per your chosen country, discuss with your IDP counsellor.</p>
         <ul className='pagepara unorderedlist'>
            <li>Evidence of enrolment in a recognised educational institution</li>
            <li>Residence permit applications (it varies by the country)</li>
            <li>Evidence of language certification (if needed)</li>
            <li>Evidence of parental/guardian consent (if under 18)</li>
            <li>Evidence of funding (your capacity to cover the cost involved in studying and sustaining abroad)</li>
            <li>Passport size photographs</li>
            <li>Copy of the current passport</li>
            <li>Vaccination results (if required, it varies by the country)</li>
            </ul>
         <p className='mainhead'>Check your visa requirements!</p>
         <p className='mainhead'>6. Figure out where you’ll live </p>
         <p className='pagepara'>Unless you have been offered an on-campus accommodation, you’ll have to figure out where to live when studying abroad. You can look for rooms on rent, homestay or find a local host. The cost will vary from city to city. If you opt to rent an apartment, you will have to additionally pay for utility bills like electricity, internet, water usage and also tenant’s insurance (in some areas of housing).</p>
         <p className='mainhead'>7. Book your flights in time</p>
         <p className='pagepara'>Unless you have been offered an on-campus accommodation, you’ll have to figure out where to live when studying abroad. You can look for rooms on rent, homestay or find a local host. The cost will vary from city to city. If you opt to rent an apartment, you will have to additionally pay for utility bills like electricity, internet, water usage and also tenant’s insurance (in some areas of housing).</p>
         <p className='mainhead'>8. Ready, set, go</p>
         <p className='pagepara'>Congratulations – you’re off to a huge adventure. There will be many minute, yet important to-do things you need to consider before flying overseas for which your IDP counsellor will guide your way. This will include matters such as exchanging money, insurance, accommodation, SIM cards, opening a bank account, country rules and adapting to new culture. We also host regular pre-departure sessions throughout the year to help prepare you for student life in your new country.</p>
         <p className='pagepara'>Find out more about our pre-departure support.</p>
         <p className='pagepara'>Being organised when you are packing will save you a lot of time and hassle in your new country. To make it easier, we have collated an extensive list of what to pack and what not for you. You can download it here.</p>
         </div>
         <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
         <Card  icon="Studyabroadintakes" title="Study abroad intakes" content="Did you know academic year in universities abroad differ from the ones in India? Most universities offer two major intakes for the students aspiring to study abroad – Spring intake and fall intake. Let’s help you know all about it."></Card>
              <Card  icon="timelinefor2022intakes" title="Timeline for 2022 intakes " content="Here is a list of resources for parents to support and prepare your child for studying abroad."></Card>
         </div>
         <YourNextStep/>
    <Footer/>

   </div>


  )
} 
export default GuidetoStudyAbroad

