
import './App.css';
import Home from './pages/home';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import StepByStepGuide from './pages/studyabroadpg/stepbystepguidepg';
import GuidetoStudyAbroad from './pages/studyabroadpg/guidetostudyabroad';
import StudyAbroadBenefits from './pages/studyabroadpg/studyabroadbenefitspg';
import AreYouReadytoApply from './pages/studyabroadpg/areyoureadytoapplypg';
import Timelinefor2022Intakes from './pages/studyabroadpg/timelinefor2022intakespg';
import CosttoStudyAbroad from './pages/studyabroadpg/costtostudyabroadpg';
import LatestStudyAbroad from './pages/studyabroadpg/lateststudyabroadpg';
import StudyingAbroadFAQs from './pages/studyabroadpg/studyingabroadFAQspg';
import LetsPrepYouUp from './pages/whatwedo/letsprepyoupg';
import WhatWeDo from './pages/whatwedo/whatwedopg';
import SixReasonstoIIEC from './pages/whatwedo/sixreasonstoiiecpg';
import FreeStudyAbroad from './pages/whatwedo/freestudyabroadpg';
import CourseAdvice from './pages/whatwedo/courseadvicepg';
import StudentVisaApplication from './pages/whatwedo/studentvisaapplicationpg';
import Predeparturesupport from './pages/whatwedo/predeparturesupportpg';
import AboutIIEC from './pages/whatwedo/Aboutiiecpg';
import StudyAbroadDestinations from './pages/studydestination/studyabroaddestinationspg';
import Studyinkorea from './pages/studydestination/studyinkoreapg';
import StudyinUSA from './pages/studydestination/studyinusaapg';
import StudyinAustralia from './pages/studydestination/studyinaustraliapg';
import StudyinMalaysia from './pages/studydestination/studyinmalaysiapg';
import StudyinSingapore from './pages/studydestination/studyinsingaporepg';
import StudyinEurope from './pages/studydestination/studyineuropepg';
import StudyinCanada from './pages/studydestination/studyincanadapg';
import StudyinUK from './pages/studydestination/studyinukpg';
import StudyinNewzealand from './pages/studydestination/studyinnewzealandpg';
import WanttoBecomeaDoctor from './pages/studydestination/wanttobecomeadoctorpg';
import StudyHTM from './pages/studydestination/studyhtmpg';
import StudyinUSABACH from './pages/studydestination/studyinusabachpg';
import StudyinUSAMBA from './pages/studydestination/studyinusambapg';
import StudyinUSAMASTERS from './pages/studydestination/studyinusamasterspg';
import IELTS from './pages/trainings/ielts';
import TOEFL from './pages/trainings/toefl';
import GRE from './pages/trainings/gre';
import PTE from './pages/trainings/pte';
import GMAT from './pages/trainings/gmat';
import SAT from './pages/trainings/sat';
import Visa from './pages/otherservices/visa';
import ImmigrationServices from './pages/otherservices/immigrationservices';
import InternshipAssistance from './pages/otherservices/internshipassistance';
import BusinessVISA from './pages/otherservices/visa/businessvisa';
import DependentVISA from './pages/otherservices/visa/dependentvisa';
import DependentVISASpouse from './pages/otherservices/visa/dependentvisaspouse';
import EB5VISA from './pages/otherservices/visa/eb5visa';
import H1BAlternative from './pages/otherservices/visa/h1b1aternative';
import TouristVISA from './pages/otherservices/visa/touristvisa';




function App() {
  return (
    <Router>
              <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/stepbystepguidepg' element={<StepByStepGuide/>} />
              <Route path='/guidetostudyabroad' element={<GuidetoStudyAbroad/>} />
              <Route path='/studyabroadbenefits' element={<StudyAbroadBenefits/>} />
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
              <Route path='/Aboutiiec' element={<AboutIIEC/>} />
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
              <Route path='/ielts' element={<IELTS/>} />
              <Route path='/toefl' element={<TOEFL/>} />
              <Route path='/gretraining' element={<GRE/>} />
              <Route path='/pte' element={< PTE/>} />
              <Route path='/gmat' element={< GMAT/>} />
              <Route path='/sat' element={< SAT/>} />
              <Route path='/visa' element={<Visa />} />
              <Route path='/immigrationservices' element={<ImmigrationServices/>} />
              <Route path='/internshipassistance' element={<InternshipAssistance/>} />
              <Route path='/businessvisa' element={<BusinessVISA/>} />
              <Route path='/dependentvisa' element={<DependentVISA/>} />
              <Route path='/dependentvisaspouse' element={<DependentVISASpouse/>} />
              <Route path='/eb5visa' element={<EB5VISA/>} />
              <Route path='/h1balternative' element={<H1BAlternative/>} />
              <Route path='/touristvisa' element={<TouristVISA/>} />
              {/* 
              <Route path='/refusedapplication' element={<RefusedApplication/>} />
              <Route path='/immigratetoaustralia' element={<ImmigrateToAustralia/>} />
              <Route path='/Immigratetosouthafrica' element={<ImmigrateToSouthAfrica/>} />
              <Route path='/usaj1' element={<USAJ1/>} />
              <Route path='/USAJ1summerwork' element={<USAJ1SummerWork />} />
              <Route path='/otherservices' element={<OtherServices />} />
              
              <Route path='/usaj1summer' element={<USAJ1SummerWork/>} />
              <Route path='/usaj1caretaker' element={< USAJ1Caretaker/>} />
              <Route path='/Internmalaysia' element={< InternMalaysia/>} />
             
              <Route path='/bachelorsinusa' element={< BachelorsInUSA/>} />
              <Route path='/mastersinusa' element={< MastersinUSA/>} />
              <Route path='/mbainusa' element={< MBAinUSA/>} />
              <Route path='/visaforexams' element={< VisaforExams/>} /> */}
              </Routes>
              </Router>
  );
}

export default App;
