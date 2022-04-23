import React from 'react';
import "../Asserts/Css/ComponentsCss/popularcourses.css";
import Explorescholarships from "../Asserts/images/Explorescholarships.png";

const PopularCourses = () => {
    return (
             <div className='popularcoursesmaincon'>
                      <h1 className='popularcourseshead'> Popular courses</h1>
                <div className='popularcoursescons'>
          
                   <div className='popularcoursesdivsone'>
                   <img className='images' src={Explorescholarships}></img>
                   <h className='headings'>Masters of Science</h>
                   </div>
                   <div className='popularcoursesdivstwo'>
                   <img className='images' src={Explorescholarships}></img>
                   <h className='headings'>Masters        </h>
                   </div>
                   <div className='popularcoursesdivsthree'>
                   <img className='images' src={Explorescholarships}></img>
                   <h className='headings'>Engineering        </h>
                   </div>
                   <div className='popularcoursesdivsfour'>
                   <img className='images' src={Explorescholarships}></img>
                   <h className='headings'>Management        </h>
                   </div>
                </div>
                </div>


      


    )}

export default  PopularCourses  