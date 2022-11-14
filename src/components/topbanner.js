import React from 'react';
import '../styles/componentscss/topbanner.css';
import Studyabroadicon from "../Asserts/images/Studyabroadicon.png";
import Immigrationicon from "../Asserts/images/Immigrationicon.png";
import Trainingicon from "../Asserts/images/Trainingicon.png";
import Visaguidance from "../Asserts/images/Visaguidance.png";
 
const TopBanner = () =>{
    return  (
             <div className='topbanner'>
                 <div className='topbanner_studyabroad' >
                     <div className='h2topbanner'><span><img className='Studyabroadicon' src={Studyabroadicon}></img></span>Study Abroad</div>
                     <hr className='hrlines'></hr>
                     <p className='ptopbanner'>We have over a decade of proven excellence in the field of International Student Education.</p>
                 </div>
                 <div className='topbanner_immigration'>
                 <div className='h2topbanner'><span><img className='Immigrationicon' src={Immigrationicon}></img></span>Immigration</div>
                 <hr className='hrlineimmigra'></hr>
                 <p className='ptopbanner'>Our expert team provides strategies that give a 100% visa & PR success rate track record!!</p>
                 </div>
                 <div className='topbanner_training'>
                 <div className='h2topbanner'><span><img className='Trainingicon' src={Trainingicon}></img></span>Training</div>
                 <hr className='hrlinetrain'></hr>
                 <p className='ptopbanner'>We coach for qualifying exams like IELTS & GRE and foreign languages etc.</p> 
                 </div>
                 <div className='topbanner_visaguidances' >
                 <div className='h2topbanner'><span><img className='Visaguidance' src={Visaguidance}></img></span>Visa Guidance</div>
                 <hr className='hrlinevisas'></hr>
                 <p className='ptopbanner'>We provide expert guidance for all the categories of visa</p>
                 </div>
             </div>

    )}

export default TopBanner ;