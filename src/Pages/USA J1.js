import React from 'react';
import "../Asserts/Css/Pages/USAJ1.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const USAJ1 = ()=>{
    return (
          <div className='usaj1page'>
              <Header></Header>
              <Navbar></Navbar>
             <div className='usaj1std'> <StudyAbroad></StudyAbroad></div>
             <h1 className='usaj1mainhead'> USA J ‐ 1</h1>
             <h2 className='usaj1heading'>PROGRAM DETAILS 
</h2>
<ul>
    <li><p className='usaj1para'>
J1 Cultural Exchange Programs offer students, university graduates and young professionals an enriching opportunity to enhance their lives and careers with the experience of living and working in the United States.</p>
</li>
    <li><p className='usaj1para'>The J‐1 Visa provides countless opportunities for international candidates looking to travel and gain experience in the United States. The multifaceted programs enable foreign nationals to come to the U.S. to teach study, conduct research, demonstrate special skills or receive on the job training for periods ranging from a few weeks to several years.
</p></li>
    
</ul>
<div className='yournextstepUSAJ1'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default USAJ1  ;  