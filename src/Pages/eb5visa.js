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
                <div className='eb5visapara'>
                    <p>Direct route to permanent residency in the United States for Investors, their spouse and their children under the age of 21.
</p><br/>
                    <p>Freedom for Investors and their family to live, work and retire anywhere in the United States.
</p><br/>
                    <p>Investors and their family can travel to and fro to the United States without a visa.
</p><br/>
                    <p>U.S. citizenship option for the Investors and their family after five years of permanent residency.
</p><br/>
                    <p>Investors can sponsor green cards for family members.
</p><br/>
                    <p>Investors are eligible for all the benefits of U.S. permanent residency status. </p><br/>
                </div>

                <h1 className='eb5visamainhead'>PRE AND POST LANDING SERVICES</h1>
                <div className='eb5visapara'>
                    <p>Evaluation and Assessment
</p><br/>
                    <p>Preparation of Client’s File
</p><br/>
                    <p>Interview Preparation (where required)
</p><br/>
                    <p>Providing orientation session regarding that particular country and its life-style
</p><br/>
                    <p>Personal Guidance for updating your profile.
</p><br/>
                    <p>Formalities at Port of Entry.
</p><br/>
                    <p>Airport pickup</p><br/>
                    <p>Stay at Nominal Cost
</p><br/>
                    <p>Assistance for post landing documentation and extensive job search / placement assistance. </p><br/>
                </div>

                <h1 className='eb5visamainhead'>BENEFITS TO IMMIGRANTS :</h1>
                ,<div className='eb5visapara'>
                    <p>Recognition of dual citizenship
</p>
                    <p>Live and work in any skill
</p>
                    <p>Citizenship benefits to permanent residents
</p>
                    <p>Medical, education and social benefits
</p>
                    <p>Basic health care free
</p>
                    <p>Education up to Secondary level free
</p>
                    <p>Very small tuition fee for Post Secondary Education
</p>
                    <p>Unemployment allowance after certain period.    </p>
                </div>
<div className='yournextstepeb5'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default EB5VISA  ;  