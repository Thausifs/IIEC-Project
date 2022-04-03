import React from 'react';
import "../Asserts/Css/Pages/Touristvisa.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const TouristVISA = ()=>{
    return (
          <div className='Touristvisapage'>
              <Header></Header>
              <Navbar></Navbar>
              <div className='touristvisastd'><StudyAbroad></StudyAbroad></div>
             <h1 className='Touristvisamainhead'>Tourist VISA</h1>
             <p className='Touristvisapara'>Visitor Visa – is for applicants who intend to travel to Canada, Australia, Europe, UK, New Zealand or anywhere across the world as tourists. The visitor visa or Temporary Resident Permit (TRV) is country specific and may be for single entry, multiple entry or transit purposes. Generally, visitor visas may be granted for a renewable period of 6 months.</p>

             <h1 className='Touristvisamainhead'>PRE AND POST LANDING SERVICES</h1>
             <ul className='Touristvisapara' >
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
                 <li>Airport pickup
</li><br/>
                 <li>Stay at Nominal Cost
</li><br/>
                 <li>Assistance for post landing documentation and extensive job search / placement assistance. </li><br/>
             </ul><br/><br/><br/><br/><br/><br/>

             <h1 className='Touristvisamainhead'>BENEFITS TO IMMIGRANTS :</h1>
             <ul className='Touristvisapara'>
                 <li>Recognition of dual citizenship
</li><br/>
                 <li>Live and work in any skill
</li><br/>
                 <li>Citizenship benefits to permanent residents
</li><br/>
                 <li>Medical, education and social benefits

</li><br/>
                 <li>Basic health care free
</li><br/>
                 <li>Education up to Secondary level free
</li><br/>
                 <li>Very small tuition fee for Post Secondary Education
</li><br/>
                 <li>Unemployment allowance after certain period. </li>
             </ul><br/>

<div className='touristvisayns'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default TouristVISA  ;  