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
              <div className='Touristvisastd'><StudyAbroad></StudyAbroad></div>
             <h1 className='Touristvisamainhead'>Tourist VISA</h1>
             <p className='Touristvisapara'>Visitor Visa – is for applicants who intend to travel to Canada, Australia, Europe, UK, New Zealand or anywhere across the world as tourists. The visitor visa or Temporary Resident Permit (TRV) is country specific and may be for single entry, multiple entry or transit purposes. Generally, visitor visas may be granted for a renewable period of 6 months.</p>

             <h1 className='Touristvisamainhead'>PRE AND POST LANDING SERVICES</h1>
             <div className='Touristvisapara' >
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
                 <p>Airport pickup
</p><br/>
                 <p>Stay at Nominal Cost
</p><br/>
                 <p>Assistance for post landing documentation and extensive job search / placement assistance. </p><br/>
             </div>

             <h1 className='Touristvisamainhead'>BENEFITS TO IMMIGRANTS :</h1>
             <div className='Touristvisapara'>
                 <p>Recognition of dual citizenship
</p><br/>
                 <p>Live and work in any skill
</p><br/>
                 <p>Citizenship benefits to permanent residents
</p><br/>
                 <p>Medical, education and social benefits

</p><br/>
                 <p>Basic health care free
</p><br/>
                 <p>Education up to Secondary level free
</p><br/>
                 <p>Very small tuition fee for Post Secondary Education
</p><br/>
                 <p>Unemployment allowance after certain period. </p>
             </div><br/>

<div className='touristvisayns'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default TouristVISA  ;  