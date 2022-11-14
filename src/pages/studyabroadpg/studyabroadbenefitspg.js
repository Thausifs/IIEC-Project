import React from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card.js';
import Header from '../../components/header';
import StudyAbroad from '../../components/studyabroad';
import "../../styles/pagescss/studyabroadpg/areyoureadytoapplypg.css";
import Footer from '../../components/footer';
import YourNextStep from '../../components/yournextstep';


const AreYouReadytoApply = () => {
    return (
        <div className="page">
            <Header/>
            <Navbar/>
            <div className='dis_flex'>
        <div className="flex-container">
            <p className='mainhead'>Benefits of studying abroad </p>
            <p className='pagepara'>Studying abroad is more than just education, it’s a holistic experience</p>
            <p className='pagepara'>Earning an international degree is not only about expanding your career and personal horizons but also about having an experience of a lifetime. Here are some of the reasons why you should consider studying internationally:</p>
            <p className='mainhead'>1. Diverse course options to choose from </p>
            <p className='pagepara'>Studying internationally offers a wider variety of courses, some also including research options and skill-based training for students. This helps expand your horizons and opens up a world of new educational opportunities. Not only this, certain programs abroad also allow you to take different courses at the same time. So you can pursue your interest in literature whilst studying mathematics as your major. IDP partners with more than 700 top universities and schools across the world; whatever you are looking for – from a course that is highly ranked for research to a unique study environment – we can help find the best fit for you.</p>
            <p className='mainhead'>2. Makes you more employable </p>
            <p className='pagepara'>Graduates who’ve chosen to study internationally are highly sought after by employers. Pursuing a degree overseas signals employers that you have courage, flexibility, cultural awareness and an understanding of how other people work and think. This experience puts you ahead of the pack when it comes to internships and job applications</p>
            <p className='mainhead'>3. From learning a language to living a language</p>
            <p className='pagepara'>Studies have shown that immersion is the best way to become fluent in another language and understand a new culture. Since you'll be interacting with English language speakers every day, it would be easier to grasp the language in relevant cultural context.</p>
            <p className='pagepara'>Living, studying and working in English might seem to be challenging at first, but you’ll be surprised at how quickly it becomes your second nature. Communicating confidently in English will help you to excel in your studies and make new friends from other parts of the world who may even become professional connections down the road.</p>
            <p className='mainhead'>4. Brings you international exposure</p>
            <p className='pagepara'>Studying abroad helps you learn new approaches to handle different situations, manage time between your studies and part-time jobs, experience international methods of instructing and deal with a cosmopolitan crowd. This in turn also helps to increase your acumen on the subject and life, in general.</p>
           
        </div>
        <div className="flex-container">
            <StudyAbroad hgt="120vw"/>
        </div>
        </div>
        <div className='pagebtmcon'>
        <p className='mainhead'>5. You gain a global perspective </p>
            <p className='pagepara'>Students who study abroad develop a well-informed mindset and wider perspective towards other cultures and people. Whether you’re studying science, politics or finance, being able to think from a multinational perspective will help you face modern challenges and come up with innovative solutions in future. You will graduate with a richer set of experiences that will allow you to think more openly and creatively. As you learn to view the world through different lenses, you’ll also learn new things about your own country and culture.</p>
            <p className='mainhead'>6. An experience of a lifetime</p>
            <p className='pagepara'>Your study abroad experience doesn’t end at the campus gates. During weekends and holidays, you’ll have the chance to travel to tourist hotspots or get off the beaten track in your chosen country. That means you will be able to experience geographies different that from India and come back with interesting stories for your friends and family. You never know you might end up finding an activity that you enjoy doing and make a career in it.</p>
            <p className='pagebold pagepara'>Benefits of pursuing an undergraduate degree abroad</p>
            <p className='pagepara'>As a student just out of school, it gives you an edge because:</p>
            <p className='pagepara ml_2'> You are exposed to an international way of learning and working at an early stage</p>
            <p className='pagepara ml_2'> Your understanding of various cultures is nourished</p>
            <p className='pagepara ml_2'> Widens your scope of career options</p>
            <p className='pagebold pagepara'>Benefits of pursuing a post graduate degree abroad</p>
            <p className='pagepara'>This reinstates that you are committed to:</p>
            <p className='pagepara ml_2'>Enhance your technical skills</p>
            <p className='pagepara ml_2'> Give your CV an edge over counterparts</p>
            <p className='pagepara ml_2'>Develop your social and professional network.</p>
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


export default AreYouReadytoApply ;