import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  WanttoBecomeaDoctor =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>Want to become a doctor ?</p>
           <p className='pagebold'>Stethoscope around your neck and a white coat on your shoulder is just a click away.
Register with IIEC to register your future in safe hands.</p>
          <p className='pagepara'>If you are reading this then you are already writing your dream as a doctor. IIEC offers you the opportunity to study MBBS abroad with a hassle free admission process. There are a lot of opportunities waiting for you around the globe, you knock them and we open it to you.</p>
          <p className='mainhead'>Philippines</p>
          <ul className='pagepara'>
          <li className=''>High quality education with best in the world facilities.
</li>
          <li className=''>Follows USA/American education pattern.
</li>
          <li className=''>65% fees lesser than private medical colleges in India.</li>
          <li className=''>Medium of Instruction is English.</li>
          <li className=''>Indian food available.
</li>
          <li className=''>Over 20,000 foreign students enrolled. </li>
          </ul>

          <p className='mainhead'>KYRGYZSTAN</p>
          <ul className='pagepara'>
              <li>	Renowned for medical studies in central Asia.
</li>
              <li>Medium of Instruction is English.
</li>
              <li>Lesser fees compared to private medical colleges in India.</li>
              <li>Has Produced many doctors from India.
</li>
              <li>Higher Job placement opportunity.
</li>
              <li>Location Significance closer to China and Russia   provides opportunity to      perform in those countries.
</li>
              <li>Student Mobility worldwide. </li>
          </ul>
         <p className='mainhead'>Ukraine</p>
         <ul className='pagepara'>
             <li >Has some of the oldest universities around the world.
</li>
             <li>Well experienced Professors.
</li>
             <li>Medium of Instruction is English.
</li>
             <li>Location Significance much closer to the European Union with opportunities in EU in the future.
</li>
             <li>Safe country with very less crime rate registered.
</li>
             <li>Lesser fees compared to private medical colleges in India. </li>
         </ul>

         <p className='mainhead'>Georgia</p>
         <ul className='pagepara'>
             <li>Superb education facilities with necessary practical training
</li>
             <li>
The fees structure of the medical universities is much lower compared to Indian Private colleges.
</li>
             <li>Low cost of living.
</li>
             <li>Easy availability of Indian food
</li>
             <li>100% visa approval
</li>
             <li>The country offers rewarding career opportunities to medical graduates.
</li>
             <li>Safe and peaceful atmosphere for studies.
</li>
             <li>Instruction in English for the international medical candidates </li>
               
    


        </ul>
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
export default  WanttoBecomeaDoctor ; 