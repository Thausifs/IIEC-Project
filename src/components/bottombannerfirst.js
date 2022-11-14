import React from 'react';
import '../styles/componentscss/bottombannerfirst.css';
import Paveyourpathtosuccess from "../Asserts/images/Paveyourpathtosuccess.png";
import LetsHelp from "../Asserts/images/LetsHelp.png";
import Studyabroadexpenses from "../Asserts/images/Studyabroadexpenses.png";
import weansweryourqueries from "../Asserts/images/weansweryourqueries.png";


const BottomBannerfirst = () => {
  return (
  <div>
         <div className='bottombannerfirstconbb'>
             <div className='bottombannerfirstone'><img className='paveyourpathtosuccessimg' src={Paveyourpathtosuccess}></img>
             <p className='firstparaheadingbb'>Pave your path to success</p>
             <p className='firstparabb '>We’ll walk you step-by-step through the entire application process.</p>
             
              </div>
             <div className='bottombannerfirsttwo'>
          <img className='paveyourpathtosuccessimg' src={LetsHelp}></img>
             <p className='firstparaheadingbb'>Let's help you study abroad</p>
             <p className='firstparabb'>We find a student the right place to study every 15 minutes.Be the next.</p>
             </div>
             <div className='bottombannerfirstthree'> <img className='paveyourpathtosuccessimg' src={weansweryourqueries}></img>
             <p className='firstparaheadingbb'>We answer your queries</p>
             <p className='firstparabb'>Everything and anything you want to know about studying internationally.</p></div>
             <div className='bottombannerfirstfour'> <img className='paveyourpathtosuccessimg' src={Studyabroadexpenses}></img>
             <p className='firstparaheadingbb'>Study abroad expenses</p>
             <p className='firstparabb'>Get an estimated cost of studying and living in a new country.</p></div>

         </div>
       
         </div>

      


  )}

  export default BottomBannerfirst ;