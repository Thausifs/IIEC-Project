import React from 'react';
import "../Asserts/Css/Pages/whatwedo.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';

const WhatWeDo = ()=>{
    return (
        <div className='whatwedopage'>
            <Header></Header>
            <Navbar></Navbar>
          <div className='whatwestd'>  <StudyAbroad></StudyAbroad></div> 
         <h2 className='whatwedomainhead'>What we do</h2>
         <h2 className='whatwedoheading'>Study abroad with someone who knows the way.</h2>
         <p className='whatwedopara'>IDP is a global leader in international educational services. We’ve been in the industry for close to 50 years and know the best practices to help you realise your dream of studying abroad. Our range of services, experienced staff and foothold in the industry ensures that your international future is bright and rewarding. </p>
         <h2 className='whatwedomainhead'>Student Essential Services</h2>
         <div className='nextstepdiv'><YourNextStep></YourNextStep></div>
         <Footer></Footer>
        </div>


    )
}
export default WhatWeDo ;