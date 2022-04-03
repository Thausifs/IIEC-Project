import React from 'react';
import "../Asserts/Css/Pages/DependentVISASpouse.css";
import Header from '../Components/header';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import StudyAbroad from '../Components/StudyAbroad';
import YourNextStep from '../Components/YourNextStep';


const DependentVISASpouse = ()=>{
    return (
          <div className='dependentvisaspousepage'>
              <Header></Header>
              <Navbar></Navbar>
              <StudyAbroad></StudyAbroad>
            <h1 className='dependentvisaspousemainhead'>Dependent VISA</h1>
                <h2 className='dependentvisaspouseheading'>SPOUSE / DEPENDENT VISAS.</h2>
                <p className='dependentvisaspousepara'>Spouse Visa, Dependent Visa, Family Visa, Child Visa are a category of Dependent Visas under which a family such as a  spouse or partner, child, and/or elderly dependent relative, can join a visa holder (Sponsor), who is already overseas or is going overseas under an eligible visa category. Anyone who is on a work visa or a permanent, resident visa is permitted to take their family along. Dependent Visa / Spouse Visa application is simple and its success is dependent on genuine intent, correct documentation & accurate forms.

</p>
               <p className='dependentvisaspousepara' >There are specific limitations on the dependents, based on the visa held by the sponsor such as the age of the dependents and the length of the relationship they share with the principal applicant who is settled overseas. Dependents may or may not be permitted to work. It depends on which country they are applying to and which visa category they fall under. Example: H1 Visa dependent / spouses are not permitted to work, while UK allows dependents of work permit holders to work.
</p>
            <h1 className='dependentvisaspousemainhead'>Eligible Dependents for Spouse/Dependent Visa:</h1>
            <ul className='dependentvisaspousepara'>
                <li>Spouse / Partner.
</li>
                <li>Fiance.
</li>
                <li>
Same-sex civil partners, proposed same-sex civil partners.
</li>
                <li>Unmarried Partners.</li>
                <li>Children. (Age Criteria applies.)
</li>
                <li>Siblings.
</li>
                <li>Aged Parent and Grandparents aged 65 years and above. </li>
            </ul>

            <h1 className='dependentvisaspousemainhead'>Duration:</h1>
            <p className='dependentvisaspousepara'>The Spouse Visa, Dependent Visa, Family Visa, Child Visa holder is permitted to stay overseas as long as the sponsor holds a valid visa.</p>
            <h1 className='dependentvisaspousemainhead'>Requirements:</h1>
            <ul className='dependentvisaspousepara'>
                <li>Demonstrate that the person applying is related to the Sponsor and is financially dependent on the sponsor.
</li>
                <li>Demonstrate that the sponsor will be able to financially support and accommodate himself and his/her dependents without having recourse to public Funds. </li>
            </ul>
<YourNextStep></YourNextStep>
           <Footer></Footer>
              </div>
    )
}

export default DependentVISASpouse ;  