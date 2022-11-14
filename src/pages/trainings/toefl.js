import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  TOEFL =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <h1 className='mainhead'>TOEFL:</h1>              
               <h2 className='mainhead'>TOEFL COACHING AND TRAINING @ IIEC</h2>
               <p className='pagepara'>TOEFL course offers extensive coverage on all topics. Our trainers will examine key fundamentals, the right approach, effective solving technique and test taking strategies. No stone will be left unturned! Expect plenty of interaction and practice from the leading TOEFL specialist.
</p>
               <p className='pagepara'>
We are so confident of our TOEFL preparation programs that we are guarantee that your official TOEFL score will increase by at least 20 points after going through our proven programs.
</p>

<p className='pagepara'>
Team of professional trainers with necessary professional experience and academic qualification would train you. Our full time, highly-trained test preparation specialists have also achieved extremely high TOEFL scores, are immensely popular with their students and have stellar track records in producing top scoring students.
</p>

<p className='pagepara'>
You will receive all the study materials that you will need to ace your TOEFL access extensive notes, cheat sheets, practice questions, mock test and vocabulary lists, our learning systems are constantly updated by our highly experienced in-house R&D team. So you can be assured that you will be in touch with the latest techniques and testing trend. We maintain a well-stocked resource library that our students have full access to.</p>


        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
   
        </div>
        <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
          </div>
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default TOEFL ; 