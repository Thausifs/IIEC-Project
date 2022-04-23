import React from 'react';
import "../Asserts/Css/ComponentsCss/topbanner.css";
 
const TopBanner = () =>{
    return  (
             <div className='topbanner'>
                 <div className='topbanner_studyabroad' >
                     <h2 className='h2topbanner'>Study Abroad</h2>
                     <hr className='hrlines'></hr>
                     <p className='ptopbanner'>We have over a decade of proven excellence in the field of International Student Education.</p>
                 </div>
                 <div className='topbanner_immigration'>
                 <h2 className='h2topbanner'>Immigration</h2>
                 <hr className='hrlineimmigra'></hr>
                 <p className='ptopbanner'>Our expert team provides strategies that give a 100% visa & PR success rate track record!!</p>
                 </div>
                 <div className='topbanner_training'>
                 <h2 className='h2topbanner'>Training</h2>
                 <hr className='hrlinetrain'></hr>
                 <p className='ptopbanner'>We coach for qualifying exams like IELTS & GRE and foreign languages etc.</p> 
                 </div>
                 <div className='topbanner_visaguidances' >
                 <h2 className='h2topbanner'>Visa Guidance</h2>
                 <hr className='hrlinevisas'></hr>
                 <p className='ptopbanner'>We provide expert guidance for all the categories of visa</p>
                 </div>
             </div>

    )}

export default TopBanner ;