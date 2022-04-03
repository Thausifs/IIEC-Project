import React from 'react';
import "../Asserts/Css/ComponentsCss/bottombannerfirst.css";
import Paveyourpathtosuccess from "../Asserts/images/Paveyourpathtosuccess.png";
import LetsHelp from "../Asserts/images/LetsHelp.png";
import Studyabroadexpenses from "../Asserts/images/Studyabroadexpenses.png";
import weansweryourqueries from "../Asserts/images/weansweryourqueries.png";


const BottomBannerfirst = () => {
  return (
      <div>
         <div className='bottombannerfirstcon'>
             <div className='bottombannerfirst'><img className='paveyourpathtosuccessimg' src={Paveyourpathtosuccess}></img>
             <p className='firstparaheading'>Pave your path to success</p>
             <p className='firstpara'>We’ll walk you step-by-step through the entire application process.</p>
             
              </div>
             <div className='bottombannerfirst'>
             <img className='paveyourpathtosuccessimg' src={LetsHelp}></img>
             <p className='firstparaheading'>Let's help you study abroad</p>
             <p className='firstpara'>We find a student the right place to study every 15 minutes. Be the next one.</p>
             </div>
             <div className='bottombannerfirst'> <img className='paveyourpathtosuccessimg' src={weansweryourqueries}></img>
             <p className='firstparaheading'>We answer your queries</p>
             <p className='firstpara'>Everything and anything you want to know about studying internationally.</p></div>
             <div className='bottombannerfirst'> <img className='paveyourpathtosuccessimg' src={Studyabroadexpenses}></img>
             <p className='firstparaheading'>Study abroad expenses</p>
             <p className='firstpara'>Get an estimated cost of studying and living in a new country.</p></div>

         </div>



      </div>


  )}

  export default BottomBannerfirst ;