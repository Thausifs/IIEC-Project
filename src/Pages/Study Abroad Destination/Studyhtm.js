import React from 'react';
import "../../Asserts/Css/Pages/studyhtm.css";
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Navbar from '../../Components/navbar';
import StudyAbroad from '../../Components/StudyAbroad';
import YourNextStep from '../../Components/YourNextStep';



const StudyHTM = ()=>{

    return (
          <div className='studyhtmpage'>
           <Header></Header>
           <Navbar></Navbar>
          <div className='studyhtmstd'> <StudyAbroad></StudyAbroad></div>
           <h1 className='studyhtmmainhead'>Want to Study Hotel And Tourism managment ?</h1>
            <h2 className='studyhtmheading'>STUDY IN HTMI</h2>
            <p className='studyhtmpara'>Quality of Switzerland made possible in Dubai.</p>
            <p className='studyhtmpara'>Join HTMi Dubai and have world class experience in global hospitality &tourism management.</p>
            <p className='studyhtmpara'>IIEC is proud to be the master agent globally for HTMi,Dubai.</p>
            <p className='studyhtmpara'>Register your name on success by registering with IIEC.</p>

            <h1 className='studyhtmmainhead'>Advantages of joining HTMI Dubai</h1>
            <div className='studyhtmpara'>
                <p>75% of HTMi graduates join Major international hotel chains.
</p>
                <p>Brand new state-of-the-art campus in the heart of Dubai at Studio one hotel.
</p>
                <p>Approved and attested by the Knowledge and Human Development Authority in UAE.
</p>
                <p>
International study pathway to HTMi's Global Campuses in Singapore and Switzerland.
</p>
                <p>International study pathway to HTMi's Global Campuses in Singapore and Switzerland.
</p>
                <p>Global hospitality network for Internships and work placements.
</p>
<p>80% of HTMI graduates secure full-time placement before completing final semesters. 
</p>
            </div>
            <h1 className='studyhtmmainhead'>Get only the best in Dubai </h1>
            <div className='studyhtmpara'>
                <p>Soak into the luxury of Dubai
</p>
                <p>Many Cultures in One Location
</p>
                <p>Explore All Seven Emirates countries
</p>
                <p>Gateway to Europe
</p>
                <p>Known for the luxury hotels and resorts
</p>
                <p>Part-time jobs for students </p>
            </div>
            

<div className='yournextstepdivhtm'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default StudyHTM ;  