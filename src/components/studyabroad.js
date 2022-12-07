import React , {useState} from 'react';
import "../styles/componentscss/studyabroad.css";
import { RegisterUser } from '../Apis/admin';

const StudyAbroad = ({ hgt }) => {
    const [checkboxes, setcheckboxes] = useState({IDPterms:false , Phonecontact : false , Receiveupdates : false});
   


    const submit = async () => {
        try {
          let Firstname = document.getElementById("Firstname").value;
          let Lastname = document.getElementById("Lastname").value;
          let EmailId = document.getElementById("EmailId").value;
          let Mobilenumber = document.getElementById("Mobilenumber").value;
          let Your_preferred_study_destination1 = document.getElementById(
            "Your_preferred_study_destination1"
          ).value;
          let Your_preferred_study_destination2 = document.getElementById(
            "Your_preferred_study_destination2"
          ).value;
          let Nearest_IIEC_office = document.getElementById(
            "Nearest_IIEC_office"
          ).value;
          let Preferred_mode_of_counselling = document.getElementById(
            "Preferred_mode_of_counselling"
          ).value;
          let How_would_you_fund_your_education = document.getElementById(
            "How_would_you_fund_your_education"
          ).value;
          let Preferred_study_level = document.getElementById(
            "Preferred_study_level"
          ).value;
          let idpterms = document.getElementById("idptermsckbox").checked;
          let contactck = document.getElementById("Contactckbox").checked;
          let receiveupdates = document.getElementById(
            "Receiveupdatesckbox"
          ).checked;

          if (
            Firstname.length === 0 ||
            Lastname.length === 0 ||
            EmailId.length === 0 ||
            Mobilenumber.length === 0 ||
            Your_preferred_study_destination1.length === 0 ||
            Your_preferred_study_destination2.length === 0 ||
            Nearest_IIEC_office.length === 0 ||
            Preferred_mode_of_counselling.length === 0 ||
            How_would_you_fund_your_education.length === 0 ||
            Preferred_study_level.length === 0
          ) {
            return alert("Please enter all details ");
          } else if (
            idpterms === false ||
            contactck === false ||
            receiveupdates === false
          ) {
            return alert("Please tick the checkboxes");
          } else {
            let data = {
              First_Name: Firstname,
              Last_name: Lastname,
              Email_id: EmailId,
              Mobile_Number: Mobilenumber,
              Std_destination1: Your_preferred_study_destination1,
              Std_destination2: Your_preferred_study_destination2,
              Nearest_iiecofc: Nearest_IIEC_office,
              Counselling_mode: Preferred_mode_of_counselling,
              Education_fund_src: How_would_you_fund_your_education,
              Study_level: Preferred_study_level,
            };

            let registerdata = await RegisterUser(data);
            const dataresponse = registerdata;
            if (dataresponse.status === 200) {
              alert(dataresponse.data.message);
              window.location.reload();
            } else if (dataresponse.status === 400) {
              alert(dataresponse.data.message);
            } else {
              alert("error while submitting the request");
            }
          }
        } catch (error) {
          alert(error);
        }
          
         
            
       
    } 

  

    return (
      <div className="studyabroad" style={{ height: `${hgt}` }}>
        <div className="studyabroad_inner">
          <div className="studyabroad_title">
            <h1 className="stdabrdh1">Interested in Studying Abroad ?</h1>
          </div>
          <div className="studyabroad_heading">
            <h3 className="stdabdheadthree">
              IIEC can help – fill in your details
              <br /> and we’ll call you back.
            </h3>
          </div>
          <div>
            <input
              id="Firstname"
              className="studyabroad_input"
              placeholder="Firstname"
            ></input>
            <input
              id="Lastname"
              className="studyabroad_input"
              placeholder="Lastname"
            ></input>
            <input
              id="EmailId"
              className="studyabroad_input"
              placeholder="Email Id"
            ></input>
            <input
              id="Mobilenumber"
              className="studyabroad_input"
              placeholder="Mobile number"
            ></input>
            <input
              id="Your_preferred_study_destination1"
              className="studyabroad_input"
              placeholder="Your preferred study destination1"
            ></input>
            <input
              id="Your_preferred_study_destination2"
              className="studyabroad_input"
              placeholder="Your preferred study destination2"
            ></input>
            <input
              id="Nearest_IIEC_office"
              className="studyabroad_input"
              placeholder="Nearest IIEC office"
            ></input>
            <input
              id="Preferred_mode_of_counselling"
              className="studyabroad_input"
              placeholder="Preferred mode of counselling"
            ></input>
            <input
              id="How_would_you_fund_your_education"
              className="studyabroad_input"
              placeholder="How would you fund your education"
            ></input>
            <input
              id="Preferred_study_level"
              className="studyabroad_input"
              placeholder="Preferred study level"
            ></input>

            <div className="studybottomheading">
              <p className="pagebold">
                IIEC will not share your details with others without your
                permission:
              </p>
            </div>
            <ul className="listitemsstudyabrd">
              <li className="listitemsstudyabrdli">
                <input className="checkboxforstudyabroad" type="checkbox" id='idptermsckbox' />I
                agree to IDP Terms and privacy policy{" "}
              </li>
              <br></br>
              <li className="listitemsstudyabrdli">
                <input className="checkboxforstudyabroad" type="checkbox" id="Contactckbox" />
                Please contact me by phone, email or SMS to assist with my
                enquiry
              </li>
              <br></br>
              <li className="listitemsstudyabrdli">
                <input className="checkboxforstudyabroad" type="checkbox" id='Receiveupdatesckbox' />{" "}
                Would like to receive updates and offers from IIEC
              </li>
            </ul>

            <button className="register_buttons" onClick={() => submit()}>
              Register Now
            </button>
          </div>
        </div>
      </div>
    );
}


export default StudyAbroad ;