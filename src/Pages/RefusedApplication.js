import React from 'react';
import "../Asserts/Css/Pages/refusedapplication.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const RefusedApplication = ()=>{
    return (
          <div className='refusedapplicationpage'>
              <Header></Header>
              <Navbar></Navbar>
             <div className='refusedapplicationstd'> <StudyAbroad></StudyAbroad></div>
             <h1 className='refusedapplicationmainhead'>Why does an application get refused?</h1>
             <h2 className='refusedapplicationheading'>Visa applications are normally declined due to the following reasons:
</h2>
<div className='refusedapplicationpara'>
    <p>Unsatisfactory answers to the questions asked in the application or during the visa interview.
</p><br/>
    <p>Insufficient funds to support your trip, study and business.
</p><br/>
    <p>Applicant has committed fraud or misrepresentation in his or herr application.
</p><br/>
    <p>Has criminal charges pending.
</p><br/>
    <p>Applicant is considered to be a threat to the national security.</p><br/>
    <p>Cannot prove to have strong ties to their current country of residence.</p><br/>
    <p>Intends to reside or work permanently in the country she/he will visit though not applying for an immigrant or work visa. Does not have a legitimate reason for the journey.
</p><br/>
    <p>Has no visible means of sustenance.</p><br/>
    <p>Does not have a good moral character.
</p><br/>
    <p>Had their previous visa application(s) rejected and cannot prove that the reasons for the previous denials no longer exist or are not applicable any more.
</p><br/>
    <p>Has a communicable disease, such as tuberculosis.
</p><br/>
    <p>Has previous visa and immigration violations.
</p>
</div>
<p className='refusedapplicationpara'>Didn’t use a previously issued visa at all without a valid reason
(e.g., a trip cancellation due to a family emergency)
</p>
<p className='refusedapplicationpara'>At IIEC we are very professional and always work with the best interests to our clients at heart.
</p>
<p className='refusedapplicationpara'>We believe in providing accurate guidance.
</p>
<p className='refusedapplicationpara'>It’s always better to speak with our expert and experienced councilors before re applying. Merely re-applying several times is not a guarantee for success and it only impacts your future applications adversely.
</p>
<p className='refusedapplicationpara' >We are Specialize in Visa refusal cases and appeals.
</p>
<p className='refusedapplicationpara'>Please reach out to us at 044-26158024 or write to iiecservice@gmail.com
</p>
<div className='refusedappyns'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default RefusedApplication  ;  