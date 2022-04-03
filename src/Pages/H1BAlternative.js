import React from 'react';
import "../Asserts/Css/Pages/H1BAlternative.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const H1BAlternative = ()=>{
    return (
          <div className='h1balternativepage'>
              <Header></Header>
              <Navbar></Navbar>
            <div className='h1baltstd'>  <StudyAbroad></StudyAbroad></div>
               <h1 className='h1balternativemainhead'>H1B Alternative</h1>
                 <p className='h1balternativepara'>A H1B visa allows a student to remain in the US legally and work full time in a job that relates to their degree course. Most students opt for this visa upon completion of their studies in the US. Candidates who have exceptional work experience that will qualify adequately to be equivalent to a degree can also apply for this visa. Students can work full time and get paid the market based pay scale for their occupation. It is a wonderful option to work and grow in your career while working towards a more permanent residency visa category like a Green Card.

</p>
                <p className='h1balternativepara'>Students who have worked during their under graduate studies under the CPT option (Curricular Practical Training) find the H1B visa the next best suited alternative to remain in the US and continue to work full time legally and make a promising career in the world’s towering economy.
</p>

                 <p className='h1balternativepara'>As an industry leader with over 15 years of proven excellence and immense experience of placing hundreds of students and professionals in the best colleges and universities in the US through our offices in Chennai, we can help you in making the US your home destination to thrive and prosper along with your family.
</p>

<div className='yournextsteph1a'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default H1BAlternative  ;  