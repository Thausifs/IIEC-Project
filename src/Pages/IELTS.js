import React from 'react';
import "../Asserts/Css/Pages/IELTS.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const IELTS = ()=>{
    return (
       

        <div className='ieltspage'>
              <Header></Header>
              <Navbar></Navbar>
           <div className='ieltsstd'>  <StudyAbroad></StudyAbroad></div> 
            <h1 className='ieltsmainhead'>WHY IELTS?</h1>
            <p  className='ieltspara'>IIEC is an authorized IELTS test Registration center for the British Council and IDP.  We have an excellent In-House training facility with huge resources, online content, highly skilled and trained Coaches and training materials of highest standards.</p>
            <h1 className='ieltsmainhead'>WHAT WE OFFER :</h1>
            <ul className='ieltspara' >
                <li > IIEC is an authorized IELTS partner of the  British council and IDP.
</li><br/>
                <li >British Council Certified trainers with more than 15 years of excellence in training experience</li>
                <li >Trainers are highly experienced professionals who have personally surpassed the IELTS exams.
</li><br/>
                <li >Personalized One on One coaching to give individual care and mentoring.
</li><br/>
                <li  >Periodical mock tests and assessments that replicate the actual exam.
</li><br/>
                <li >Free IELTS materials and E-books.
</li><br/>
                <li >Language Lab with good collection for mastering the IELTS speaking module.</li>
            </ul><br/><br/><br/><br/>

            <h1 className='ieltsmainhead'>ABOUT IELTS:</h1>
           <p className='ieltspara'>IELTS is accepted by most of the Australian, British, Canadian and New Zealand academic institutions as also by over 3,000 academic institutions in the United States. It is also the most sought after qualifying test asked by various professional organisations across the world.
</p>

           <p className='ieltspara'>IELTS is the only Secure English Language Test approved by UK Visas and Immigration (UKVI) for visa customers applying both outside and inside the UK. It is also a requirement for immigration to Australia, New Zealand and Canada.
</p>



<div className='YNSielts'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default IELTS ;