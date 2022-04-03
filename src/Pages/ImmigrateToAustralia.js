import React from 'react';
import "../Asserts/Css/Pages/Immigratetoaustralia.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const ImmigrateToAustralia = ()=>{
    return (
          <div className='Immigratetoaustraliapage'>
              <Header></Header>
              <Navbar></Navbar>
             <div className='Immigratetoaustraliastd'><StudyAbroad></StudyAbroad></div> 
             <h1 className='Immigratetoaustraliamainhead'>Immigrate To Australia</h1>
             <p className='Immigratetoaustraliaheading'>Australia is a land burgeoning with employment opportunities and welcomes a large amount of immigrants for skilled work every year. All Skilled Worker Visas (apart from subclass 457) require the candidate to be under 50 years of age unless exempt. Skilled Worker Visas are divided into subclasses based on different factors of qualification and type of occupation:
</p>
             <h1 className='Immigratetoaustraliamainhead'>Temporary Work(Skilled) Visa(subclass 457):</h1>
             <p className='Immigratetoaustraliapara'>This visa allows skilled work for the duration of 4 years in the country. A Skilled Worker with an occupation listed under the ‘Consolidated Skilled Occupations List’ is the main requirement for this visa. A sponsorship from a legitimate business in Australia is also necessary.
</p> 
               <h1 className='Immigratetoaustraliaheading'>Employer Nomination Scheme(ENS) Visa(subclass 186):
</h1>
<p className='Immigratetoaustraliapara'>
This is a permanent residence scheme that requires completion of a skill assessment test by Australian authorities and three years of prior work experience. The visa candidate must be paid a same or larger salary than an Australian in the same occupation. As in the case of a Temporary Work Visa, the occupation must be listed under the ‘Consolidated Skilled Occupations List’ of Australi</p>
<h1 className='Immigratetoaustraliamainhead'>Regional Sponsored Migration Scheme Visa (RSMS)(subclass 187):
</h1>
<p className='Immigratetoaustraliapara'>
RSMS features a permanent residence scheme for Skilled Workers who wish to work in one of the country’s regional areas. The three sub-categories in this visa include Temporary Residence Transition, Direct Entry Stream, and Agreement Stream. The occupation in the regional area must be offered to the candidate by the respective employer in the regional area. The visa candidate must be paid a same or larger salary than an Australian in the same occupation.
</p>
<h1 className='Immigratetoaustraliaheading'>Skilled Independent Visa(subclass 189):
</h1>
<p className='Immigratetoaustraliapara'>This visa requires the candidate to score 60 points in his qualification assessment and pass the Australian authorities’ skills assessment test. The visa has the advantage of enabling the visa holder to live and work anywhere in the country without receiving a sponsorship from the Australian employer.
</p>
<h1 className='Immigratetoaustraliaheading'>Skilled Nominated Visa(subclass 190):
</h1>
<p className='Immigratetoaustraliapara'>The applicant for this visa must have adequate points in his qualification assessment and be nominated by one of Australia’s states/territories. The particular state/territory sponsors the visa holder and he is allowed specific privileges in that state/territory such as permanent residence for family members.
</p>
<h1 className='Immigratetoaustraliaheading'>
Skilled Regional(Provisional) Visa(subclass 489):
</h1>
<p className='Immigratetoaustraliapara'>
This visa allows persons to work in the regional/outskirt areas of Australia for a duration of up to four years. The person is either nominated by the region/outskirt or sponsored by an individual living in the region nominating the candidate. The candidate will be points tested and need to pass a skills assessment by Australian authorities.
</p>


<YourNextStep></YourNextStep>
           <Footer></Footer>
              </div>
    )
}

export default ImmigrateToAustralia  ;  