import React from 'react';
import "../Asserts/Css/Pages/aboutiiec.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const AboutIIEC = ()=>{
    return (
          <div className='aboutiiecpage'>
              <Header></Header>
              <Navbar></Navbar>
            <div className='iiecpgstd'>  <StudyAbroad></StudyAbroad></div>
            <h2 className='aboutiiecmainhead'>About IIEC</h2>
            <h2 className='aboutiiecheading'>WHO WE ARE:</h2>
            <p className='aboutiiecparas'>IIEC is an ISO 9001:2015 compliant International Education and Immigration Consultancy comprising of a vibrant team of energetic, knowledgeable and a fast paced group of skilled counselors who have put wings to the aspirations of over 9000 students and migrants to find their rightful place in the world. We take pride in being Strategic Partners of IDP and the British Council for the IELTS program and boast of having one of the most comprehensive In House Training facility backed by a huge network of resources for a wide spectrum of qualifying exams like the TOEFL, PTE, SAT, GRE, GMAT and ELT to name a few. Our ONE STOP Immigration program has helped people from a diverse range of industries and occupations to migrate and to live in a host of countries all around the world with great ease and comfort. IIEC is an Associate of a registered and very tenured member of CSIC / CCIC / CAPIC who is a Canadian Government-Authorized Study and Immigration Consultant based in Canada. We are one of the most sought after Immigration Experts in India to offer guaranteed success to Permanent Residency through EEP, PNP and the Skilled Migrant Category Visa. The expertise at IIEC extends to all the spheres of Immigration and we specialize in Dependent Visa, Investor Visa, Business Visa, J1, Internship Programs and primarily the Student Visa to name just a few. </p>
            <h2 className='aboutiiecheading'>Why IIEC?
</h2>
<ul className='aboutiiecparaul'>
    <li className='aboutiiecpara'> IIEC has assisted hundreds of students and families to find the right university, college and boarding school in the United States, Canada, the United Kingdom, Australia and others.
</li><br/>
    <li className='aboutiiecpara'>
IIEC has strategic alliances with some of the best academic institutions in all the continents in the world and our staff have a wealth of experience in identifying the most suitable academic institution for you.
</li><br/>
    <li className='aboutiiecpara'>
Our long standing excellence in educational placements based on best practices has made us the leader in International Student Education.
</li><br/>
    <li className='aboutiiecpara'>
Our staff with their professional proficiency and friendly manner will help you you in making the best choice of a university / academic institution. You can experience our cutting edge efficiency as we simplify and make the application process a breeze while offering you up to date and custom made solutions for planning your travel, health & travel insurance, financial arrangements and accommodation in your destination country. </li><br/>
</ul>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

<h2 className='aboutiiecheading'>Our Services Include:</h2>
<ul className='aboutiiecparaul'>
    <li className='aboutiiecpara'> Professional Counseling based on years of experience of International Student Programs.
</li><br/>
    <li className='aboutiiecpara'>Student focused advice on selecting courses, colleges and universities.</li><br/>
    <li className='aboutiiecpara'>Top quality coaching and training in IELTS, TOEFL, PTE, SAT, GRE, GMAT Etc. with exceptional in house facilities and training by industry professionals of repute and high regard.
</li><br/>
    <li className='aboutiiecpara'>Guaranteed Admission in the best courses in Top Colleges and Universities in several countries.
</li><br/>
    <li className='aboutiiecpara'>Most thorough and perfect Visa Guidance and filing process resulting in a consistent track record of successful applications.
</li><br/>
    <li className='aboutiiecpara'>Finding accommodation upon reaching your destination.
</li><br/>
    <li className='aboutiiecpara'>Excellent job placements through our tie up with top HR firms.
</li><br/>
    <li className='aboutiiecpara'>Very comprehensive services for getting guaranteed bank loans.
</li><br/>
    <li className='aboutiiecpara'>Immigration & Re-Settlement Services to many delightful destinations around the world.
</li><br/>
<li className='aboutiiecpara'>Processing Work Permits, Permanent Residency through EEP, PNP and other visas leading to the best lifestyle and</li><br/>
</ul>
<div className='nextstepdiv'></div><YourNextStep></YourNextStep>
           <Footer></Footer>
              </div>
    )
}

export default AboutIIEC ;  