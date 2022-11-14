import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  IELTS =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>WHY IELTS?</p>
            <p  className='pagepara'>IIEC is an authorized IELTS test Registration center for the British Council and IDP.  We have an excellent In-House training facility with huge resources, online content, highly skilled and trained Coaches and training materials of highest standards.</p>
            <p className='mainhead'>WHAT WE OFFER :</p>
            <ul className='pagepara' >
                <li > IIEC is an authorized IELTS partner of the  British council and IDP.
</li>
                <li >British Council Certified trainers with more than 15 years of excellence in training experience</li>
                <li >Trainers are highly experienced professionals who have personally surpassed the IELTS exams.
</li>
                <li >Personalized One on One coaching to give individual care and mentoring.
</li>
                <li  >Periodical mock tests and assessments that replicate the actual exam.
</li>
                <li >Free IELTS materials and E-books.
</li>
                <li >Language Lab with good collection for mastering the IELTS speaking module.</li>
            </ul>

            <p className='mainhead'>ABOUT IELTS:</p>
           <p className='pagepara'>IELTS is accepted by most of the Australian, British, Canadian and New Zealand academic institutions as also by over 3,000 academic institutions in the United States. It is also the most sought after qualifying test asked by various professional organisations across the world.
</p>

           <p className='pagepara'>IELTS is the only Secure English Language Test approved by UK Visas and Immigration (UKVI) for visa customers applying both outside and inside the UK. It is also a requirement for immigration to Australia, New Zealand and Canada.
</p>

        </div>
        <div className='flex-container'><StudyAbroad hgt="110vw"/></div>
    </div>
    <div className='pagebtmcon'>
   
        </div>
        <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
          </div>
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default IELTS ; 