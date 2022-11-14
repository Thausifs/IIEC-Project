import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';



const  GRE =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>GRE TRAINING @ IIEC </p>
 <p  className='pagepara'>IIEC offers comprehensive classroom training for GRE. The courses have been designed and prepared by leading educational experts. We aim to provide the best possible assistance so that you can get competitive GRE scores, which is a critical part of the graduate school admissions process.
</p>
 <p className='pagepara'>We offer intensive classes for the NEW FORMAT for GRE at our centre. The GRE classes include training for GRE Quant , GRE verbal and GRE AWA of the GRE General Test. Students will be provided with course material. The GRE Preparation Course is designed to give you the extra edge for getting a high score in the GRE test. The program includes Practice Tests that can be scheduled at a time of your convenience outside the class timings.
</p>


        </div>
        <div className='flex-container'><StudyAbroad hgt="110vw"/></div>
    </div>
    
      
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default GRE ; 