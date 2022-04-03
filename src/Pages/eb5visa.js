import React from 'react';
import "../Asserts/Css/Pages/eb5visa.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const EB5VISA = ()=>{
    return (
          <div className='eb5visapage'>
              <Header></Header>
              <Navbar></Navbar>
           <div className='eb5visastd'><StudyAbroad></StudyAbroad></div>
                <h1 className='eb5visamainhead'>EB5 VISA </h1>
                <h2 className='eb5visaheadings'>EB-5 Investor Visa Program applies to Investing in the U.S.A.</h2>
                <ul className='eb5visapara'>
                    <li>Direct route to permanent residency in the United States for Investors, their spouse and their children under the age of 21.
</li><br/>
                    <li>Freedom for Investors and their family to live, work and retire anywhere in the United States.
</li><br/>
                    <li>Investors and their family can travel to and fro to the United States without a visa.
</li><br/>
                    <li>U.S. citizenship option for the Investors and their family after five years of permanent residency.
</li><br/>
                    <li>Investors can sponsor green cards for family members.
</li><br/>
                    <li>Investors are eligible for all the benefits of U.S. permanent residency status. </li><br/>
                </ul><br/><br/><br/><br/><br/><br/><br/>

                <h1 className='eb5visamainhead'>PRE AND POST LANDING SERVICES</h1>
                <ul className='eb5visapara'>
                    <li>Evaluation and Assessment
</li><br/>
                    <li>Preparation of Client’s File
</li><br/>
                    <li>Interview Preparation (where required)
</li><br/>
                    <li>Providing orientation session regarding that particular country and its life-style
</li><br/>
                    <li>Personal Guidance for updating your profile.
</li><br/>
                    <li>Formalities at Port of Entry.
</li><br/>
                    <li>Airport pickup</li><br/>
                    <li>Stay at Nominal Cost
</li><br/>
                    <li>Assistance for post landing documentation and extensive job search / placement assistance. </li><br/>
                </ul><br/><br/><br/><br/><br/><br/><br/>

                <h1 className='eb5visamainhead'>BENEFITS TO IMMIGRANTS :</h1>
                ,<ul className='eb5visapara'>
                    <li>Recognition of dual citizenship
</li>
                    <li>Live and work in any skill
</li>
                    <li>Citizenship benefits to permanent residents
</li>
                    <li>Medical, education and social benefits
</li>
                    <li>Basic health care free
</li>
                    <li>Education up to Secondary level free
</li>
                    <li>Very small tuition fee for Post Secondary Education
</li>
                    <li>Unemployment allowance after certain period.    </li>
                </ul>
<div className='yournextstepeb5'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default EB5VISA  ;  