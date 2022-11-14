import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';
import Card2 from '../../components/card2';


const  StudyinUSA =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>Study in USA</p>
              <p className='pagebold'>STUDYING IN USA</p>
              <p className='pagepara'>The United States of America will always be the hottest destination for Indian and international students to study in. It is not difficult to determine why. The quality of education, wide-ranging specialties, flexibility, large campuses, friendly professors, funding and international opportunities are only but a few of the reasons for attracting the largest number of students from throughout the world. It is rightly then claimed that the US is the ‘Land of a Million Opportunities’.</p>
              <p className='pagepara'>There are more than 3,800 universities and colleges in the USA, offering education right from short-term certificate programs to Post-Doctoral level degrees. Most students prefer to study in the USA at either the Bachelors level or the Masters level and beyond.</p>
              <p className='pagepara'>The Master’s level is the most popular among Indian students who would like to chalk out their career plans for higher education. More than 78% of Indian students apply for a Master’s level program in US universities.</p>
              <p className='pagepara'>At the Masters level, Engineering and its specialties (MS) are most popular, followed by Management (MBA) and other subjects like Pharmacy, Public Health, Physiotherapy and other programs.</p>
              <p className='pagepara'>Each of the specialty has its own typical requirements while making an application, admission procedures and rules and regulations that apply for further studies in the USA.</p>
              <p className='pagepara'>We at IIEC are the foremost experts in all aspects of applying and getting assured admissions in colleges and universities in the US.</p>
              <Card2 icon ="Gre" title="BACHELORS IN USA" content="Bachelor’s level education in USA normally starts after the completion of 12 years of primary and secondary education. Hence, education beyond class XII is also known as ‘post-secondary’ education, in USA." link="bachelorinusa"/>
              <Card2 icon ="studyinnewzealand" title="MBA IN USA" content="The USA is considered to be the birthplace of professional management. While it is possible that other countries might have professional management at different stages of their evolution" link="mbainusa"/>
              <Card2 icon ="studyinnewzealand" title="MASTERS IN USA" content="The Master of Sciences and Master of Engineering programs in U.S universities are second to none in the range of specialties, quality and popularity." link="mastersinusa"/>
    


        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
   
        </div>
        <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
          </div>
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default StudyinUSA ; 