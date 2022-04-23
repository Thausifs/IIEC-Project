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
            <div className='businessvisapara'>
                <p>Evaluation and Assessment of eligibility.
</p><br/>
                <p>Preparation of Client’s File.
</p><br/>
                <p>Preparing thoroughly for interviews. (Where required)
</p><br/>
                <p>Providing orientation sessions about the destination country and its life-style.
</p><br/>
                <p>Personal Guidance on updating client's profile and resume to make it marketable worldwide.</p>
                <p>Formalities at the Port of Entry.
</p><br/>
                <p>Airport pickup at destination.
</p><br/>
                <p>
Initial stay at a Nominal Cost at the destination.
</p><br/>
                <p>Assistance for post landing documentation and extensive job search / placement assistance.
</p><br/>
            </div>

            <h1 className='businessvisamainhead'>BENEFITS TO IMMIGRANTS :</h1>
            <div className='businessvisapara'>
                <p>Recognition of dual citizenship.
</p>
                <p>Live and work in any occupation of your choice.</p>
                <p>Several Citizenship Benefits to permanent residents.
</p>
                <p>
Medical, education and social benefits.
</p>
                <p>FREE Basic Comprehensive Health care.
</p>
                <p>FREE Education up to Secondary level.
</p>
                <p>Very small tuition fees for Post Secondary Education for Self and Dependents.
</p>
                <p>Unemployment Allowance after a certain period. </p>
            </div>


<div className='yournextstepdBvisa'><YourNextStep></YourNextStep></div>
           <Footer></Footer>
              </div>
    )
}

export default BusinessVISA ;  