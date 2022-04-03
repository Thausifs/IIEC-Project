import React from 'react';
import "../Asserts/Css/Pages/GMAT.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const GMAT = ()=>{
    return (
       

        <div className='gmatpage'>
              <Header></Header>
              <Navbar></Navbar>
           <div className='gmatstd'>  <StudyAbroad></StudyAbroad></div> 
           
           <h1 className='gmatmainhead'>GMAT:</h1>

           <h2 className='gmatheading'>GMAT  COACHING AND TRAINING @ IIEC</h2>
           <p className='gmatpara'>We offer GMAT coaching with extensive coverage of all the GMAT test topics. The trainers will examine students on the key fundamentals, right approach, effective solving techniques and test-taking strategies. Our One On One training strategy ensures plenty of interaction and practice learning with a GMAT specialist trainer.
</p>
         <p className='gmatpara'>We confidently assure you of excellent scores by undergoing our quality GMAT preparation coaching program. Our time tested course ware and training techniques will add to your core knowledge and build up your fundamental strengths to translate into great scores in the GMAT exams.
</p>

<p className='gmatpara'>We confidently assure you of excellent scores by undergoing our quality GMAT preparation coaching program. Our time tested course ware and training techniques will add to your core knowledge and build up your fundamental strengths to translate into great scores in the GMAT exams.
</p>

<p className='gmatpara'>Our exceptional team of professional trainers have the intrinsic experience and academic qualifications to coach you very comprehensively. Our full time, highly trained specialists have personally attempted the exams and achieved extremely high GMAT scores. This gives a coveted edge to the trainers who are immensely popular with the students and have spectacular track records in producing top scoring candidates.</p>




<div className='YNSgmat'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default GMAT ;