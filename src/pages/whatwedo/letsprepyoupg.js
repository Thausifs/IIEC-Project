import React from 'react';
// import "../../styles/pagescss/studyabroadpg/guidetostudyabroad.css";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import StudyAbroad from '../../components/studyabroad';
import Card from '../../components/card.js';
import YourNextStep from '../../components/yournextstep';
import BottomBannerfirst from '../../components/bottombannerfirst';


const  LetsPrepYouUp =() =>{
  return(
   <div className="page">
    <Header/>
    <Navbar/>
    <div className='dis_flex'>
        <div className="flex-container">
               <p className="mainhead">Let’s prep you up!</p>
               <p className="pagepara">So, you’ve chosen your course. Now it’s time to get ready for your life-changing international education experience. There are many things to consider when making the move to your new country – visa, insurance, financial support, accommodation and work opportunities. Since all this may seem overwhelming, IDP’s counsellors are dedicated to support you throughout your journey.</p>
               <p className='mainhead'>Social advice for international students</p>
               <Card  icon="studytips" title="Study tips" content="As an international student, it is important to understand how to maintain a balance between your academic and social life. These tips will help you skip the last minute stress."></Card>
               <Card  icon="Managingmoney" title="Managing money" content="It can be hard to manage expenses and budgeting on your own. Our financial survival guide is here to help you plan your money well."></Card>
               <Card  icon="wanttopack" title="What to pack" content="Being organised when you are packing will save you a lot of time and hassle in your new country. Our checklist will ensure you don’t miss anything out."></Card>
               <Card  icon="NetworkingandSocialising" title="Networking and socialising" content="Learn how to network and socialise for a successful professional life. These simple tips will help you get out and about."></Card>
        </div>
        <div className='flex-container'><StudyAbroad hgt="120vw"/></div>
    </div>
    <div className='pagebtmcon'>
        <BottomBannerfirst/>
    </div>
    
        <YourNextStep/>
        <Footer/>

   </div>


  )
} 
export default LetsPrepYouUp 