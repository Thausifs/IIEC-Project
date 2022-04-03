import React from 'react';
import "../Asserts/Css/Pages/USAJ1summerwork.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const USAJ1SummerWork = ()=>{
    return (
          <div className='USAJ1summerworkpage'>
              <Header></Header>
              <Navbar></Navbar>
              <div className='USAJ1summerworkstd'>  <StudyAbroad></StudyAbroad></div>
             <h1 className='USAJ1summerworkmainhead'> USA J1 SUMMER WORK & TRAVEL</h1>
             <h2 className='USAJ1summerworkheading'>PROGRAM DETAILS 
</h2>
<ul>
    <li><p className='USAJ1summerworkpara'>
    J1 Cultural Exchange Programs offer students, university graduates and young professionals an enriching opportunity to enhance their lives and careers with the experience of living and working in the United States..</p>
</li>
    <li><p className='USAJ1summerworkpara'>The J‐1 Visa provides countless opportunities for international candidates looking to travel and gain experience in the United States. The multifaceted programs enable foreign nationals to come to the U.S. to teach study, conduct research, demonstrate special skills or receive on the job training for periods ranging from a few weeks to several years.

</p></li>
    
</ul>
<div className='usa1summeryns'></div><YourNextStep></YourNextStep>
           <Footer></Footer>
              </div>
    )
}

export default USAJ1SummerWork  ;  