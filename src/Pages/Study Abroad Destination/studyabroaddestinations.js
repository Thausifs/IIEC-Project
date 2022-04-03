import React from 'react';
import "../../Asserts/Css/Pages/studyabroaddestinations.css";
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Navbar from '../../Components/navbar';
import StudyAbroad from '../../Components/StudyAbroad';
import YourNextStep from '../../Components/YourNextStep';
import IIECGuidetoStudyingAbroad from '../../Components/IIECGuidetoStudyingAbroad';


const StudyAbroadDestinations = ()=>{
    return (
          <div className='studyabroaddestinationspage'>
              <Header></Header>
              <Navbar></Navbar>
              <StudyAbroad></StudyAbroad>
              <h2 className='studyabroaddestinationsheading'>Study abroad destinations</h2>
              <h2 className='studyabroaddestinationsheading' >Study abroad destinations where we partner with over 700 quality institutions.</h2>
              <p className='studyabroaddestinationspara'>You probably have a good idea about the qualities you want in your study abroad destination. Now it's just a matter of finding the right one! To help you find your perfect destination, just browse by the countries here and find out more about what it's like to study and live there!</p>
              <YourNextStep></YourNextStep>
              <Footer></Footer>


          </div>

    )
    }

    export default StudyAbroadDestinations ;     