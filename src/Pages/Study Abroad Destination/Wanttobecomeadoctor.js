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
          <ul >
          <li className='wanttobecomeadoctorparali'>High quality education with best in the world facilities.
</li><br/>
          <li className='wanttobecomeadoctorparali'>Follows USA/American education pattern.
</li><br/>
          <li className='wanttobecomeadoctorparali'>65% fees lesser than private medical colleges in India.</li><br/>
          <li className='wanttobecomeadoctorparali'>Medium of Instruction is English.</li><br/>
          <li className='wanttobecomeadoctorparali'>Indian food available.
</li><br/>
          <li className='wanttobecomeadoctorparali'>Over 20,000 foreign students enrolled. </li>
          </ul>

          <h1 className='wanttobecomeadoctormainhead'>KYRGYZSTAN</h1>
          <ul className='wanttobecomeadoctorpara'>
              <li>	Renowned for medical studies in central Asia.
</li><br/>
              <li>Medium of Instruction is English.
</li><br/>
              <li>Lesser fees compared to private medical colleges in India.</li><br/>
              <li>Has Produced many doctors from India.
</li><br/>
              <li>Higher Job placement opportunity.
</li><br/>
              <li>Location Significance closer to China and Russia   provides opportunity to      perform in those countries.
</li><br/>
              <li>Student Mobility worldwide. </li>
          </ul><br/><br/>
         <h1 className='wanttobecomeadoctormainhead'>Ukraine</h1>
         <ul className='wanttobecomeadoctorpara'>
             <li >Has some of the oldest universities around the world.
</li><br/>
             <li>Well experienced Professors.
</li><br/>
             <li>Medium of Instruction is English.
</li><br/>
             <li>Location Significance much closer to the European Union with opportunities in EU in the future.
</li><br/>
             <li>Safe country with very less crime rate registered.
</li><br/>
             <li>Lesser fees compared to private medical colleges in India. </li>
         </ul><br/><br/>

         <h1 className='wanttobecomeadoctormainhead'>Georgia</h1>
         <ul className='wanttobecomeadoctorpara'>
             <li>Superb education facilities with necessary practical training
</li><br/>
             <li>
The fees structure of the medical universities is much lower compared to Indian Private colleges.
</li><br/>
             <li>Low cost of living.
</li><br/>
             <li>Easy availability of Indian food
</li><br/>
             <li>100% visa approval
</li><br/>
             <li>The country offers rewarding career opportunities to medical graduates.
</li><br/>
             <li>Safe and peaceful atmosphere for studies.
</li><br/>
             <li>Instruction in English for the international medical candidates </li>
         </ul>


<div className='yournextdiv'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default WanttoBecomeaDoctor ;  