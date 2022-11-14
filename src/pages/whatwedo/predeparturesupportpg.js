import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';

import YourNextStep from '../../components/yournextstep';



const  Predeparturesupport =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
               <p className="mainhead">Pre-departure support</p>
               <p className="pagebold">Anxious about settling in a new country? Don’t be, we’re here to help</p>
               <p className="pagepara">You are finally off to a great new adventure, congratulations! We know it seems a little daunting but trust us, the best is yet to come. And we are here to support you all the way.</p>
               <p className="pagepara">To help you prepare for life in your new country, we host a number of pre-departure sessions throughout the year. Come to one, and we’ll make all your apprehensions ward away.  </p>
               <p className="pageparabold">From visiting to belonging</p>
               <p className="pagepara">Our pre-departure sessions will help you navigate personal and cultural growth opportunities while you’re abroad.</p>
               <p className="pageparabold">Here’s advice we’ll give you at pre-departure sessions</p>
               <p className="pageparabold">What to pack?</p>
               <p className="pagepara">Being organised when you are packing will save you a lot of time and hassle in your new country. That’s why we help you with a ready checklist to refer before leaving India.</p>

               <p className="pageparabold">Arrival in a new country</p>
               <p className="pagepara">So you just landed in the new host city, now what? In our sessions, we’ll guide you about the immigration checks, customs control and how to reach your campus from the airport conveniently.</p>
               <p className="pageparabold">Banking and foreign exchange.</p>

               <p className="pagepara">One of the first things on your to-do list when you arrive in your new study country will be setting up a bank account. Having a local bank account will ensure that you have easy access to your money to pay for your accommodation, tuition fees and living expenses. It also allows your employer to deposit your remuneration into your account if you choose to work during or post studies. We’ll help you with the steps you need to take in order to get started with your finances in a new city</p>
               <p className="pageparabold">Insights into the local culture</p>
               <p className="pagepara">It helps to have some knowledge of the local culture and customs before arriving in your study country. This eases your transition into the community and helps you interact with your new classmates more effectively. Half of the fun of going abroad is learning about the things people from other cultures do differently. We’ll tell you all about the culture, activities, life as a local, and even some colloquial terms that’ll come handy in your new city.</p>
               <p className="pageparabold">Student life in your new country</p>
               <p className="pagepara">When you study abroad, you’ll need to adjust to a new learning environment along with getting used to new cultural norms as a student. Our sessions will brief you about different learning styles, classroom environments and expectations.</p>
               <p className="pageparabold">Culture shock.</p>

               <p className="pagepara">Culture shock is common when you move to a completely different culture than yours. Since it plays an important role in adjusting to your study country, we’ll discuss the various stages (honeymoon, frustration, adjustment and acceptance) in our sessions. We would also guide you with some simple techniques on how to recognise if you are undergoing culture shock, the stage you are in and how to deal with it.</p>

               <p className="pageparabold">Support and well-being in your new country.</p>
               <p className="pagepara">
Whether it’s academic support, English language help or visa advice, we outline some of the practical support that’s available to international students.
</p>
               
    


        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
    <p className="pageparabold">Working while you study and advice on internships.</p>
               <p className="pagepara">Part-time jobs can help complement your study and living experience. We’ll discuss how to stay within the rules of your student visa and help you with some tips on finding a good student job</p>
               <p className="pageparabold">Dealing with homesickness</p>
               <p className="pagepara">We know it’s hard to stay away from family and friends, but we’ll help you with some tips on how to deal with the feeling of homesickness when you arrive in your study country.</p>

               <p className="pageparabold">Brush up on legalities.</p>
               <p className="pagepara">
We’ll brief you on the dos and don’ts of your study country and what rights you have as an international student.
…plus, some practical guidance and a lot of support.
</p>
               <p className="pageparabold">A network of advice.</p>
               <p className="pagepara">You will also have the opportunity to ask questions from IDP alumni and network with current and future students just like you.</p>
        </div>
   
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default Predeparturesupport 