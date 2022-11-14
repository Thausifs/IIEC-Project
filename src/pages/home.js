import React from 'react';
import "../styles/pagescss/home.css";
// import IIEC_logo from "../Asserts/images/IIEC_logo.png";
import map from "../Asserts/images/Map.png";
import Header from '../components/header';
import Footer from '../components/footer';
// import YourNextStep from '../components/yournextstep';
import StudyAbroad from '../components/studyabroad';
import WhyStudyAbroad from '../components/whystudyabroad';
import Navbar from '../components/navbar';
import TopBanner from '../components/topbanner';
import BottomBannerfirst from '../components/bottombannerfirst';
import BottomBannertwo from '../components/bottombannertwo';
import PopularCourses from '../components/popularcourse';
import YourNextStep from '../components/yournextstep';
import Card from '../components/card';




const Home =()=>{
   return (

          <div className='homepage'>
           
           
             <Header ></Header>
            <Navbar></Navbar>
            <div className='imagesmap'><img  src={map}     ></img></div>  
             <div className='topbannerhome'> <TopBanner ></TopBanner> <WhyStudyAbroad/> 
              <Card icon="Studyabroadintakes" title="Study abroad intakes" content="Did you know academic year in universities abroad differ from the ones in India? Most universities offer two major intakes for the students aspiring to study abroad – Spring intake and fall intake. Let’s help you know all about it."></Card> 
              <Card icon="EmploymentProspectsabroad" title="Employment Prospects abroad" content="Know what kinds of job opportunities are available, and how to find them"></Card> 
              
              </div>
              
            <div className='studyabroadhome'> <StudyAbroad hgt="107vw"></StudyAbroad></div>
           
           
            <div className='homepagesecond'> 
            <div className='homepagesecondcomponents'>
            <Card icon="Benefitsofstudyingabroad" title="Benefits of studying abroad" content="Earning an international degree is not only about expanding your career and personal horizons but also about having an experience of a lifetime. We share reasons why you should consider studying internationally."></Card>
                 </div>
            <div className='homepagesecondcomponents'>
            <Card icon="StudyAbroadparentresources" title=" Study Abroad Parent Resources" content="Here is a list of resources for parents to support and prepare your child for studying abroad."></Card>
            </div>
            <div className='homepagesecondcomponents'>
            <Card icon="IIECguidetostudyingabroad" title=" IIEC’s guide to studying abroad" content="We know what it takes to find a good match and set you up for success. From helping you choose the course and country to guiding you through the paperwork, we get things done. This step-by-step guide will help you get started with your journey to studying abroad."></Card>
            </div>
            <div className='homepagesecondcomponents'> 
            <Card  icon="Typesofofferletters" title=" Understand the difference between conditional and unconditional offer letters."></Card>
            </div></div>
             <BottomBannerfirst></BottomBannerfirst>
              <BottomBannertwo></BottomBannertwo>
              <PopularCourses/>
           
            <h1 className='yournextstephead'>Your Next Steps</h1> 
           
            <YourNextStep/>
            <Footer></Footer>
           </div>
 )}

 export default Home ;

     
      


