import React from 'react';
import "../Asserts/Css/Pages/USAJ1.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const USAJ1 = ()=>{
    return (
          <div className='usaj1page'>
              <Header></Header>
              <Navbar></Navbar>
             <div className='usaj1std'> <StudyAbroad></StudyAbroad></div>
             <h1 className='usaj1mainhead'> USA J ‐ 1</h1>
             <h2 className='usaj1heading'>PROGRAM DETAILS 
</h2>
<div>
    <p><p className='usaj1para'>
J1 Cultural Exchange Programs offer students, university graduates and young professionals an enriching opportunity to enhance their lives and careers with the experience of living and working in the United States.</p>
</p>
    <p><p className='usaj1para'>The J‐1 Visa provides countless opportunities for international candidates looking to travel and gain experience in the United States. The multifaceted programs enable foreign nationals to come to the U.S. to teach study, conduct research, demonstrate special skills or receive on the job training for periods ranging from a few weeks to several years.
</p></p>

    
</div>
<table className='tabledivusaj1'>
  <tr className='usaj1para'>
    <th>Name</th>
    <th>USA INTERN / TRAINEE PROGRAM</th>
   
  </tr>
  <tr className='usaj1para'>
    <td>DURATION</td>
    <td>12 to 18 months (Extendable upto 3 Years)</td>
    
  </tr>
  <tr className='usaj1para'>
    <td>VISA TYPE</td>
    <td>J1</td>
    
  </tr>
  <tr className='usaj1para'>
    <td>ELLIGIBILITY</td>
    <td><p>Age 18‐27 years
Diploma/Graduate/Post Graduate ‐ In Commerce / Arts / Science/ Management/ Finance / Computer / Hotel Management

1. Intern: A foreign national who:
i. is currently enrolled in and pursuing studies at a degree‐ or‐certificate granting post secondary institution or
ii.Graduated from such a institution no more than 12 months prior to the program begin date

2. Trainee: A foreign national who has either:
i. A degree or professional certificate from a post secondary academic institution and at least one year of prior related work experience in his/her occupational field acquired outside the United States, or
ii.Five years of work experience outside the United States in his/her occupational field, in his/her specific field.

Good/Pleasing personality and a positive & enthusiastic approach to work is a must.
Excellent English Speaking & Writing abilities is must</p></td>
   
  </tr>
  <tr className='usaj1para'>
    <td>SELECTION</td>
    <td>Sponsor & Employer Interview Of The Candidate via Skype/Phone</td>
    
  </tr>
  <tr className='usaj1para'>
    <td>FEATURES</td>
    <td><p>Opportunity to GAIN EXPOSURE of US Culture
Expansion of Horizon
Assured placement
International work experience
Low program cost in comparison with Student Visa
No Hassle’s of Bank Balance. Minimum 3 lakh bank balance required.
No IELTS / TOEFL score
12th pass with 5+ years experience can apply
Excellent earning</p></td>
   
  </tr>
  <tr className='usaj1para'>
    <td>US</td>
    <td>PROGRAM EARNINGS</td>
   
  </tr>
  <tr className='usaj1para'>
    <td>Ireland</td>
    <td>$ 8 to $ 12 per hour
Weekly Minimum 40 hours
Minimum Total Earning Per Annum $15,360 /‐
approximately
Over Time Extra</td>
    
  </tr>
</table>
<div className='yournextstepUSAJ1'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default USAJ1  ;  