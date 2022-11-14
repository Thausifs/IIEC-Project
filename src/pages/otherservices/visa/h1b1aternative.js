import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import StudyAbroad from '../../../components/studyabroad';
import YourNextStep from '../../../components/yournextstep';



const  H1BAlternative =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>H1B Alternative</p>
                 <p className='pagepara'>A H1B visa allows a student to remain in the US legally and work full time in a job that relates to their degree course. Most students opt for this visa upon completion of their studies in the US. Candidates who have exceptional work experience that will qualify adequately to be equivalent to a degree can also apply for this visa. Students can work full time and get paid the market based pay scale for their occupation. It is a wonderful option to work and grow in your career while working towards a more permanent residency visa category like a Green Card.

</p>
                <p className='pagepara'>Students who have worked during their under graduate studies under the CPT option (Curricular Practical Training) find the H1B visa the next best suited alternative to remain in the US and continue to work full time legally and make a promising career in the world’s towering economy.
</p>

                 <p className='pagepara'>As an industry leader with over 15 years of proven excellence and immense experience of placing hundreds of students and professionals in the best colleges and universities in the US through our offices in Chennai, we can help you in making the US your home destination to thrive and prosper along with your family.
</p>



        </div>
        <div className='flex-container'><StudyAbroad hgt="110vw"/></div>
    </div>
    
      
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default H1BAlternative ; 