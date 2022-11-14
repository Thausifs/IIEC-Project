import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';


const  LatestStudyAbroad =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
            <p className='mainhead'>Latest Study Abroad Updates</p>
            <p className='pagebold'>IDP will always be there to help you realise your dreams. We are in this together.</p>
            <p className='pagepara'>International education is a dream worth having and so we’re making all efforts to make sure you keep updated with all the latest information about your favourite study destinations. Here’s all you need to know!</p>
            <div className='lateststudaybuttons '>   <button className='buttonsone'>Australia</button>
             <button className='buttonsone '>Canada</button>
             <button className='buttonsone'>UK</button>
             <button className='buttonsone'>US</button>
             <button className='buttonsone'>New zealand</button>
             <button className='buttonsone'>Ireland</button></div>
            <p className='pagebold'>Free  study abroad counselling 
</p> 
            <p className='pagepara'>As always, all our counselling sessions are free, and we are committed to ensuring that you have access to the right information, support, and care. You can either visit your nearest IDP branch or schedule a free session online.  </p>
            <button className='buttonstwo' >Book my virtual counselling session</button>
             <p className='pagebold'>Study abroad virtual fairs </p>
        
             <p className='pagepara'>You can join our virtual fairs using your mobile phones, desktops, or laptops. These events offer free online pre-counselling with our international education experts, one-on-one interaction with representatives of top institutions and an opportunity to apply on-the-spot to your desired institution. You can also discuss your scholarship and internship options, get all your study abroad queries answered and avail application fee waivers too.</p>
             <button className='buttonsthree'>Show me all virtual events</button>
             <p className='pagebold'>International English Language Testing System (IELTS) 
</p>
             <p className='pagepara'>While you are home, we want to ensure your IELTS test preparation is not affected, and hence, here are a bunch of resources to help you ace your test. Go ahead, use these free resources to get a higher band in your IELTS test.  </p>
 </div>
         
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon '>
           <table className='tabledivlatest'>
            <tr>
    <th>Free practice tests </th>
    <th>Free 30-day prep course </th>
    <th>Familiarisation tests </th>
    <th>Videos from experts and top scorers </th>
  </tr>


  <tr className='trdashedlatest'>
    <th>While at home, you can practice mock tests to experience how questions in a real test would be like.</th>
    <th>This is a free course for those registered and covers all four skills – Listening, Reading, Writing and Speaking. This program helps you prepare for the entire test or you can simply focus on your weakest IELTS skill.</th>
    <th>It always better to go well-prepared. Familiarise yourself with the test format so you know what to expect on the test day.</th>
    <th>Our YouTube channel is full of videos by experts on tips to improve your IELTS score. You can also listen to experiences of other test takers and know what helped them score a high band.</th>
  </tr>
                </table>
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
export default LatestStudyAbroad ;

