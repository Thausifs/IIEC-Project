import React from 'react';
import "../Asserts/Css/Pages/businessvisa.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const BusinessVISA = ()=>{
    return (
       

        <div className='businessvisapage'>
              <Header></Header>
              <Navbar></Navbar>
              <div className='businessvisastd'><StudyAbroad></StudyAbroad></div>
            <h1 className='businessvisamainhead'>Business VISA</h1>
            <h2 className='businessvisaheading'>Business Immigration</h2>
            <p className='businessvisapara'>The world has reinvented itself into a Global Village and Globalization has transformed the geographical boundaries into trade blocs. Advancements in technology, ground breaking developments in transportation systems and creation of seamless global businesses has opened up a phenomenal demand for the World Savvy businessman to go out there and grow without limits. Developed countries like Canada, USA, Europe, Australia, New Zealand, Singapore, Denmark, Ukraine and Czech are a few top countries that offer excellent opportunities to attract potential investors to establish new businesses or expand/diversify their existing business globally. Businessmen with proven track records and Entrepreneurs who are seeking to stamp an indelible mark on the global business front can now easily migrate abroad and make the world of global economies their showcase. We at IIEC can help you achieve your dream of creating an International Enterprise that will re-write the benchmark standards of Global Trade.</p>
            <h2  className='businessvisaheading'>IIEC Services include:</h2>
            <h1 className='businessvisamainhead'>PRE-DEPARTURE AND POST LANDING SERVICES :</h1>
            <ul className='businessvisapara'>
                <li>Evaluation and Assessment of eligibility.
</li><br/>
                <li>Preparation of Client’s File.
</li><br/>
                <li>Preparing thoroughly for interviews. (Where required)
</li><br/>
                <li>Providing orientation sessions about the destination country and its life-style.
</li><br/>
                <li>Personal Guidance on updating client's profile and resume to make it marketable worldwide.</li>
                <li>Formalities at the Port of Entry.
</li><br/>
                <li>Airport pickup at destination.
</li><br/>
                <li>
Initial stay at a Nominal Cost at the destination.
</li><br/>
                <li>Assistance for post landing documentation and extensive job search / placement assistance.
</li><br/>
            </ul><br/><br/><br/><br/><br/><br/><br/><br/>

            <h1 className='businessvisamainhead'>BENEFITS TO IMMIGRANTS :</h1>
            <ul className='businessvisapara'>
                <li>Recognition of dual citizenship.
</li>
                <li>Live and work in any occupation of your choice.</li>
                <li>Several Citizenship Benefits to permanent residents.
</li>
                <li>
Medical, education and social benefits.
</li>
                <li>FREE Basic Comprehensive Health care.
</li>
                <li>FREE Education up to Secondary level.
</li>
                <li>Very small tuition fees for Post Secondary Education for Self and Dependents.
</li>
                <li>Unemployment Allowance after a certain period. </li>
            </ul>


<div className='yournextstepdBvisa'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default BusinessVISA ;  