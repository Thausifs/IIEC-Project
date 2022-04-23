import React from 'react';
import "../Asserts/Css/Pages/studentvisaapplication.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';
import IIECGuidetoStudyingAbroad from '../Components/IIECGuidetoStudyingAbroad';
import CourseAdvicesixreasons from '../Components/Courseadvicesixreasons';


const StudentVisaApplication  = ()=>{
    return (
          <div className='studentvisaapplicationpage' >
              <Header></Header>
              <Navbar></Navbar>
             <div  className='studentvisaapplicationpgstd'> <StudyAbroad></StudyAbroad></div> 
              <h2 className='studentvisaapplicationmainhead'>Student visa application assistance by IIEC</h2>
              <h2 className='studentvisaapplicationheading'>Need to apply for a visa? Here’s all you need to know </h2>
              <p className='studentvisaapplicationpara'>A student visa is an endorsement by the immigration authorities on your passport. It indicates that you are allowed to enter and stay to study for a specified period.</p>
              <h2 className='studentvisaapplicationheading'>When should I apply for my student visa?</h2>
              <p className='studentvisaapplicationpara'>You can begin your student visa application once you receive confirmation of your enrolment in your chosen university or institution. It’s best to apply as early as possible, regardless of when your program is due to start, as the time taken for your visa to process will vary from country to country. </p>
              <p className='studentvisaapplicationpara'>If you plan to seek any financial aid (in terms of scholarships and education loans), To avail any financial aid i.e., scholarship or education loan, the visa application should be initiated on a prior basis as the process can be time-consuming. </p>
              <h2 className='studentvisaapplicationheading'>How do I apply for a student visa?</h2>
              <p className='studentvisaapplicationpara'>There are several steps to consider when you apply for a student visa. However, the order of these steps i.e., processes and requirements may vary as per the country where you plan to study. </p>
              <h2 className='studentvisaapplicationheading'>Most students will require evidence of: </h2>
              <p className='studentvisaapplicationpara'>Enrolment in a recognised educational institution.</p>
              <p className='studentvisaapplicationpara'>Proof of your capacity to cover the cost of airfares, course tuition fees and living costs for you (and your family members) for the duration of your stay year.</p>
              <p className='studentvisaapplicationpara'>Passport size photos and a passport valid for at least six months beyond your period of stay.</p>
              <p className='studentvisaapplicationpara'>Some countries may require evidence of your English language proficiency, or ask you to undertake health examinations and/or police checks.</p>
              <h1 className='studentvisaapplicationheading'>How can IIEC help in your visa applications?</h1>
              <p className='studentvisaapplicationpara'>If you’re an IIEC student with an offer letter from any of our 700 partner institutions in Australia, Ireland, Canada, New Zealand, the UK or the US, we can advise you on how to go about the entire process. We’ll make sure you are fully informed on the latest visa requirements and conditions; also help you prepare the right documents for your submission. </p>
              <p className='studentvisaapplicationpara'>Our team of experts will direct you to the official websites and to authorised immigration representatives to ensure you have the latest applications forms and guidance. To reduce your hassle, we can also help certify, translate and courier your documents. </p>
             <div className='studentvisaapplicationbottomdiv'> <CourseAdvicesixreasons/></div> 
              <YourNextStep></YourNextStep>
              <Footer></Footer>




          </div>

    )
}
export default StudentVisaApplication ;