import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  GMAT =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>GMAT:</p>
        
           <p className='mainhead'>GMAT  COACHING AND TRAINING @ IIEC</p>
           <p className='pagepara'>We offer GMAT coaching with extensive coverage of all the GMAT test topics. The trainers will examine students on the key fundamentals, right approach, effective solving techniques and test-taking strategies. Our One On One training strategy ensures plenty of interaction and practice learning with a GMAT specialist trainer.
</p>
         <p className='pagepara'>We confidently assure you of excellent scores by undergoing our quality GMAT preparation coaching program. Our time tested course ware and training techniques will add to your core knowledge and build up your fundamental strengths to translate into great scores in the GMAT exams.
</p>

<p className='pagepara'>We confidently assure you of excellent scores by undergoing our quality GMAT preparation coaching program. Our time tested course ware and training techniques will add to your core knowledge and build up your fundamental strengths to translate into great scores in the GMAT exams.
</p>

<p className='pagepara'>Our exceptional team of professional trainers have the intrinsic experience and academic qualifications to coach you very comprehensively. Our full time, highly trained specialists have personally attempted the exams and achieved extremely high GMAT scores. This gives a coveted edge to the trainers who are immensely popular with the students and have spectacular track records in producing top scoring candidates.</p>



        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
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
export default GMAT ; 