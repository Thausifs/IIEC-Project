import React from 'react';
import "../Asserts/Css/Pages/costtostudyabroad.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import YourNextStep from '../Components/YourNextStep';
import StudyAbroad from '../Components/StudyAbroad';
import InterviewguidefortheUSF1StudentVisa from '../Components/InterviewguidefortheUSF1studentvisa'
import USAapplicationtimeline from '../Components/USAapplicationtimeline';

const CosttoStudyAbroad = ()=>{
    return (
        <div className='costtostudypage'>
            <Header></Header>
            <Navbar></Navbar>
           <div className='costtostudypagestd'> <StudyAbroad></StudyAbroad></div>
            <h2 className='costtostudyheading'>How much does it cost to study abroad?</h2>
            <p className='costtostudypara'>Wondering how much money you need? We’ll help you budget it out!</p>
           <hr className='hrline'></hr>
            <p className='costtostudypara'>You’ve decided to study abroad and explore the world, that’s great! Now let’s get you started with a list of estimates so you know where to spend your money. Our guide will help you plan your budget and manage your finances with ease, without having to worry at all. And yes, we’ve covered basic all expenses like accommodation, food, health coverage, communication and travel as well! </p>
            <h2 className='costtostudyheading'>1. Tuition fee is your primary expense</h2>
        <p className='costtostudypara'>This is the most important and major chunk of your study abroad expenses and depends on the type of qualification and institution you opt for. Here’s a quick overview of the tuition fee for different programs in our top destinations.</p>
         <table className='tablediv'>
  <tr>
    <th>Destination</th>
    <th>Undergraduate Program (annually)</th>
    <th>Postgraduate master's degree (annually)</th>
    <th>Doctoral degree (annually)</th>
  </tr>
  <tr className='trdashed'>
    <td>Canada</td>
    <td>CAD 13,000 to CAD 20,000</td>
    <td>CAD 17,000 to CAD 25,000</td>
    <td>CAD 7,000 to CAD 15,000</td>
  </tr>
  <tr>
    <td>New Zealand</td>
    <td>NZD 20,500 to NZD 25,000</td>
    <td>NZD 19,000 to NZD 29,000</td>
    <td>NZD 6,500 to NZD 9,000</td>
  </tr>
  <tr className='trdashed'>
    <td>Australia</td>
    <td>AUD 15,000 to AUD 33,000</td>
    <td>AUD 20,000 to AUD 42,000</td>
    <td>AUD 20,000 to AUD 42,000</td>
  </tr>
  <tr>
    <td>UK</td>
    <td>£10,000 to £20,000</td>
    <td>£10,000 to £20,000</td>
    <td>£15,000 to £24,000</td>
  </tr>
  <tr className='trdashed'>
    <td>US</td>
    <td>USD 20,000 to USD 40,000</td>
    <td>USD 20,000 to USD 45,000</td>
    <td>USD 28,000 to USD 55,000</td>
  </tr>
  <tr>
    <td>Ireland</td>
    <td>€9,850 to €25,500 </td>
    <td>€9,500 to €34,500 </td>
    <td>€9,500 to €34,500</td>
  </tr>
</table>
    <p className='costtostudypara'>You can always apply for various scholarships available for Indian students to bring down your educational expenses when studying abroad.</p>
    <h2 className='costtostudyheading'>2. Where will you stay?</h2>
    <p className='costtostudypara'>You can choose from on-campus residence facilities if your institution offers one, else off-campus accommodation options include sharing apartments with a fellow from India. Remember, the rentals vary from region to region. Your IDP counsellor can help you explore various accommodation options available to you in your study destination.</p>
    <h2 className='costtostudyheading'>3. Know your student visa cost</h2>
    <p className='costtostudypara'>Every country has its own set of rules and costs when it comes to visa. Speak with your IDP counsellor to know the latest updates regarding the student visa procedure of your chosen study destination. </p>
    <p className='costtostudypara'>Know more about student visa procedures in Canada | New Zealand | Australia | UK | US | Ireland </p>
    <h2 className='costtostudyheading'>4. Don’t ignore your living expenses</h2>
    <p className='costtostudypara'>When you stay in a new country, you’ll have to adapt to its culture and ways of living, and this sometimes comes with a cost. Keep some money aside for your everyday expenses, grocery, communication (data and calling) expenses, stationery, utilities, social activities and emergencies. Do keep track of your expenditures to manage your budget well. </p>
    <p className='costtostudypara'>To have a close approximate of what your living expenses when studying abroad may look like, try our cost of living calculator.</p>
    <h2 className='costtostudyheading'>5. Health support is important</h2>
    <p className='costtostudypara'>Make sure you have medical insurance before your program starts, it is mandatory for all students travelling abroad! For instance, the average cost for medical insurance in Canada ranges between CAD 300- CAD 800 a year (indicative). </p>
    <p className='costtostudypara'>Just know that as an international student from India, you will have access to extensive health and support services in every destination. Your counsellor will help you with the health insurance that is right for you. </p>
    <p className='costtostudypara'>Know more about health and support services in
Canada | New Zealand | Australia | UK | US | Ireland</p>
      <h2 className='costtostudyheading'>6. You’ll have to commute</h2>
      <p className='costtostudypara'>Enquire if your institution provides with a shuttle service. If not, you’ll have to rely on the available public transport. Locally, you can make use of regional trains, buses, and subways, the schedule of which is available on the web or government listings. Getting monthly passes for commuting to your institution is an affordable option. </p>
      <h2 className='costtostudyheading'>7. When you earn, you pay taxes</h2>
      <p className='costtostudypara'>Indian students studying abroad are allowed to work for a few hours every week (approx. 20 hrs) during academic sessions and full-time during vacations. Remember, when you earn, you’ll be liable to pay taxes as well. Do ensure if your visa conditions permit working, and check with your counsellor about such opportunities. </p>
      <p className='costtostudypara'>Do consider the exchange rate variations as they may also affect your budgeting. It is a wise idea to look for a part-time job or seek scholarships to lower the cost of studying abroad. </p>
      <div className='costtostudybox'>   <InterviewguidefortheUSF1StudentVisa></InterviewguidefortheUSF1StudentVisa>
               <USAapplicationtimeline></USAapplicationtimeline></div>
     <YourNextStep></YourNextStep> 
     <Footer></Footer>
   </div>

    )
}

export default CosttoStudyAbroad ;
