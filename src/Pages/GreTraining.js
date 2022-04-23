import React from 'react';
import "../Asserts/Css/Pages/GreTraining.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const GRE = ()=>{
    return (
       

        <div className='Gretrainingpage'>
              <Header></Header>
              <Navbar></Navbar>
            <h1 className='Gretrainingmainhead'>GRE TRAINING @ IIEC </h1>

           <div className='Gretrainingstd'>  <StudyAbroad></StudyAbroad></div> 
            <p  className='Gretrainingpara'>IIEC offers comprehensive classroom training for GRE. The courses have been designed and prepared by leading educational experts. We aim to provide the best possible assistance so that you can get competitive GRE scores, which is a critical part of the graduate school admissions process.
</p>
            <p className='Gretrainingpara'>We offer intensive classes for the NEW FORMAT for GRE at our centre. The GRE classes include training for GRE Quant , GRE verbal and GRE AWA of the GRE General Test. Students will be provided with course material. The GRE Preparation Course is designed to give you the extra edge for getting a high score in the GRE test. The program includes Practice Tests that can be scheduled at a time of your convenience outside the class timings.
</p>
           

<div  className='GretrainingYNS'></div><YourNextStep></YourNextStep>
           <Footer></Footer>
              </div>
    )
}

export default GRE ;