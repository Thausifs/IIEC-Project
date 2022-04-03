import React from 'react';
import "../Asserts/Css/Pages/Toefl.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const TOEFL = ()=>{
    return (
       

        <div className='Toeflpage'>
              <Header></Header>
              <Navbar></Navbar>
           <div className='Toeflstd'>  <StudyAbroad></StudyAbroad></div> 
               <h1 className='Toeflmainhead'>TOEFL:</h1>
               <h2 className='Toeflheading'>TOEFL COACHING AND TRAINING @ IIEC</h2>
               <p className='Toeflpara'>TOEFL course offers extensive coverage on all topics. Our trainers will examine key fundamentals, the right approach, effective solving technique and test taking strategies. No stone will be left unturned! Expect plenty of interaction and practice from the leading TOEFL specialist.
</p>
               <p className='Toeflpara'>
We are so confident of our TOEFL preparation programs that we are guarantee that your official TOEFL score will increase by at least 20 points after going through our proven programs.
</p>

<p className='Toeflpara'>
Team of professional trainers with necessary professional experience and academic qualification would train you. Our full time, highly-trained test preparation specialists have also achieved extremely high TOEFL scores, are immensely popular with their students and have stellar track records in producing top scoring students.
</p>

<p className='Toeflpara'>
You will receive all the study materials that you will need to ace your TOEFL access extensive notes, cheat sheets, practice questions, mock test and vocabulary lists, our learning systems are constantly updated by our highly experienced in-house R&D team. So you can be assured that you will be in touch with the latest techniques and testing trend. We maintain a well-stocked resource library that our students have full access to.</p>


<div className='toeflyns'></div><YourNextStep></YourNextStep>
           <Footer></Footer>
              </div>
    )
}

export default TOEFL ;