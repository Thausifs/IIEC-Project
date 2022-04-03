import React from 'react';
import "../../Asserts/Css/Pages/studyinusa.css";
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Navbar from '../../Components/navbar';
import StudyAbroad from '../../Components/StudyAbroad';
import YourNextStep from '../../Components/YourNextStep';
import BachelorsinUSA from '../../Components/Bachelorsinusa';
import MBAinUSA from '../../Components/MBAinusa';
import MastersinUSA from '../../Components/Mastersinusa';
// import MBAinUSA from '../../Components/MBAinusa';



const StudyinUSA = ()=>{
    return (
         <div className='studyinusapage'>
             <Header></Header>
             <Navbar></Navbar>
             <div className='studyinusastd'><StudyAbroad></StudyAbroad></div>
             <h1 className='studyinusamainhead'>Study in USA</h1>
              <h2 className='studyinusaheading'>STUDYING IN USA</h2>
              <p className='studyinusapara'>The United States of America will always be the hottest destination for Indian and international students to study in. It is not difficult to determine why. The quality of education, wide-ranging specialties, flexibility, large campuses, friendly professors, funding and international opportunities are only but a few of the reasons for attracting the largest number of students from throughout the world. It is rightly then claimed that the US is the ‘Land of a Million Opportunities’.</p>
              <p className='studyinusapara'>There are more than 3,800 universities and colleges in the USA, offering education right from short-term certificate programs to Post-Doctoral level degrees. Most students prefer to study in the USA at either the Bachelors level or the Masters level and beyond.</p>
              <p className='studyinusapara'>The Master’s level is the most popular among Indian students who would like to chalk out their career plans for higher education. More than 78% of Indian students apply for a Master’s level program in US universities.</p>
              <p className='studyinusapara'>At the Masters level, Engineering and its specialties (MS) are most popular, followed by Management (MBA) and other subjects like Pharmacy, Public Health, Physiotherapy and other programs.</p>
              <p className='studyinusapara'>Each of the specialty has its own typical requirements while making an application, admission procedures and rules and regulations that apply for further studies in the USA.</p>
              <p className='studyinusapara'>We at IIEC are the foremost experts in all aspects of applying and getting assured admissions in colleges and universities in the US.</p>

         <div className='studyinusasub'>    <BachelorsinUSA/>
             <MBAinUSA/>
             <MastersinUSA/>
            
             </div>
            
           <div className='yournextstepdivusa'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
           
         </div>
    )
}

export default StudyinUSA ;  