import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';
import Card2 from '../../components/card2';



const  StudyAbroadDestinations =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container gp_1">
         <p className="mainhead">Study abroad destinations</p>
         <p className='pagebold'>Study abroad destinations where we partner with over 700 quality institutions.</p>
         <p className="pagepara">You probably have a good idea about the qualities you want in your study abroad destination. Now it's just a matter of finding the right one! To help you find your perfect destination, just browse by the countries here and find out more about what it's like to study and live there!</p>
         <Card2  icon="Ielts" title="Study in Korea" content="The Republic of Korea is a highly successful country on the Asian continent. Most of the technology-related supply to India comes from South Korea. It is a global leader in technology and industrial sectors and provides a wide range of job opportunities in the same. South Korea is a place known for its impeccable education system" link="/studyinkorea"></Card2>
        <Card2 icon="Studyintheusa" title="Study in the USA" content="The United States of America will always be the hottest destination for Indian and international students to study in. It is not difficult to determine why. The quality of education, wide-ranging specialties, flexibility, large campuses, friendly professors, funding and international opportunities are only but a few of the reasons for attracting the largest number of students from throughout the world. It is rightly then claimed that the US is the ‘Land of a Million Opportunities’." link="/studyinusa" />      
        <Card2 icon="Bachelorsinusa" title="Study in the Australia" content="Australia, the land down under, is an ideal place to enjoy a world class education and an outstanding quality of life. It offers a diverse range of study options for international students, with more than 1,100 institutions and 22,000 courses to choose from." link="/studyinaustralia" />      
        <Card2 icon="Studyincanada" title="Study in Canada" content="Academic excellence, affordability, quality of life and adventure – Canada stands out as an ideal place to study. In 2017, Canada experienced almost 500,000 international students studying at all levels in the country; which explains its popularity across the globe." link="" />      
        </div>
        <div className='flex-container'><StudyAbroad hgt="118vw"/></div>
    </div>
    <div className='pagebtmcon'>
   
        </div>
        <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
          <Card2 icon="Studyinmalaysia" title="Study in Malaysia" content="In this peaceful, plural and modern society, Malaysia, located in South East Asia, is a testimony to the world of what it is able to offer academically, socially, ethnically, culturally and in every other aspect of life to make the stay of any international student worth their time, money and effort. It is a fascinating and enchanting nation." link="studyinmalaysia" />
          <Card2 icon="Studyinsingapore" title="Study in Singapore" content="Studying in Singapore, no doubt, will act as a platform to a brighter future. Driven by excellence, Institutions in Singapore offer a broad-based curriculum and global perspective to equip students with the relevant qualifications and training to succeed in a competitive environment. Hence educational institutions offer the latest and best in educational tools and technologies" link="studyinsingapore" />
          </div>
          <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
          <Card2 icon="Studyineurope" title="Study in Europe" content="We believe that overseas education is not an expense but an investment where in return comes over a lifetime." link="studyineurope" />
          <Card2 icon="Studyinuk" title="Study in UK" content="he UK is a gateway to Europe! Though a small continent, Europe is diverse and fascinating." link="studyinuk" />
          </div>
          <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}> 
          <Card2 icon ="studyinnewzealand" title="Study in New Zealand" content="Ranking second on the Global Peace Index 2018, New Zealand is one of the safest countries for international students. With the right mix of opportunities, culture, economy and climate to boast, the country will offer you an experience of a lifetime." link="studyinnewzealand"/>
          </div>
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default StudyAbroadDestinations ; 