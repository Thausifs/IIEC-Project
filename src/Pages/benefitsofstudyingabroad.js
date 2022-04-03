import React from 'react';
import "../Asserts/Css/Pages/benefitsofstudyingabroad.css";
import StudyAbroad from '../Components/StudyAbroad';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import YourNextStep from '../Components/YourNextStep';
import CanadaUniversityrankings  from '../Components/CanadaUniversityrankings';
import Timelinefor2022intakes  from '../Components/Timelinefor2022intakes';


const BenefitsofStudyingAbroad =()=>{
    return(
         <div className='benefitsofstudyingabdpage'>
             <Header></Header>
             <Navbar></Navbar>
             <div className='benefitspagestd'> <StudyAbroad></StudyAbroad></div> 
             <h2 className='benefitsofstudyingabdheading'>BENEFITS OF STUDYING ABROAD </h2>
          
             <p className='guidetopara'>Studying abroad is more than just education, it’s a holistic experience</p>
             <p className='guidetopara'>Earning an international degree is not only about expanding your career and personal horizons but also about having an experience of a lifetime. Here are some of the reasons why you should consider studying internationally:</p>
             <h2 className='benefitsofstudyingabdheading'>1. Diverse course options to choose from </h2>
             <p className='guidetopara'>Studying internationally offers a wider variety of courses, some also including research options and skill-based training for students. This helps expand your horizons and opens up a world of new educational opportunities. Not only this, certain programs abroad also allow you to take different courses at the same time. So you can pursue your interest in literature whilst studying mathematics as your major. IDP partners with more than 700 top universities and schools across the world; whatever you are looking for – from a course that is highly ranked for research to a unique study environment – we can help find the best fit for you.</p>
             <h2 className='benefitsofstudyingabdheading'>2. Makes you more employable </h2>
             <p className='guidetopara'>Graduates who’ve chosen to study internationally are highly sought after by employers. Pursuing a degree overseas signals employers that you have courage, flexibility, cultural awareness and an understanding of how other people work and think. This experience puts you ahead of the pack when it comes to internships and job applications</p>
             <h2 className='benefitsofstudyingabdheading'>3. From learning a language to living a language</h2>
             <p className='guidetopara'>Studies have shown that immersion is the best way to become fluent in another language and understand a new culture. Since you'll be interacting with English language speakers every day, it would be easier to grasp the language in relevant cultural context.</p>
             <p className='guidetopara'>Living, studying and working in English might seem to be challenging at first, but you’ll be surprised at how quickly it becomes your second nature. Communicating confidently in English will help you to excel in your studies and make new friends from other parts of the world who may even become professional connections down the road.</p>
              <h2 className='benefitsofstudyingabdheading'>4. Brings you international exposure</h2>
              <p className='guidetopara'>Studying abroad helps you learn new approaches to handle different situations, manage time between your studies and part-time jobs, experience international methods of instructing and deal with a cosmopolitan crowd. This in turn also helps to increase your acumen on the subject and life, in general.</p>
              <h2 className='benefitsofstudyingabdheading'>5. You gain a global perspective</h2>
              <p className='guidetopara'>Students who study abroad develop a well-informed mindset and wider perspective towards other cultures and people. Whether you’re studying science, politics or finance, being able to think from a multinational perspective will help you face modern challenges and come up with innovative solutions in future. You will graduate with a richer set of experiences that will allow you to think more openly and creatively. As you learn to view the world through different lenses, you’ll also learn new things about your own country and culture.</p>
              <h2 className='benefitsofstudyingabdheading'>6. An experience of a lifetime</h2>
              <p className='guidetoparas'>Your study abroad experience doesn’t end at the campus gates. During weekends and holidays, you’ll have the chance to travel to tourist hotspots or get off the beaten track in your chosen country. That means you will be able to experience geographies different that from India and come back with interesting stories for your friends and family. You never know you might end up finding an activity that you enjoy doing and make a career in it.</p>
              <p className='guidetoparas'>Benefits of pursuing an undergraduate degree abroad</p>
              <p className='guidetoparas'>As a student just out of school, it gives you an edge because:</p>
              <p className='guidetoparas'>  You are exposed to an international way of learning and working at an early stage
    Your understanding of various cultures is nourished
    Widens your scope of career options
                 </p>
                 <h2 className='benefitsofstudyingabdheading'>Benefits of pursuing a post graduate degree abroad</h2>
                 <p className='guidetoparas'>This reinstates that you are committed to:</p>
                  <p className='guidetoparas'> Enhance your technical skills
    Give your CV an edge over counterparts
    Develop your social and professional network.
                    </p>
                  <div className='benefitsofstudybox'> <Timelinefor2022intakes></Timelinefor2022intakes>
<CanadaUniversityrankings></CanadaUniversityrankings></div> 
<YourNextStep></YourNextStep>
<Footer></Footer>
         </div>


    )}


    export default BenefitsofStudyingAbroad;