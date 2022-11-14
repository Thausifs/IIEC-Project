import React from 'react';
import "../../styles/pagescss/studyabroadpg/costtostudyabroadpg.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';


const  GuidetoStudyAbroad =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
            <p className="mainhead">How much does it cost to study abroad?</p>
            <p className='pageparabold'>Wondering how much money you need? We’ll help you budget it out!</p>
            <p className='pagepara'>You’ve decided to study abroad and explore the world, that’s great! Now let’s get you started with a list of estimates so you know where to spend your money. Our guide will help you plan your budget and manage your finances with ease, without having to worry at all. And yes, we’ve covered basic all expenses like accommodation, food, health coverage, communication and travel as well! </p>
            <p className="pagebold">1. Tuition fee is your primary expense</p>
            <p className='pagepara'>This is the most important and major chunk of your study abroad expenses and depends on the type of qualification and institution you opt for. Here’s a quick overview of the tuition fee for different programs in our top destinations.</p>
            <table className='tablediv'>
  <tr>
    <th className='costtostudythtablediv'>Destination</th>
    <th className='costtostudythtablediv'>Undergraduate Program (annually)</th>
    <th className='costtostudythtablediv'>Postgraduate master's degree (annually)</th>
    <th className='costtostudythtablediv'>Doctoral degree (annually)</th>
  </tr>
  <tr className='trdashed'>
    <td className='costtostudytdtablediv'>Canada</td>
    <td className='costtostudytdtablediv'>CAD 13,000 to CAD 20,000</td>
    <td className='costtostudytdtablediv'>CAD 17,000 to CAD 25,000</td>
    <td className='costtostudytdtablediv'>CAD 7,000 to CAD 15,000</td>
  </tr>
  <tr>
    <td className='costtostudytdtablediv'>New Zealand</td>
    <td className='costtostudytdtablediv'>NZD 20,500 to NZD 25,000</td>
    <td className='costtostudytdtablediv'>NZD 19,000 to NZD 29,000</td>
    <td className='costtostudytdtablediv'>NZD 6,500 to NZD 9,000</td>
  </tr>
  <tr className='trdashed'>
    <td className='costtostudytdtablediv'>Australia</td>
    <td className='costtostudytdtablediv'>AUD 15,000 to AUD 33,000</td>
    <td className='costtostudytdtablediv'>AUD 20,000 to AUD 42,000</td>
    <td className='costtostudytdtablediv'>AUD 20,000 to AUD 42,000</td>
  </tr>
  <tr>
    <td className='costtostudytdtablediv'>UK</td>
    <td className='costtostudytdtablediv'>£10,000 to £20,000</td>
    <td className='costtostudytdtablediv'>£10,000 to £20,000</td>
    <td className='costtostudytdtablediv' >£15,000 to £24,000</td>
  </tr>
  <tr className='trdashed'>
    <td className='costtostudytdtablediv'>US</td>
    <td className='costtostudytdtablediv'>USD 20,000 to USD 40,000</td>
    <td className='costtostudytdtablediv'>USD 20,000 to USD 45,000</td>
    <td className='costtostudytdtablediv'>USD 28,000 to USD 55,000</td>
  </tr>
  <tr>
    <td className='costtostudytdtablediv'>Ireland</td>
    <td className='costtostudytdtablediv'>€9,850 to €25,500 </td>
    <td className='costtostudytdtablediv'>€9,500 to €34,500 </td>
    <td className='costtostudytdtablediv'>€9,500 to €34,500</td>
  </tr>
</table>
<p className='pagepara'>You can always apply for various scholarships available for Indian students to bring down your educational expenses when studying abroad.</p>
<p className='pagebold'>2. Where will you stay?</p>
<p className='pagepara'>You can choose from on-campus residence facilities if your institution offers one, else off-campus accommodation options include sharing apartments with a fellow from India. Remember, the rentals vary from region to region. Your IDP counsellor can help you explore various accommodation options available to you in your study destination.</p>
<p className='pagebold'>3. Know your student visa cost</p>
<p className='pagepara'>Every country has its own set of rules and costs when it comes to visa. Speak with your IDP counsellor to know the latest updates regarding the student visa procedure of your chosen study destination. </p>
<p className='pagepara'>Know more about student visa procedures in<br/>
Canada | New Zealand | Australia | UK | US | Ireland </p>



            </div>
            <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
    <p className='pagebold'>4. Don’t ignore your living expenses</p>
<p className='pagepara'>When you stay in a new country, you’ll have to adapt to its culture and ways of living, and this sometimes comes with a cost. Keep some money aside for your everyday expenses, grocery, communication (data and calling) expenses, stationery, utilities, social activities and emergencies. Do keep track of your expenditures to manage your budget well. </p>
<p className='pagepara'>To have a close approximate of what your living expenses when studying abroad may look like, try our cost of living calculator.</p>
<p className='pagebold'>5. Health support is important</p>
<p className='pagepara'>Make sure you have medical insurance before your program starts, it is mandatory for all students travelling abroad! For instance, the average cost for medical insurance in Canada ranges between CAD 300- CAD 800 a year (indicative). </p>
<p className='pagepara'>Just know that as an international student from India, you will have access to extensive health and support services in every destination. Your counsellor will help you with the health insurance that is right for you. </p>
<p className='pagepara'>
Know more about health and support services in<br/>
Canada | New Zealand | Australia | UK | US | Ireland</p>
<p className='pagebold'>6. You’ll have to commute</p>
<p className='pagepara'>Enquire if your institution provides with a shuttle service. If not, you’ll have to rely on the available public transport. Locally, you can make use of regional trains, buses, and subways, the schedule of which is available on the web or government listings. Getting monthly passes for commuting to your institution is an affordable option. </p>
<p className='pagebold'>7. When you earn, you pay taxes</p>
<p className='pagepara'>Indian students studying abroad are allowed to work for a few hours every week (approx. 20 hrs) during academic sessions and full-time during vacations. Remember, when you earn, you’ll be liable to pay taxes as well. Do ensure if your visa conditions permit working, and check with your counsellor about such opportunities. </p>
<p className='pagepara'>
Do consider the exchange rate variations as they may also affect your budgeting. It is a wise idea to look for a part-time job or seek scholarships to lower the cost of studying abroad. </p>
    </div>
    <div className='dis_flex  pd_lt_rt ' style={{gap:"2vw"}}>
         <Card  icon="Studyabroadintakes" title="Study abroad intakes" content="Did you know academic year in universities abroad differ from the ones in India? Most universities offer two major intakes for the students aspiring to study abroad – Spring intake and fall intake. Let’s help you know all about it."></Card>
              <Card  icon="timelinefor2022intakes" title="Timeline for 2022 intakes " content="Here is a list of resources for parents to support and prepare your child for studying abroad."></Card>
         </div>
         <YourNextStep/>
    <Footer/>
    </div>
    )}

export default GuidetoStudyAbroad ;