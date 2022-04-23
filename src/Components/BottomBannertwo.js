import React from 'react';
import "../Asserts/Css/ComponentsCss/Bottombannertwo.css";
import Applyfor2022intakes from "../Asserts/images/Applyfor2022intakes.png";
import ImportantDocumentstoStudyAbroad from "../Asserts/images/ImportantDocumentstoStudyAbroad.png";
import Explorescholarships from "../Asserts/images/Explorescholarships.png";
import TimeHigher from "../Asserts/images/TimeHigher.png";


const BottomBannertwo = () => {
  return (
      <div>
         <div className='bottombannersecondconbb'>
             <div className='bottombannersecondonebb'><img className='bottombannersecondimg' src={Explorescholarships}></img>
             <p className='secondparaheading'>Explore scholarships</p>
             <p className='secondpara'>Reduce your expenses by applying to grants, bursaries and scholarships.</p>
             
              </div>
             <div className='bottombannersecondtwobb'>
             <img className='bottombannersecondimg' src={ImportantDocumentstoStudyAbroad}></img>
             <p className='secondparaheadings'>Important Documents to Study Abroad</p>
             <p className='secondparatwo'>Here's a low down on the major documents your'll need to make an application</p>
             </div>
             <div className='bottombannersecondthreebb'> <img className='bottombannersecondimg' src={Applyfor2022intakes}></img>
             <p className='secondparaheading'>Apply for 2022 intakes</p>
             <p className='secondpara'>We have mapped a timeline for you to get started with your study abroad journey</p></div>
             <div className='bottombannersecondfourbb'> <img className='bottombannersecondimg' src={TimeHigher}></img>
             <p className='secondparaheadings'>   Times Higher Education World University Rankings</p>
             </div> 

                  </div>

         </div>

      


  )
  }

  export default BottomBannertwo ;