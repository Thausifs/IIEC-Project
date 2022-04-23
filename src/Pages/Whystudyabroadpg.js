import React from 'react';
import "../Asserts/Css/Pages/whyStudyAbroadpg.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from '../Components/header';
import WhyStudyAbroad  from '../Components/WhyStudyAbroad';
import Footer from '../Components/footer';
import StudyAbroad from '../Components/StudyAbroad';
import Navbar from '../Components/navbar';
import TopBanner from '../Components/topbanner';
import StudyAbroadIntakes from '../Components/Studyabroadintakes';
import EmploymentProspectsAbroad from '../Components/EmploymentProspectsabroad';
import BenefitsofStudyingAbroad from '../Components/BenefitsofStudyingAbroad';
import StudyAbroadParentResources from '../Components/StudyAbroadParentResources';
import IIECGuidetoStudyingAbroad from '../Components/IIECGuidetoStudyingAbroad';
import TypesofOfferLetters from '../Components/TypesofOfferLetters';
import BottomBannerfirst from '../Components/BottomBannerfirst';
import YourNextStep from '../Components/YourNextStep';


const Whystudyabroad =()=>{
    return (
        <div className='whystudyabroadpage'>
         <Header></Header>
             <Navbar></Navbar>
           <div className='whystudypg'> <WhyStudyAbroad ></WhyStudyAbroad><StudyAbroadIntakes></StudyAbroadIntakes> <EmploymentProspectsAbroad></EmploymentProspectsAbroad><BenefitsofStudyingAbroad></BenefitsofStudyingAbroad> <IIECGuidetoStudyingAbroad></IIECGuidetoStudyingAbroad> </div>
           <div className='studyabroadwsapg'> <StudyAbroad ></StudyAbroad></div> 
            <div className='whystudyabdbottom'> <TypesofOfferLetters></TypesofOfferLetters></div> 
           <div  className='whystudyabdbottom'> <StudyAbroadParentResources></StudyAbroadParentResources></div>
             <BottomBannerfirst></BottomBannerfirst>
            <div className='whystudtabdYNS'><YourNextStep></YourNextStep></div> 
             <Footer></Footer>

       </div>
    )}

    export default Whystudyabroad ;