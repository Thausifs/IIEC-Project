import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';



const  StudentVisaApplication =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
               <p className="mainhead">Student Visa Application Assistance By IIEC</p>
               <p className='pageparabold'>Need to apply for a visa? Here’s all you need to know    </p>
               <p className='pagepara'>A student visa is an endorsement by the immigration authorities on your passport. It indicates that you are allowed to enter and stay to study for a specified period.</p>
               <p className="pagebold">When should I apply for my student visa?
</p>
                  <p className='pagepara'>You can begin your student visa application once you receive confirmation of your enrolment in your chosen university or institution. It’s best to apply as early as possible, regardless of when your program is due to start, as the time taken for your visa to process will vary from country to country. 
</p>
               <p className='pagepara'>If you plan to seek any financial aid (in terms of scholarships and education loans), To avail any financial aid i.e., scholarship or education loan, the visa application should be initiated on a prior basis as the process can be time-consuming. </p>

               <p className="pagebold">How do I apply for a student visa?</p>
               <p className='pagepara'>There are several steps to consider when you apply for a student visa. However, the order of these steps i.e., processes and requirements may vary as per the country where you plan to study.  </p>
             

               <p className="pagebold">Most students will require evidence of: </p>
               <p className='pagepara'>Enrolment in a recognised educational institution.</p>
               <p className='pagepara'>Proof of your capacity to cover the cost of airfares, course tuition fees and living costs for you (and your family members) for the duration of your stay year.
</p>
               <p className='pagepara'>Passport size photos and a passport valid for at least six months beyond your period of stay.
</p>
               <p className='pagepara'>Some countries may require evidence of your English language proficiency, or ask you to undertake health examinations and/or police checks.
</p>

               <p className="pagebold">How can IIEC help in your visa applications?</p>
               <p className='pagepara'>If you’re an IIEC student with an offer letter from any of our 700 partner institutions in Australia, Ireland, Canada, New Zealand, the UK or the US, we can advise you on how to go about the entire process. We’ll make sure you are fully informed on the latest visa requirements and conditions; also help you prepare the right documents for your submission. </p>
               <p className='pagepara'>Our team of experts will direct you to the official websites and to authorised immigration representatives to ensure you have the latest applications forms and guidance. To reduce your hassle, we can also help certify, translate and courier your documents. </p>

             
        
               <Card  icon="Studyabroadintakes" title="Study abroad intakes" content="Did you know academic year in universities abroad differ from the ones in India? Most universities offer two major intakes for the students aspiring to study abroad – Spring intake and fall intake. Let’s help you know all about it."></Card>
        </div>
        <div className='flex-container'><StudyAbroad hgt="124vw"/></div>
    </div>
    
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default StudentVisaApplication 