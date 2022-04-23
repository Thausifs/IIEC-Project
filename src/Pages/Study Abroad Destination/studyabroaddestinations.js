import React from 'react';
import "../../Asserts/Css/Pages/studyabroaddestinations.css";
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Navbar from '../../Components/navbar';
import StudyAbroad from '../../Components/StudyAbroad';
import YourNextStep from '../../Components/YourNextStep';
import IIECGuidetoStudyingAbroad from '../../Components/IIECGuidetoStudyingAbroad';
import StudyinKorea from '../../Components/Studyinkorea';
import StudyintheUSA from '../../Components/Studyintheusa';
import StudyinAustralia from '../../Components/Studyinaustralia';
import StudyinCanada from '../../Components/Studyincanada';
import StudyinMalaysia from '../../Components/Studyinmalaysia';
import StudyinSingapore from '../../Components/Studyinsingapore';
import StudyinEurope from '../../Components/Studyineurope';
import StudyinUK from '../../Components/Studyinuk';







const StudyAbroadDestinations = ()=>{
    return (
          <div className='studyabroaddestinationspage'>
              <Header></Header>
              <Navbar></Navbar>
            
            <div className='studyabroaddestinationmaindiv'><h2 className='studyabroaddestinationshead'>Study abroad destinations</h2>
              <h2 className='studyabroaddestinationsheading' >Study abroad destinations where we partner with over 700 quality institutions.</h2>
              <p className='studyabroaddestinationspara'>You probably have a good idea about the qualities you want in your study abroad destination. Now it's just a matter of finding the right one! To help you find your perfect destination, just browse by the countries here and find out more about what it's like to study and live there!</p>
              <StudyinKorea/>
            <StudyintheUSA/>
             <StudyinAustralia/>
             <StudyinCanada/></div>
             <div className='studyabroaddestinationstd'> <StudyAbroad></StudyAbroad></div>
             <div className='studyabroaddestinationbottomdivone'>   <StudyinMalaysia/>
             <StudyinSingapore/></div>
             <div className='studyabroaddestinationbottomdivtwo'>    <StudyinEurope/>
             <StudyinUK/></div>
             
             
             
              <YourNextStep></YourNextStep>
              <Footer></Footer>


          </div>

    )
    }

    export default StudyAbroadDestinations ;     