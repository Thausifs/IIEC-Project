import React from 'react';
import "../Asserts/Css/ComponentsCss/Letspreptopbanner.css";
import Jobseekingskills from "../Asserts/images/Jobseekingskills.png";
import AccommodationServices from "../Asserts/images/AccommodationServices.png";
import Developingyoursoftskills from "../Asserts/images/Developingyoursoftskills.png";
import Dealingwithstress from "../Asserts/images/Dealingwithstress.png";


const LetsprepTopbanner = () => {
  return (
      
         <div className='letspreptopbannercon'>
             <div className='letspreptopbannerfirstone'><img className='letspreptopbannerimg' src={Jobseekingskills}></img>
             <p className='letsprepparaheading'>Job seeking skills</p>
             <p className='letsprepparaone'>OSHC is compulsory if you study in Australia. We’ll ensure you’re protected with the right health cover.</p>
             
              </div>
             <div className='letspreptopbannerfirsttwo'>
             <img className='letspreptopbannerimg' src={Developingyoursoftskills}></img>
             <p className='letsprepparaheading'>Developing your soft skills</p>
             <p className='letsprepparatwo'>Enrich your people and social skills to develop strong professional relationships. Besides a great academic record, your soft skills are as important. Read up to know more.</p>
             </div>
             <div className='letspreptopbannerfirstthree'> <img className='letspreptopbannerimg' src={Dealingwithstress}></img>
             <p className='letsprepparaheading'>Dealing with stress</p>
             <p className='letsprepparaone'>Read our guide to deal with homesickness effectively. It’s okay – happens with the best of us!</p></div>
             <div className='letspreptopbannerfirstfour'> <img className='letspreptopbannerimg' src={AccommodationServices}></img>
             <p className='letsprepparaheading'>Accommodation Services</p>
             <p className='letsprepparathree'>Moving to Australia? We will help you find a home that best suits your budget and lifestyle.</p></div>

         </div>



    


  )}

  export default LetsprepTopbanner ;