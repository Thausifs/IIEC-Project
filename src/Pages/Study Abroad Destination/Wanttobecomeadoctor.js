import React from 'react';
import "../../Asserts/Css/Pages/wanttobecomeadoctor.css";
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Navbar from '../../Components/navbar';
import StudyAbroad from '../../Components/StudyAbroad';
import YourNextStep from '../../Components/YourNextStep';



const WanttoBecomeaDoctor = ()=>{

    return (
          <div className='wanttobecomeadoctorpage'>
           <Header></Header>
           <Navbar></Navbar>
         <div className='wanttobecomeadoctorstd'>  <StudyAbroad></StudyAbroad></div>
           <h1 className='wanttobecomeadoctormainhead'>Want to become a doctor ?</h1>
           <p className='wanttobecomeadoctorpara'>Stethoscope around your neck and a white coat on your shoulder is just a click away.
Register with IIEC to register your future in safe hands.</p>
          <p className='wanttobecomeadoctorpara'>If you are reading this then you are already writing your dream as a doctor. IIEC offers you the opportunity to study MBBS abroad with a hassle free admission process. There are a lot of opportunities waiting for you around the globe, you knock them and we open it to you.</p>
          <h2 className='wanttobecomeadoctorheading'>Philippines</h2>
          <div className='wanttobecomeadoctorpara'>
          <p className='wanttobecomeadoctorparali'>High quality education with best in the world facilities.
</p>
          <p className='wanttobecomeadoctorparali'>Follows USA/American education pattern.
</p>
          <p className='wanttobecomeadoctorparali'>65% fees lesser than private medical colleges in India.</p>
          <p className='wanttobecomeadoctorparali'>Medium of Instruction is English.</p>
          <p className='wanttobecomeadoctorparali'>Indian food available.
</p>
          <p className='wanttobecomeadoctorparali'>Over 20,000 foreign students enrolled. </p>
          </div>

          <h1 className='wanttobecomeadoctormainhead'>KYRGYZSTAN</h1>
          <div className='wanttobecomeadoctorpara'>
              <p>	Renowned for medical studies in central Asia.
</p>
              <p>Medium of Instruction is English.
</p>
              <p>Lesser fees compared to private medical colleges in India.</p>
              <p>Has Produced many doctors from India.
</p>
              <p>Higher Job placement opportunity.
</p>
              <p>Location Significance closer to China and Russia   provides opportunity to      perform in those countries.
</p>
              <p>Student Mobility worldwide. </p>
          </div>
         <h1 className='wanttobecomeadoctormainhead'>Ukraine</h1>
         <div className='wanttobecomeadoctorpara'>
             <p >Has some of the oldest universities around the world.
</p>
             <p>Well experienced Professors.
</p>
             <p>Medium of Instruction is English.
</p>
             <p>Location Significance much closer to the European Union with opportunities in EU in the future.
</p>
             <p>Safe country with very less crime rate registered.
</p>
             <p>Lesser fees compared to private medical colleges in India. </p>
         </div>

         <h1 className='wanttobecomeadoctormainhead'>Georgia</h1>
         <div className='wanttobecomeadoctorpara'>
             <p>Superb education facilities with necessary practical training
</p>
             <p>
The fees structure of the medical universities is much lower compared to Indian Private colleges.
</p>
             <p>Low cost of living.
</p>
             <p>Easy availability of Indian food
</p>
             <p>100% visa approval
</p>
             <p>The country offers rewarding career opportunities to medical graduates.
</p>
             <p>Safe and peaceful atmosphere for studies.
</p>
             <p>Instruction in English for the international medical candidates </p>
         </div>


<div className='yournextdiv'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default WanttoBecomeaDoctor ;  