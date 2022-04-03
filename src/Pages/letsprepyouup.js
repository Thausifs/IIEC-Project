import React from 'react';
import "../Asserts/Css/Pages/letsprepyouup.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';
import StudyTips from '../Components/studytips';
import ManagingMoney from '../Components/Managingmoney';
import WanttoPack from '../Components/Wanttopack';
import NetworkingandSocialising from '../Components/Networkingandsocialising';
import LetsprepTopbanner from '../Components/Letspreptopbanner';
// ManagingMoney
// StudyTips
// WanttoPack
// NetworkingandSocialising
// LetsprepTopbanner


const LetsPrepYouUp = ()=>{
    return (
        <div className='letsprepyoupage'>
        <Header></Header>
    <Navbar></Navbar>
    <div className='Totaltitlediv'>
   <div className='titlediv'>
    <h2 className='letsprepyoumainhead'>Let’s prep you up!</h2>
    <p className='letsprepyoupara'>So, you’ve chosen your course. Now it’s time to get ready for your life-changing international education experience. There are many things to consider when making the move to your new country – visa, insurance, financial support, accommodation and work opportunities. Since all this may seem overwhelming, IDP’s counsellors are dedicated to support you throughout your journey.</p>
    <h2 className='letsprepyouheading'>Social advice for international students</h2></div>
    <StudyTips></StudyTips> <ManagingMoney></ManagingMoney> <WanttoPack></WanttoPack>
    </div>
  <div className='prepyouupstd'> <StudyAbroad></StudyAbroad></div> 
   
   
   
    <NetworkingandSocialising></NetworkingandSocialising>
    <LetsprepTopbanner></LetsprepTopbanner>
     <YourNextStep></YourNextStep>
     <Footer></Footer>
    </div>

    )
}
export default LetsPrepYouUp ;