import React from 'react'; 
import ReactDOM from 'react-dom';
import StudyAbroad from './Components/StudyAbroad';
import Home from './Pages/home';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Whystudyabroad  from './Pages/Whystudyabroadpg';
import GuidetoStudyAbroad   from './Pages/guidetostudyabroad';
import BenefitsofStudyingAbroad   from './Pages/benefitsofstudyingabroad';
import GuidetoParents   from './Pages/guidetoparents';
import AreYouReadytoApply  from './Pages/areyoureadytoapply';
import Timelinefor2022Intakes  from './Pages/timelinefor2022intakes';
import CosttoStudyAbroad   from './Pages/costtostudyabroad';
import LatestStudyAbroad  from './Pages/lateststudyabroad';
import StudyingAbroadFAQs  from './Pages/studyingabroadFAQs';
import LetsPrepYouUp  from './Pages/letsprepyouup';
import WhatWeDo  from './Pages/whatwedo';
import SixReasonstoIIEC  from './Pages/sixreasonstoiiec';
import FreeStudyAbroad  from './Pages/freestudyabroad';
import CourseAdvice  from './Pages/courseadvice';
import StudentVisaApplication  from './Pages/studentvisaapplication';
import Predeparturesupport  from './Pages/Predeparturesupport';
import StudyAbroadDestinations  from './Pages/Study Abroad Destination/studyabroaddestinations';
import Studyinkorea  from './Pages/Study Abroad Destination/Studyinkorea';
import StudyinUSA  from './Pages/Study Abroad Destination/StudyinUSA';
import StudyinAustralia from './Pages/Study Abroad Destination/StudyinAustralia';
import StudyinMalaysia from './Pages/Study Abroad Destination/StudyinMalaysia';
import StudyinSingapore from './Pages/Study Abroad Destination/StudyinSingapore';
import StudyinEurope from './Pages/Study Abroad Destination/StudyinEurope';
import StudyinCanada from './Pages/Study Abroad Destination/StudyinCanada';
import StudyinUK from './Pages/Study Abroad Destination/StudyinUK';
import StudyinNewzealand from './Pages/Study Abroad Destination/StudyinNewZealand';
import  WanttoBecomeaDoctor from './Pages/Study Abroad Destination/Wanttobecomeadoctor';
import  StudyHTM from './Pages/Study Abroad Destination/Studyhtm';
import  StudyinUSABACH from './Pages/Study Abroad Destination/StudyinUSA';
import  StudyinUSAMBA from './Pages/Study Abroad Destination/StudyinUSAMBA';
import  StudyinUSAMASTERS from './Pages/Study Abroad Destination/StudyinUSAMASTERS';
import  AboutIIEC from './Pages/AboutIIEC';
import  BusinessVISA from './Pages/BusinessVISA';
import  DependentVISA from './Pages/DependentVISA';
import  DependentVISASpouse from './Pages/DependentVISASpouse';
import  EB5VISA from './Pages/eb5visa';
import  H1BAlternative from './Pages/H1BAlternative';
import  TouristVISA from './Pages/TouristVISA';
import  RefusedApplication from './Pages/RefusedApplication';
import  ImmigrateToAustralia from './Pages/ImmigrateToAustralia';
import  ImmigrateToSouthAfrica from './Pages/ImmigrateToSouthAfrica';
import  USAJ1 from './Pages/USA J1';
import  USAJ1SummerWork from './Pages/USAJ1summerwork';
import  OtherServices from './Pages/otherservices';
import  Visa from './Pages/visa';
import  ImmigrationServices from './Pages/Immigrationservices';
import  InternshipAssistance from './Pages/internshipassistanceservice';
import  USAJ1Caretaker from './Pages/USAJ1caretaker';
import  InternMalaysia from './Pages/Internmalaysia';
import  IELTS from './Pages/IELTS';
import  TOEFL from './Pages/Toefl';
import  GRE from './Pages/GreTraining';
import  PTE from './Pages/PTE';
import  GMAT from './Pages/GMAT';
import  SAT from './Pages/SAT';
import  BachelorsInUSA from './Pages/Study Abroad Destination/BachelorsInUsa';
import  MastersinUSA from './Pages/Study Abroad Destination/Mastersinusa';
import  MBAinUSA from './Pages/Study Abroad Destination/MBAinusa';
// import  InternMalaysia from './Pages/Internmalaysia';
import  VisaforExams from './Pages/visaforexams';



function App() {
    return (
        // <StudyAbroad></StudyAbroad>
        <Router>
              <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/whystudyabroad' element={<Whystudyabroad/>} />
              <Route path='/guidetostudyabroad' element={<GuidetoStudyAbroad/>} />
              <Route path='/studyabroadbenefits' element={<BenefitsofStudyingAbroad/>} />
              <Route path='/guidetoparents' element={<GuidetoParents/>} />
              <Route path='/areyoureadytoapply' element={<AreYouReadytoApply/>} />
              <Route path='/timelinefor2022intakes' element={<Timelinefor2022Intakes/>} />
              <Route path='/costtostudyabroad' element={<CosttoStudyAbroad/>} />
              <Route path='/lateststudyabroad' element={<LatestStudyAbroad/>} />
              <Route path='/studyingabroadFAQs' element={<StudyingAbroadFAQs/>} />
              <Route path='/letsprepyouup' element={<LetsPrepYouUp/>} />
              <Route path='/whatwedo' element={<WhatWeDo/>} />
              <Route path='/sixreasonstoiiec' element={<SixReasonstoIIEC/>} />
              <Route path='/freestudyabroad' element={<FreeStudyAbroad/>} />
              <Route path='/courseadvice' element={<CourseAdvice/>} />
              <Route path='/studentvisaapplication' element={<StudentVisaApplication/>} />
              <Route path='/predeparturesupport' element={<Predeparturesupport/>} />
              <Route path='/studyabroaddestinations' element={<StudyAbroadDestinations/>} />
              <Route path='/studyinkorea' element={<Studyinkorea/>} />
              <Route path='/studyinusa' element={<StudyinUSA/>} />
              <Route path='/studyinaustralia' element={<StudyinAustralia/>} />
              <Route path='/studyinmalaysia' element={<StudyinMalaysia/>} />
              <Route path='/studyinsingapore' element={<StudyinSingapore/>} />
              <Route path='/studyineurope' element={<StudyinEurope/>} />
              <Route path='/studyincanada' element={<StudyinCanada/>} />
              <Route path='/studyinuk' element={<StudyinUK/>} />
              <Route path='/studyinnewzealand' element={<StudyinNewzealand/>} />
              <Route path='/wanttobecomeadoctor' element={<WanttoBecomeaDoctor/>} />
              <Route path='/studyhtm' element={<StudyHTM/>} />
              <Route path='/studyinusabach' element={<StudyinUSABACH/>} />
              <Route path='/studyinusamba' element={<StudyinUSAMBA/>} />
              <Route path='/studyinusamasters' element={<StudyinUSAMASTERS/>} />
              <Route path='/Aboutiiec' element={<AboutIIEC/>} />
              <Route path='/businessvisa' element={<BusinessVISA/>} />
              <Route path='/dependentvisa' element={<DependentVISA/>} />
              <Route path='/dependentvisaspouse' element={<DependentVISASpouse/>} />
              <Route path='/eb5visa' element={<EB5VISA/>} />
              <Route path='/h1balternative' element={<H1BAlternative/>} />
              <Route path='/touristvisa' element={<TouristVISA/>} />
              <Route path='/refusedapplication' element={<RefusedApplication/>} />
              <Route path='/immigratetoaustralia' element={<ImmigrateToAustralia/>} />
              <Route path='/Immigratetosouthafrica' element={<ImmigrateToSouthAfrica/>} />
              <Route path='/usaj1' element={<USAJ1/>} />
              <Route path='/USAJ1summerwork' element={<USAJ1SummerWork />} />
              <Route path='/otherservices' element={<OtherServices />} />
              <Route path='/visa' element={<Visa />} />
              <Route path='/immigrationservices' element={<ImmigrationServices/>} />
              <Route path='/internshipassistance' element={<InternshipAssistance/>} />
              <Route path='/usaj1summer' element={<USAJ1SummerWork/>} />
              <Route path='/usaj1caretaker' element={< USAJ1Caretaker/>} />
              <Route path='/Internmalaysia' element={< InternMalaysia/>} />
              <Route path='/ielts' element={<IELTS/>} />
              <Route path='/toefl' element={<TOEFL/>} />
              <Route path='/gretraining' element={<GRE/>} />
              <Route path='/pte' element={< PTE/>} />
              <Route path='/gmat' element={< GMAT/>} />
              <Route path='/sat' element={< SAT/>} />
              <Route path='/bachelorsinusa' element={< BachelorsInUSA/>} />
              <Route path='/mastersinusa' element={< MastersinUSA/>} />
              <Route path='/mbainusa' element={< MBAinUSA/>} />
              <Route path='/visaforexams' element={< VisaforExams/>} />
             
             
            
             

              
              
             
                </Routes>
                
        
        </Router>
    )
}

export default App;




    

