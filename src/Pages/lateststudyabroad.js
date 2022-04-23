import React from 'react';
import "../Asserts/Css/Pages/lateststudyabroad.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import YourNextStep from '../Components/YourNextStep';
import StudyAbroad from '../Components/StudyAbroad';
import InterviewguidefortheUSF1StudentVisa from '../Components/InterviewguidefortheUSF1studentvisa'
import USAapplicationtimeline from '../Components/USAapplicationtimeline';

const LatestStudyAbroad = ()=>{
    return (
        <div className='lateststudyabroadpage'>
                 <Header></Header>
            <Navbar></Navbar>
            
           <div className='latestpgstudyabd'> <StudyAbroad></StudyAbroad></div>
            <h2 className='lateststudyabroadheading'>Latest Study Abroad Updates</h2>
            <p className='lateststudyabroadpara'>IDP will always be there to help you realise your dreams. We are in this together.</p>
            <hr className='hrline'></hr>
            <p className='lateststudyabroadpara'>International education is a dream worth having and so we’re making all efforts to make sure you keep updated with all the latest information about your favourite study destinations. Here’s all you need to know!</p>
           <div className='lateststudaybuttons'>   <button className='buttonsone'>Australia</button>
             <button className='buttonsone'>Canada</button>
             <button className='buttonsone'>UK</button>
             <button className='buttonsone'>US</button>
             <button className='buttonsone'>New zealand</button>
             <button className='buttonsone'>Ireland</button></div> 
             <h2 className='lateststudyabroadheading'>Free  study abroad counselling </h2>
             <p className='lateststudyabroadpara'>As always, all our counselling sessions are free, and we are committed to ensuring that you have access to the right information, support, and care. You can either visit your nearest IDP branch or schedule a free session online.</p>
            <button className='buttonstwo' >Book my virtual counselling session</button>
            <h2 className='lateststudyabroadheading'>Study abroad virtual fairs </h2>
            <p className='lateststudyabroadpara'>You can join our virtual fairs using your mobile phones, desktops, or laptops. These events offer free online pre-counselling with our international education experts, one-on-one interaction with representatives of top institutions and an opportunity to apply on-the-spot to your desired institution. You can also discuss your scholarship and internship options, get all your study abroad queries answered and avail application fee waivers too.</p>
            <button className='buttonsthree'>Show me all virtual events</button>
            <h2 className='lateststudyabroadheading'>Social media live sessions</h2>
            <p className='lateststudyabroadpara'>Our study abroad and destination experts frequently hold live insightful sessions on Instagram and Facebook to address your queries. They touch upon the latest international education updates in destination s like Australia, Canada, New Zealand, Ireland, the UK, and the US. </p>
            <p className='lateststudyabroadpara'>You can also benefit from our special institution sessions where we invite representatives to talk about their respective institutions, teaching methodologies and other important information that you might be seeking to make a well-informed decision. </p>
            <h2 className='lateststudyabroadheading'>International English Language Testing System (IELTS) </h2>
            <p className='lateststudyabroadpara'>While you are home, we want to ensure your IELTS test preparation is not affected, and hence, here are a bunch of resources to help you ace your test. Go ahead, use these free resources to get a higher band in your IELTS test. </p>
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
            <Footer></Footer>
           </div>
    )
}


export default LatestStudyAbroad ;