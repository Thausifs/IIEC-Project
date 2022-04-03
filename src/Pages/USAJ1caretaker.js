import React from 'react';
import "../Asserts/Css/Pages/USAJ1caretaker.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const USAJ1Caretaker = ()=>{
    return (
          <div className='usaj1caretakerpage'>
              <Header></Header>
              <Navbar></Navbar>
             <div className='usaj1caretakerstd'> <StudyAbroad></StudyAbroad></div>
             <h1 className='usaj1caretakermainhead'> USA J1 CARETAKER</h1>
             <h2 className='usaj1caretakerheading'>PROGRAM DETAILS 

</h2>
<ul>
    <li><p className='usaj1caretakerpara'>
    The Au Pair category of the J-1 Exchange Visitor Program allows a caring live-in childcare provider between the ages of 18 and 26 to live as an extended member of a host family in exchange for room, board, and a stipend. Whilst the main priority of a successful applicant will be to take care of the kids, they should also have free time to enjoy life in the U.S.</p>
</li>
    <li><p className='usaj1caretakerpara'>Through the Au Pair program, participants and host families take part in a mutually rewarding, intercultural opportunity. Participants can continue their education while experiencing everyday life with an American family, and hosts receive reliable and responsible childcare from individuals who become part of the family.
</p></li>
    
</ul>
<div className='yournextstepUSAJ1caretaker'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default USAJ1Caretaker  ;  