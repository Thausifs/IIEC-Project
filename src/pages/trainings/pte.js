import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  PTE =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>PTE COACHING AND TRAINING @ IIEC</p>
            
            <p  className='pagepara'>PTE course offer extensive coverage on all PTE test topics. The trainer will examine key fundamentals, right approach, effective solving techniques and test-taking strategies; no stone will be left unturned. Expect plenty of interaction and practice from learning PTE specialist.

</p>
<p className='pagepara'>We are so confident of quality of our SAT preparation programs that we guarantee your official SAT score will increase after going through our proven programs.

</p>
<p className='pagepara'>Team of professional trainers who have necessary professional experience and academic qualification will train coach you. Our full time, highly trained test preparation specialists have also achieved extremely high SAT scores, are immensely popular with their students and have stellar track records in producing top scoring students.</p>

<p  className='mainhead'>Structure of PTE</p>
<p className='pagepara'>PTE General (formerly known as the London Tests of English) are international English language exams for speakers of English as a foreign language (EFL). It is developed by Pearson Language Tests and administered by Edexcel, the exams are accredited by QCA, the Qualification and Curriculum Authority. In some countries (Poland, Greece) the oral interview is assessed by locally trained assessors, whereas in other countries (France, Italy) they are entirely graded in London.
</p>
<p className='pagepara'>PTE General are theme-based exams designed to test how well a learner can communicate in authentic and realistic situations, and not on how well they remember formal vocabulary and structures. For this reason, the tests use real-life scenarios rather than grammatical exercises. They test the four skills: reading, writing, listening and speaking. There are six levels which are mapped to the Common European Framework of Reference for Languages. The Framework was developed by the Council of Europe to enable language learners, teachers, universities or potential employers to compare and relate language qualifications by level.
</p>
<p className='pagepara'>Reading, writing, listening and speaking are tested at all levels. The alignment of the London Tests of English to the CEFR has been established by mapping the test specifications to the CEFR descriptors. This mapping process was submitted to an external audit by University of Westminster. Work is in progress to further improve the robustness of the alignment on the basis of empirical data. Levels 4 and 5 of the PTE General are accepted for entrance to universities in the UK and by a variety of international companies.London Tests of English have been formally accredited by the Qualifications and Curriculum Authority (QCA). </p>


  <p className='pagepara' >PTE Young Learners (formerly known as LTEfC) are international English language exams for young children (aged from 7 to 12) who are learning English as a foreign language (EFL). They test the four skills: reading, writing, listening and speaking.

</p>       
<p className='pagepara'>PTE Young Learners exams are based around the amusing adventures of the Brown family. The exams are theme based and designed to be fun and motivating. At the lower levels they aim to test how well children can use language structures and at the higher levels how well they can use language to complete communicative tasks. For this reason, the tests use real-life scenarios rather than grammatical exercises.</p>
<p className='pagepara'>There are four PTE Young Learners levels</p>

<p  className='mainhead'>History</p>
<p className='pagepara'>PTE General were originally developed by the University of London Schools Examination Board in 1982. The Examination Board merged with Business & Technological Council (BTEC) in 1996 to become Edexcel, the largest examining body of academic and vocational in the UK.
</p>


        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
    <p  className='mainhead'>Schema Theory</p>

<p className='pagepara'>PTE General were one of the first set of ESOL exams to apply the Notional -Functional Syllabus and Schema Theory to language testing. Schema Theory was developed by psychologists such as R.C.Anderson and Frederic Bartlett. Schemata (plural of schema) are learned models suggesting relationships between objects and help structure future learning.
</p>
<p className='pagepara'>PTE General tasks are related through a common theme which allows candidates to activate the different domains of knowledge they have acquired and thus further enhance second language acquisition. It also provides a coherent thread for candidates to guide them through the various tasks.
</p>
<p className='pagepara'>The tasks can be interrelated through a common topic or a scenario where the different tasks “build” a story and integrate different language skills.
</p>

        </div>
       
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default PTE ; 