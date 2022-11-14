import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  StudyHTM =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>Want to Study Hotel And Tourism managment ?</p>
            <h2 className='mainhead'>STUDY IN HTMI</h2>
            <p className='studyhtmpara pagepara'>Quality of Switzerland made possible in Dubai.</p>
            <p className='studyhtmpara pagepara'>Join HTMi Dubai and have world class experience in global hospitality &tourism management.</p>
            <p className='studyhtmpara pagepara'>IIEC is proud to be the master agent globally for HTMi,Dubai.</p>
            <p className='studyhtmpara pagepara'>Register your name on success by registering with IIEC.</p>

            <p className='mainhead'>Advantages of joining HTMI Dubai</p>
            <ul className='studyhtmpara pagepara'>
                <li>75% of HTMi graduates join Major international hotel chains.
</li>
                <li>Brand new state-of-the-art campus in the heart of Dubai at Studio one hotel.
</li>
                <li>Approved and attested by the Knowledge and Human Development Authority in UAE.
</li>
                <li>
International study pathway to HTMi's Global Campuses in Singapore and Switzerland.
</li>
                <li>International study pathway to HTMi's Global Campuses in Singapore and Switzerland.
</li>
                <li>Global hospitality network for Internships and work placements.
</li>
<p>80% of HTMI graduates secure full-time placement before completing final semesters. 
</p>
            </ul>
            <p className='mainhead'>Get only the best in Dubai </p>
            <ul className='studyhtmpara pagepara'>
                <li>Soak into the luxury of Dubai
</li>
                <li>Many Cultures in One Location
</li>
                <li>Explore All Seven Emirates countries
</li>
                <li>Gateway to Europe
</li>
                <li>Known for the luxury hotels and resorts
</li>
                <li>Part-time jobs for students </li>
            </ul>
            
               
    


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
export default StudyHTM ; 