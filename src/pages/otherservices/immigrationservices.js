import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import YourNextStep from '../../components/yournextstep';
import Card2 from '../../components/card2';


const  ImmigrationServices =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <Card2 icon="Studyincanada" title="Canada" content="The world has reinvented itself into a Global Village and Globalization has transformed the geographical boundaries into trade blocs. Advancements in technology, ground breaking developments in transportation systems and creation of seamless global businesses has opened up a phenomenal demand for the World Savvy businessman to go out there and grow without limits. " link="" />
        <Card2 icon="australiaimmigration" title="Australia" content="Canada is a country composed of immigrants who have migrated from every country in the world to Canada. Canada’s success is largely due to the contributions made by the new immigrants. " link="" />
        <Card2 icon="southafricaimmigration" title="South Africa" content="Get your Intership in USA" link="" />


        </div>
        <div className='flex-container'><StudyAbroad hgt="110vw"/></div>
    </div>
    
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default ImmigrationServices ; 