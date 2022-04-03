import React from 'react';
import "../Asserts/Css/ComponentsCss/Studyabroad.css";

const StudyAbroad= () => {
    return (
        <div className='studyabroad'>
            <div className='studyabroad_inner'>
                <div className='studyabroad_title'>
                 <h1>Interested in Studying Abroad ?</h1>
                  </div>
                 <div className='studyabroad_heading'>
                 <h3 className='stdabdheadthree'>IICE can help – fill in your details<br/> and we’ll call you back.</h3>
                 </div>
             
                  <input  id="studyabroadscom"   className='studyabroad_input ' placeholder='First name'   ></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder='Last name'></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder='Email Id'></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder='Mobile number'></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder='Your preferred study destination'></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder='Your preferred study destination'></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder='Nearest IIEC office'></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder='Preferred mode of counselling'></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder=' How would you fund your education?'></input>
                  <input id="studyabroadscom" className='studyabroad_input' placeholder='Preferred study level?'></input>
             
                  <div className='studybottomheading'>
                 <h3>IIEC will not share your details with others without your permission:
                 </h3>
                 <ul>
                     <li><input type="checkbox"/>I agree to IDP Terms and privacy policy </li><br></br>
                     <li><input type="checkbox"/>Please contact me by phone, email or SMS to assist with my enquiry</li><br></br>
                     <li><input type="checkbox"/> would like to receive updates and offers from IIEC</li>
                     
                 </ul>
                 </div>
                  <button className='register_button'>Register Now</button>
             </div>
        </div>
    )
}


export default StudyAbroad ;