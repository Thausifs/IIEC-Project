import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import StudyAbroad from '../../../components/studyabroad';
import YourNextStep from '../../../components/yournextstep';



const  DependentVISA =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
        <p className='mainhead'>Dependent VISA</p>
              <p className='pagebold'>Business Immigration</p>
              <p className='pagepara'>The world has reinvented itself into a Global Village and Globalization has transformed the geographical boundaries into trade blocs. Advancements in technology, ground breaking developments in transportation systems and creation of seamless global businesses has opened up a phenomenal demand for the World Savvy businessman to go out there and grow without limits. Developed countries like Canada, USA, Europe, Australia, New Zealand, Singapore, Denmark, Ukraine and Czech are a few top countries that offer excellent opportunities to attract potential investors to establish new businesses or expand/diversify their existing business globally. Businessmen with proven track records and Entrepreneurs who are seeking to stamp an indelible mark on the global business front can now easily migrate abroad and make the world of global economies their showcase. We at IIEC can help you achieve your dream of creating an International Enterprise that will re-write the benchmark standards of Global Trade.</p>
              <p className='pagebold'>IIEC Services include:</p>
              <p className='pagebold'>PRE-DEPARTURE AND POST LANDING SERVICES :</p>
                <ul className='pagepara'>
                    <li>Evaluation and Assessment of eligibility.
</li>
                    <li>Preparation of Client’s File.
    </li>
                    <li>Preparing thoroughly for interviews. (Where required)
</li>
                    <li>Providing orientation sessions about the destination country and its life-style.
</li>
                    <li>Personal Guidance on updating client's profile and resume to make it marketable worldwide.
</li>
                    <li>Formalities at the Port of Entry.
    </li>
                    <li>Airport pickup at destination.
</li>
                    <li>Initial stay at a Nominal Cost at the destination.
</li>
                    <li>Assistance for post landing documentation and extensive job search / placement assistance.
</li>
                </ul>

                <p className='pagebold'>BENEFITS TO IMMIGRANTS :</p>
                <ul className='pagepara'>
                    <li>Recognition of dual citizenship.
</li>
                    <li>Live and work in any occupation of your choice.
</li>
                    <li>Several Citizenship Benefits to permanent residents.
</li>
                    <li>Medical, education and social benefits.
</li>
                    <li>FREE Basic Comprehensive Health care.
</li>
                    <li>FREE Education up to Secondary level.
</li>
                    <li>Very small tuition fees for Post Secondary Education for Self and Dependents.
</li>
                    <li>Unemployment Allowance after a certain period. </li>


        </ul>
        </div>
        <div className='flex-container'><StudyAbroad hgt="110vw"/></div>
    </div>
    
      
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default DependentVISA ; 