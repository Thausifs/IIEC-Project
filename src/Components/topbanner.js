import React from 'react';
import "../Asserts/Css/ComponentsCss/topbanner.css";
 
const TopBanner = () =>{
    return  (
             <div className='topbanner'>
                 <div className='topbanner_studyabroad' >
                     <h2>Study Abroad</h2>
                     <hr className='hrline'></hr>
                     <p>We have over a decade of proven excellence in the field of International Student Education.</p>
                 </div>
                 <div className='topbanner_immigration'>
                 <h2>Immigration</h2>
                 <hr className='hrlineimmigra'></hr>
                 <p>Our expert team provides strategies that give a 100% visa & PR success rate track record!!</p>
                 </div>
                 <div className='topbanner_training'>
                 <h2>Training</h2>
                 <hr className='hrlinetrain'></hr>
                 <p>We coach for qualifying exams like IELTS & GRE and foreign languages etc.</p> 
                 </div>
                 <div className='topbanner_visaguidance' >
                 <h2>Visa Guidance</h2>
                 <hr className='hrlinevisa'></hr>
                 <p>We provide expert guidance for all the categories of visa</p>
                 </div>
             </div>

    )}

export default TopBanner ;