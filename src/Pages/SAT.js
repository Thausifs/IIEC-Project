import React from 'react';
import "../Asserts/Css/Pages/SAT.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const SAT = ()=>{
    return (
       

        <div className='satpage'>
              <Header></Header>
              <Navbar></Navbar>
           <h1 className='satmainhead'>SAT</h1>

           <div className='satstd'>  <StudyAbroad></StudyAbroad></div> 
           <p className='satpara'>SAT course offer extensive coverage on all SAT test topics. The trainer will examine key fundamentals, right approach, effective solving techniques and test-taking strategies; no stone will be left unturned. Expect plenty of interaction and practice from learning GMAT specialist.
</p>
            <p className='satpara'>We are so confident of quality of our SAT preparation programs that we guarantee your official SAT score will increase after going through our proven programs.

</p>
             <p className='satpara'>Team of professional trainers who have necessary professional experience and academic qualification will train coach you. Our full time, highly trained test preparation specialists have also achieved extremely high SAT scores, are immensely popular with their students and have stellar track records in producing top scoring students.
</p>
           <h1 className='satmainhead'>Reading Test
</h1>
             <p className='satpara'>The Reading Test of the SAT is made up of one section with 52 questions and a time limit of 65 minutes. All questions are multiple-choice and based on reading passages. Tables, graphs, and charts may accompany some passages, but no math is required to correctly answer the corresponding questions. There are five passages (up to two of which may be a pair of smaller passages) on the Reading Test and 10-11 questions per passage or passage pair. SAT Reading passages draw from three main fields: history, social studies, and science. Each SAT Reading Test always includes: one passage from U.S. or world literature; one passage from either a U.S. founding document or a related text; one passage about economics, psychology, sociology, or another social science; and, two science passages. Answers to all of the questions are based only on the content stated in or implied by the passage or passage pair.
</p>
           <h1 className='satmainhead'>
Writing Test
</h1>
<p className='satpara'>
The Writing and Language Test of the SAT is made up of one section with 44 multiple-choice questions and a time limit of 35 minutes. As with the Reading Test, all questions are based on reading passages which may be accompanied by tables, graphs, and charts. The test taker will be asked to read the passages, find mistakes or weaknesses in writing, and to provide corrections or improvements. Reading passages on this test range in content from topic arguments to nonfiction narratives in a variety of subjects. The skills being evaluated include: increasing the clarity of argument; improving word choice; improving analysis of topics in social studies and science; changing sentence or word structure to increase organizational quality and impact of writing; and, fixing or improving sentence structure, word usage, and punctuation.
</p>

<h1 className='satmainhead'>Mathematics</h1>
<p className='satparas'>The mathematics portion of the SAT is divided into two sections: Math Test – Calculator and Math Test – No Calculator. In total, the SAT math test is 80 minutes long and includes 58 questions: 45 multiple choice questions and 13 grid-in questions. The multiple choice questions have four possible answers; the grid-in questions are free response and require the test taker to provide an answer.
</p>
<ul className='satparas'>
    <p>The Math Test – No Calculator section has 20 questions (15 multiple choice and 5 grid-in) and lasts 25 minutes.
</p>
    <p>The Math Test – Calculator section has 38 questions (30 multiple choice and 8 grid-in) and lasts 55 minutes.
</p>
</ul>
<p className='satparas'>Several scores are provided to the test taker for the math test. A sub score (on a scale of 1 to 15) is reported for each of three categories of math content: “Heart of Algebra” (linear equations, systems of linear equations, and linear functions), “Problem Solving and Data Analysis” (statistics, modelling, and problem-solving skills), and “Passport to Advanced Math” (non-linear expressions, radicals, exponentials and other topics that form the basis of more advanced math). A test score for the math test is reported on a scale of 10 to 40, and a section score (equal to the test score multiplied by 20) is reported on a scale of 200 to 800. 
</p>
           

<YourNextStep></YourNextStep>
           <Footer></Footer>
              </div>
    )
}

export default SAT ;