import React from 'react';
import "../Asserts/Css/ComponentsCss/Letspreptopbanner.css";
import Jobseekingskills from "../Asserts/images/Jobseekingskills.png";
import AccommodationServices from "../Asserts/images/AccommodationServices.png";
import Developingyoursoftskills from "../Asserts/images/Developingyoursoftskills.png";
import Dealingwithstress from "../Asserts/images/Dealingwithstress.png";


const LetsprepTopbanner = () => {
  return (
      <div>
         <div className='bottombannerfirstcon'>
             <div className='bottombannerfirst'><img className='paveyourpathtosuccessimg' src={Jobseekingskills}></img>
             <p className='firstparaheading'>Job seeking skills</p>
             <p className='firstpara'>OSHC is compulsory if you study in Australia. We’ll ensure you’re protected with the right health cover.</p>
             
              </div>
             <div className='bottombannerfirst'>
             <img className='paveyourpathtosuccessimg' src={Developingyoursoftskills}></img>
             <p className='firstparaheading'>Developing your soft skills</p>
             <p className='firstparatwo'>Enrich your people and social skills to develop strong professional relationships. Besides a great academic record, your soft skills are as important. Read up to know more.</p>
             </div>
             <div className='bottombannerfirst'> <img className='paveyourpathtosuccessimg' src={Dealingwithstress}></img>
             <p className='firstparaheading'>Dealing with stress</p>
             <p className='firstpara'>Read our guide to deal with homesickness effectively. It’s okay – happens with the best of us!</p></div>
             <div className='bottombannerfirst'> <img className='paveyourpathtosuccessimg' src={AccommodationServices}></img>
             <p className='firstparaheading'>Accommodation Services</p>
             <p className='firstparathree'>Moving to Australia? We will help you find a home that best suits your budget and lifestyle.</p></div>

         </div>



      </div>


  )}

  export default LetsprepTopbanner ;