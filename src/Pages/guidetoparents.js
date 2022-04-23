import React from 'react';
import "../Asserts/Css/Pages/guidetoparents.css";
import StudyAbroad from '../Components/StudyAbroad';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import YourNextStep from '../Components/YourNextStep';
import InterviewguidefortheUSF1StudentVisa from '../Components/InterviewguidefortheUSF1studentvisa'
import USAapplicationtimeline from '../Components/USAapplicationtimeline';

USAapplicationtimeline
const GuidetoParents =()=>{
    return(
         <div className='guidetoparentspage'>
             <Header></Header>
             <Navbar></Navbar>
             <div className='studyabroadgtp'><StudyAbroad></StudyAbroad></div> 
             <h2 className='guidetoparentsheading'>Study abroad guide for parents</h2>
         
             <p className='guidetoparentspara'>All you need to know when sending your child to study abroad </p>
             <hr className='hrline'></hr>
             <p className='guidetoparentspara'>Honestly, that’s one of the bravest decisions you’ll ever make, and yes, the most crucial one for your child. Studying abroad means your child has access to the best faculties, world-class education and a global mindset. As a parent, it is your responsibility to support your child in this decision. So, gear up to be a part of this fruitful journey.</p>
             <h2 className='guidetoparentsheading'>What you need to do as a parent</h2>
             <p className='guidetoparentspara'>Know what motivates your child. As a parent, be an active part of their decision-making procedure to support them and ensure they make the right calls in life.</p>
             <h2 className='guidetoparentsheading'>1. Discuss goals openly</h2>
             <p className='guidetoparentspara'>Sit down and understand why your child wants to go abroad – whether it is career-driven or personal. It is important to know what exactly your child seeks in life to be able to guide and support them.</p>
             <h2 className='guidetoparentsheading'>2. Stay informed </h2>
             <p className='guidetoparentspara'>Take part in research about the courses they are interested in, universities they have been talking about and the kind of lifestyle they would most thrive in. This research will also include information on course curriculum, campus life and accommodations options available abroad. </p>
             <p className='guidetoparentspara'>Read more: How to choose a course | How to choose the right destination </p>
             <h2 className='guidetoparentsheading'>3. Consider your challenges</h2>
             <p className='guidetoparentspara'>Reach out to friends and family whose children have gone abroad. Ask them about the challenges you are likely to face and figure out how to deal with them. The thumb rule for this is “be as specific as you can” and ask all your queries. </p>
             <h2 className='guidetoparentsheading'>4. Seek professional counselling</h2>
             <p className='guidetoparentspara'>IIEC has been helping students pursue their international education dreams for more than the last 50 years. If you have any doubts or concerns, we are more than happy to help you.</p>
             <h2 className='guidetoparentsheadings'>5. Know how much you will have to spend</h2>
             <p className='guidetoparentsparas'>Having an estimate of the costs involved in sending your kids abroad can help you make a better decision. However, it’s not just the tuition fee alone you should be calculating in your budget. Do weigh in other expenses such as accommodation, food, health coverage, communication and travel as well!</p>
            <p className='guidetoparentsparas'>Our guide on the overall cost of studying can help ease your financial budgeting for your child’s stay abroad. </p>
            <h2 className='guidetoparentsheadings'>6. Make a detailed plan</h2>
            <p className='guidetoparentsparas'>Now that you have an overview of what goes into sending your child abroad, plan. Consider all factors including course and university selection, finances, visa, etc.</p>
           <p className='guidetoparentsparas'>Once you have decided where your child would study and pursue which course, remember to consider:</p>
           <h2 className='guidetoparentsheadings'>7. Health comes first </h2>
           <p className='guidetoparentsparas'>Ensure to get your child’s general physical examination, dental check-up, and a gynaecological check-up (if applicable). If required, ensure they have all the relevant shots and boosters. </p>
           <p className='guidetoparentsparas'>Read more: Health and support services for international students</p>
           <h2 className='guidetoparentsheadings'>8. Travel safety is crucial</h2>
           <p className='guidetoparentsparas'>Yes, it’s worrisome to send your child thousands of kilometres away, and that’s why it is important to ensure their travel safety. Ensure your child is insured before they leave and sign up for a safety program. </p>
           <p className='guidetoparentsparas'>You can check more information on your child’s travel safety to understand what’s best for them. </p>
           <h2 className='guidetoparentsheadings'>9. Plan your visits</h2>
           <p className='guidetoparentsparas'>Once your child has settled abroad, discuss with them and plan your visit abroad. This will help you spend some quality time and also give them that emotional support they need while adjusting in another country. </p>
           <h2 className='guidetoparentsheadings'>10. Keep in touch</h2>
           <p className='guidetoparentsparas'>It is important to stay connected with your child abroad as settling in a new country can be quite overwhelming. They’ll need both – your emotional support, as well as your guidance before they are settled properly. </p>
           <p className='guidetoparentsparas'>Read more: 8 simple ways to keep connected with your child abroad</p>
           <p className='guidetoparentsparas'>If you still have any concerns and need to be sure about sending your child abroad, schedule a free counselling session to discuss their career path. with us. </p>
          <div className='guidetoparentsbox'> <InterviewguidefortheUSF1StudentVisa></InterviewguidefortheUSF1StudentVisa>
      <USAapplicationtimeline></USAapplicationtimeline></div> 
           <YourNextStep></YourNextStep>
           <Footer ></Footer>
</div>
    )
}

             export default GuidetoParents ;
