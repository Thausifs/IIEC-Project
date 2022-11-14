import React from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card.js';
import Header from '../../components/header';
import StudyAbroad from '../../components/studyabroad';
import "../../styles/pagescss/studyabroadpg/timelinefor2022intakespg.css";
import Footer from '../../components/footer';
import YourNextStep from '../../components/yournextstep';


const Timelinefor2022Intakes = () => {
    return (
        <div className="page">
            <Header/>
            <Navbar/>
            <div className='dis_flex'>
        <div className="flex-container">
           <p className='mainhead'>Timeline for 2022 intakes</p>
           <p className="pageparabold">Wondering when to start your application process?</p>
           <p className='pageparabold'>Use IDP’s step-by-step guide. </p>
           <p className="pagepara">Understanding the application process for universities and colleges abroad can be confusing since it’s a lot different from the procedure followed in Indian universities. Most international institutions offer two intakes around the months of September and January, while some may also accept a third intake around April or May. However, it is a good idea to discuss your case with an international education expert who can guide you in the best manner. </p>
           <p className="pagepara">It is normal to get confused about when in starting with your application process. So, here’s some help if you are applying for the upcoming 2021-22 intakes.</p>
           <p className="pagebold" >Do your research: 10 to 12 months</p>
           <ul className="unorderedlist ht_20px">
           <li className="pagepara">It’s best to start as early as possible. Begin by identifying the course that is most suitable for you – note down your strengths and interests, and search for the courses available as per your current qualifications</li><br/>
           <li className="pagepara">Visit relevant university websites, look for their application procedures, requirements, deadlines and tuition fee. Get familiar with the available financial aids and scholarship and their applications. In short, keep all your research material ready </li>
           </ul>
           <p className="pagepara"><a>How to choose the right course</a></p>
           <p className="pagebold" >Take the standardised tests: 9 to 10 months</p>
           <ul className="unorderedlist ht_20px">
           <li className="pagepara">Almost all universities and colleges require scores of an approved English language proficiency test such as the IELTS</li><br/>
           <li className="pagepara">Certain programs may also ask for a GRE, GMAT or SAT score. Check for the accepted scores by the institutions you intend to apply to </li>
           <li className="pagepara">Start early with the preparation of your required tests</li>
           <li className="pagepara">Keep some buffer time aside in case you have to sit for the test again 
</li>
           </ul>
           <p className='mainhead'>Application Preparation: 7 to 8 months</p>
           <ul className="unorderedlist ht_10px">
            <li className="pagepara"> Shortlist universities: Once you have the scores with you, you’ll know where you stand. Shortlist universities accordingly. Also consider your preference, budget and location</li>
            <li className="pagepara">Prepare your application: Start collating all your documents so that you have everything in place within the timeline</li>
           </ul>
           <p className='pagepara'>Read more :<a>Documents required for your study abroad application </a></p>
           <p className='mainhead'>Admission decision: 3 to 4 months</p>
           <ul className="unorderedlist ht_30px">
            <li className='pagepara'>Once you’ve applied, you’ll receive acceptance mails from the institutions that find you eligible</li>
            <li className='pagepara'>Evaluate your options well before responding to acceptance emails. It is a good idea to discuss your options with one of our international education experts at IDP who can guide you to weigh your options in a better manner</li>
            <li className='pagepara'>Respond your final acceptance in time as your interview session depends on it .</li>
            <li className='pagepara'>Once you receive the final acceptance from the university, take a well-thought decision after discussing with your counsellor and deposit the minimum amount to confirm your admission</li>
            <li className='pagepara'>Apply for scholarships (if you are eligible) and other funding options to ease off your finances  </li>
           
           </ul>
           

        </div>
        <div className="flex-container">
            <StudyAbroad hgt="120vw"/>
        </div>
        </div>
        <div className='pagebtmcon'>
        <p className='mainhead'>Visa preparation: 2 to 3 months</p>
           <ul className='unorderedlist'>
            <li className="pagepara">Most countries allow you to apply for visa three months in advance from the day of your arrival. Gather all your documents and start with the paperwork. Your IDP counsellor will assist you with the required documentation</li>
            <li className="pagepara">Apply for your visa well in time to avoid any last-minute delays</li>
           </ul>
           <p className='mainhead'>Pre-departure: 1 to 2 months</p>
           <ul className='unorderedlist'>
            <li className='pagepara'>Make arrangements for your health insurance and accommodation.</li>
            <li className='pagepara'>Book your flight tickets beforehand to avoid last-minute hassles. Also, if you delay, the tickets will get more expensive.</li>
            <li className='pagepara'>Get yourself an international debit/credit card to help you survive during your initial days</li>
            <li className='pagepara'>Gather all the documents and copies you’d need at the time of arrival. Also, start packing so that you’re well-prepared in time</li>
           
           </ul>
           <p className='pagepara'>Read more:<a>Your packing checklist when flying abroad</a></p>
           <p className='pagepara'>We organise various pre-departure sessions for our students where we brief you about your life in your new destination so that you are fully-equipped and ready for your adventures ahead.</p>
          
          <div className='bluebox'>
            <p className='pagepara '>Note: Given the current COVID-19 situation, there might be some changes in the 2020/2021 intakes. Don’t worry, our international education experts are here to guide you with the latest updates to help you apply to your desired course and institution. Feel free to connect with our experts for a free counselling session and keep posted about the latest COVID- 19 updates. </p>
          </div>
          
        </div>
        <div  className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
        <Card  icon="Statementofpurpose" title="Statement of Purpose (SOP)" content="The SOP is the decision-maker of your application. It helps the admission committee to assess if the course structure is aligned with your career goals, beliefs, subject knowledge, and vision. Know how to write that perfect SOP."></Card>
              <Card  icon="usaapplication" title="Letter of Recommendation (LOR)" content="The LOR helps the admissions committee to get a detailed insight into your life and the relevance of the recommendation, but there are a few guidelines to be kept in mind while getting that amazing one. Read up to know more. "></Card>
        </div>
        <YourNextStep/>
            <Footer/>
         </div>   

    )
}


export default Timelinefor2022Intakes ;