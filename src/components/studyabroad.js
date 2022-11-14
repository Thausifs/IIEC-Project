import React, {useState} from 'react';
import "../styles/componentscss/studyabroad.css";
import Axios from 'axios';

const StudyAbroad= ({hgt}) => {
    const url ="https://iiec-client.herokuapp.com/register"
    const[data,setdata]=useState({
        Firstname:"",
        Lastname:"",
        EmailId:"",  
        Mobilenumber:"",  
        Your_preferred_study_destination1:"",  
        Your_preferred_study_destination2:"",  
        Nearest_IIEC_office:"",  
        Preferred_mode_of_counselling:"",  
        How_would_you_fund_your_education:"",  
        Preferred_study_level:"",  
       
    })
    const[check, setcheck]=useState({
        
    })
    function submit(e) {
        if (data.Firstname.length === 0  || data.Lastname.length == 0  || data.EmailId.length == 0   || data.Mobilenumber.length == 0  ||  data.Your_preferred_study_destination1.length == 0  || data.Your_preferred_study_destination2.length == 0  || data.Nearest_IIEC_office.length == 0  || data.Preferred_mode_of_counselling.length == 0 || data.How_would_you_fund_your_education.length == 0 || data.Preferred_study_level.length == 0       ){
          alert("Please enter all details ");
        }
       
       
        e.preventDefault();
        Axios.post(url,{
            Firstname:data.Firstname,
            Lastname:data.Lastname,
            EmailId:data.EmailId,
            Mobilenumber:data.Mobilenumber,
            Your_preferred_study_destination1:data.Your_preferred_study_destination1,
            Your_preferred_study_destination2:data.Your_preferred_study_destination2,
            Nearest_IIEC_office:data.Nearest_IIEC_office,
            Preferred_mode_of_counselling:data.Preferred_mode_of_counselling,
            How_would_you_fund_your_education:data.How_would_you_fund_your_education,
            Preferred_study_level:data.Preferred_study_level,
           
        })
        // .then(res => {
        //     console.log(res.data),
        //     alert("Submitted Sucessfully")
        // })
    }
    function handle(e) {
        const newdata = {...data}
         newdata[e.target.id] = e.target.value 
         setdata(newdata)
         console.log(newdata)
    }
    
    
    function checkboxHandle(e){
        console.log(e.target.checked);

    // document.getElementById("chkbox").checked

   }
   
  

    return (
        <div className='studyabroad' style={{height:`${hgt}`}}>
            <div className='studyabroad_inner'>
                <div className='studyabroad_title'>
                 <h1 className='stdabrdh1'>Interested in Studying Abroad ?</h1>
                  </div>
                 <div className='studyabroad_heading'>
                 <h3 className='stdabdheadthree'>IIEC can help – fill in your details<br/> and we’ll call you back.</h3>
                 </div>
                  <form onSubmit={(e) => submit(e)}>
                  <input  id="Firstname"   className='studyabroad_input' onChange={(e)=>handle(e)} value={data.Firstname} placeholder='Firstname'   ></input>
                  <input id="Lastname" className='studyabroad_input' onChange={(e)=>handle(e)} value={data.Lastname}  placeholder='Lastname'></input>
                  <input id="EmailId" className='studyabroad_input'  onChange={(e)=>handle(e)} value={data.EmailId}  placeholder='Email Id'></input>
                  <input id="Mobilenumber" className='studyabroad_input' onChange={(e)=>handle(e)} value={data.Mobilenumber} placeholder='Mobile number'></input>
                  <input id="Your_preferred_study_destination1" className='studyabroad_input' onChange={(e)=>handle(e)} value={data.Your_preferred_study_destination1} placeholder='Your preferred study destination1'></input>
                  <input id="Your_preferred_study_destination2" className='studyabroad_input' onChange={(e)=>handle(e)} value={data.Your_preferred_study_destination2} placeholder='Your preferred study destination2'></input>
                  <input id="Nearest_IIEC_office" className='studyabroad_input' onChange={(e)=>handle(e)} value={data.Nearest_IIEC_office} placeholder='Nearest IIEC office'></input>
                  <input id="Preferred_mode_of_counselling" className='studyabroad_input' onChange={(e)=>handle(e)} value={data.Preferred_mode_of_counselling} placeholder='Preferred mode of counselling'></input>
                  <input id="How_would_you_fund_your_education" className='studyabroad_input' onChange={(e)=>handle(e)} value={data.How_would_you_fund_your_education} placeholder='How would you fund your education'></input>
                  <input id="Preferred_study_level" className='studyabroad_input' onChange={(e)=>handle(e)} value={data.Preferred_study_level} placeholder='Preferred study level'></input>
             
                  <div className='studybottomheading'>
                 <p className='pagebold'>IIEC will not share your details with others without your permission:
                 </p></div>
                 <ul className='listitemsstudyabrd'>
                     <li className='listitemsstudyabrdli'><input className='checkboxforstudyabroad' type="checkbox" onClick={(e)=>checkboxHandle(e)}/>I agree to IDP Terms and privacy policy </li><br></br>
                     <li className='listitemsstudyabrdli'><input className='checkboxforstudyabroad' type="checkbox"/>Please contact me by phone, email or SMS to assist with my enquiry</li><br></br>
                     <li className='listitemsstudyabrdli'><input className='checkboxforstudyabroad' type="checkbox"/> would like to receive updates and offers from IIEC</li>
                     
                 </ul>
                 
                  <button className='register_buttons'>Register Now</button>
                  </form>
             </div>
        </div>
    )
}


export default StudyAbroad ;