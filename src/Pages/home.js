import React from 'react';
import "../Asserts/Css/Pages/Home.css";
import IIEC_logo from "../Asserts/images/IIEC_logo.png";
import map from "../Asserts/images/Map.png";
import Header from '../Components/header';
import WhyStudyAbroad  from '../Components/WhyStudyAbroad';
import Footer from '../Components/footer';
import StudyAbroad from '../Components/StudyAbroad';
import Paveyourpathtosuccess from '../Asserts/images/Paveyourpathtosuccess.png';
import Navbar from '../Components/navbar';
import TopBanner from '../Components/topbanner';
import StudyAbroadIntakes from '../Components/Studyabroadintakes';
import EmploymentProspectsAbroad from '../Components/EmploymentProspectsabroad';
import BenefitsofStudyingAbroad from '../Components/BenefitsofStudyingAbroad';
import StudyAbroadParentResources from '../Components/StudyAbroadParentResources';
import IIECGuidetoStudyingAbroad from '../Components/IIECGuidetoStudyingAbroad';
import TypesofOfferLetters from '../Components/TypesofOfferLetters';
import BottomBannerfirst from '../Components/BottomBannerfirst';
import BottomBannertwo from '../Components/BottomBannertwo';
import PopularCourses from '../Components/PopularCourses';
import YourNextStep from '../Components/YourNextStep';


const Home =()=>{
   return (

          <div className='homepage'>
             <Header ></Header>
            <Navbar></Navbar>
            <div className='imagesmap'><img  src={map} width="1366px" height="500px"    ></img></div> 
            <div className='topbannerhome'> <TopBanner ></TopBanner><WhyStudyAbroad ></WhyStudyAbroad>  <StudyAbroadIntakes></StudyAbroadIntakes><EmploymentProspectsAbroad></EmploymentProspectsAbroad> </div>
            <div className='studyabroadhome'> <StudyAbroad ></StudyAbroad></div>
             <div className='whystudyabroadhome'> </div>
           
             
             <BenefitsofStudyingAbroad></BenefitsofStudyingAbroad>
             <StudyAbroadParentResources></StudyAbroadParentResources>
             <IIECGuidetoStudyingAbroad></IIECGuidetoStudyingAbroad>
             <TypesofOfferLetters></TypesofOfferLetters>
             <BottomBannerfirst></BottomBannerfirst>
             <BottomBannertwo></BottomBannertwo>
            <div className='popularcoursehomepg'> <PopularCourses style="flex:100%"></PopularCourses></div>
             <YourNextStep></YourNextStep>
           <div className='footerhomepg'>  <Footer></Footer></div>
           </div>
 )}

 export default Home ;

     
      


