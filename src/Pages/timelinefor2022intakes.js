import React from 'react';
import "../Asserts/Css/Pages/timelinefor2022intakes.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import YourNextStep from '../Components/YourNextStep';
import StudyAbroad from '../Components/StudyAbroad';
import InterviewguidefortheUSF1StudentVisa from '../Components/InterviewguidefortheUSF1studentvisa'
import USAapplicationtimeline from '../Components/USAapplicationtimeline';


const Timelinefor2022Intakes = ()=>{
    return (
<div className='timelinepage'>
                <Header></Header>
             <Navbar></Navbar>
            <div className='intakespgstudyabroad'><StudyAbroad></StudyAbroad></div> 
             <h1 className='timelinemainhead'>Timeline for 2022 intakes</h1>
             <h2 className='timelineheading'>Wondering when to start your application process?
             Use IDP’s step-by-step guide. </h2>
              <hr className='hrline'></hr>
              <p className='timelinepara' >Understanding the application process for universities and colleges abroad can be confusing since it’s a lot different from the procedure followed in Indian universities. Most international institutions offer two intakes around the months of September and January, while some may also accept a third intake around April or May. However, it is a good idea to discuss your case with an international education expert who can guide you in the best manner.  </p>
              <p className='timelinepara'>It is normal to get confused about when in starting with your application process. So, here’s some help if you are applying for the upcoming 2021-22 intakes.</p>
             <h2 className='timelineheading'>Do your research: 10 to 12 months</h2>
            <ul className='timelineparaul'>
                <li className='timelinepara'> It’s best to start as early as possible. Begin by identifying the course that is most suitable for you – note down your strengths and interests, and search for the courses available as per your current qualifications
</li><br/>  
                <li className='timelinepara'> Visit relevant university websites, look for their application procedures, requirements, deadlines and tuition fee. Get familiar with the available financial aids and scholarship and their applications. In short, keep all your research material ready 

</li><br/>

              <p className='timelinepara'>How to choose the right course</p>
            </ul><br/><br/><br/>
            <h2 className='timelineheading'>Take the standardised tests: 9 to 10 months</h2>
            <ul className='timelineparaul'>
                <li className='timelinepara'>Almost all universities and colleges require scores of an approved English language proficiency test such as the IELTS</li><br/>
                <li className='timelinepara'> Certain programs may also ask for a GRE, GMAT or SAT score. Check for the accepted scores by the institutions you intend to apply to</li><br/>
                <li className='timelinepara'> Start early with the preparation of your required tests
</li><br/>
                <li className='timelinepara'>Keep some buffer time aside in case you have to sit for the test again 
</li>
            </ul>
            <h2 className='timelineheading'>Application Preparation: 7 to 8 months</h2>
            <ul className='timelineparaul'>
                <li className='timelinepara'> Shortlist universities: Once you have the scores with you, you’ll know where you stand. Shortlist universities accordingly. Also consider your preference, budget and location
</li><br/>
                <li className='timelinepara'>    Prepare your application: Start collating all your documents so that you have everything in place within the timeline
</li>
            </ul><br/><br/>
            <p className='timelinepara'> Read more: Documents required for your study abroad application </p>
            <h2 className='timelineheading'>Admission decision: 3 to 4 months</h2>
            <ul className='timelineparaul'>
                <li className='timelinepara' >Once you’ve applied, you’ll receive acceptance mails from the institutions that find you eligible
</li><br/>
               <li className='timelinepara'>Evaluate your options well before responding to acceptance emails. It is a good idea to discuss your options with one of our international education experts at IDP who can guide you to weigh your options in a better manner
</li><br/>
               <li className='timelinepara'>Respond your final acceptance in time as your interview session depends on it .
</li><br/>
               <li className='timelinepara'>Once you receive the final acceptance from the university, take a well-thought decision after discussing with your counsellor and deposit the minimum amount to confirm your admission
</li><br/>
               <li className='timelinepara'>Apply for scholarships (if you are eligible) and other funding options to ease off your finances  
</li>
            </ul><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h2 className='timelineheading'>Visa preparation: 2 to 3 months
</h2>
             <ul className='timelineparaul'>
                 <li className='timelinepara'>Most countries allow you to apply for visa three months in advance from the day of your arrival. Gather all your documents and start with the paperwork. Your IDP counsellor will assist you with the required documentation
</li><br/>
                 <li className='timelinepara'>Apply for your visa well in time to avoid any last-minute delays</li>
             </ul>

             <h2 className='timelineheading'>Pre-departure: 1 to 2 months</h2>
             <ul className='timelineparaul'>
                 <li className='timelinepara'>Make arrangements for your health insurance and accommodation.</li><br/>
                 <li className='timelinepara'>Book your flight tickets beforehand to avoid last-minute hassles. Also, if you delay, the tickets will get more expensive.</li><br/>
                 <li className='timelinepara'>Get yourself an international debit/credit card to help you survive during your initial days</li><br/>
                 <li className='timelinepara'>Gather all the documents and copies you’d need at the time of arrival. Also, start packing so that you’re well-prepared in time</li><br/>
             </ul><br/><br/><br/><br/>
             <p className='timelinepara'>Read more: Your packing checklist when flying abroad</p>
             <p className='timelinepara'>We organise various pre-departure sessions for our students where we brief you about your life in your new destination so that you are fully-equipped and ready for your adventures ahead.</p>
             <div className='bottomdiv'>
               <p className='timelineparadiv'>Note: Given the current COVID-19 situation, there might be some changes in the 2020/2021 intakes. Don’t worry, our international education experts are here to guide you with the latest updates to help you apply to your desired course and institution. Feel free to connect with our experts for a free counselling session and keep posted about the latest COVID- 19 updates. </p> </div>
              <div className='timelinebox'> <InterviewguidefortheUSF1StudentVisa></InterviewguidefortheUSF1StudentVisa>
                <USAapplicationtimeline></USAapplicationtimeline></div>
               <YourNextStep ></YourNextStep>
               <Footer></Footer>
            
         </div>
    )}


    export default Timelinefor2022Intakes ;