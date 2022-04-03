import React from 'react';
import "../Asserts/Css/ComponentsCss/yournextstep.css";
import subject from "../Asserts/images/subject.png";
import Abroad from "../Asserts/images/Abroad.png";


const YourNextStep = () =>{
    return (
        <div>
            <div className='yournextstepcon'>
              <h1 className='yournextstephead'>Your Next Steps</h1>     
               <div className='yournextstepsubject'>
               <img className='imagessub' src={subject} ></img>
               <div className='yournextstepinner'><p className='yournextstepara'>Choose a subject and we’ll find courses that match your criteria.</p></div>
               </div>
               <div className='yournextstepdreams'>
               <img className='imagesabd' src={Abroad }></img>
               <div className='yournextstepinnertext'><p className='yournextstepara'>We’ll help you achieve your study abroad dreams. Find out how?</p></div>
               </div>
            </div>



        </div>


    )
}
export default YourNextStep ;