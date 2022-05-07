import React , {useState} from 'react';
import "../Asserts/Css/ComponentsCss/footer.css";
import Axios from 'axios';

const Footer=()=>{

    const[data,setdata]=useState({
        name_placehd:"",
        phone_placehd:"",
        email_pd:"",  
        Mobilenumber:"",  
        description_pd:"",  
        
       
    })
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            Firstname:data.name_placehd,
            Lastname:data.phone_placehd,
            EmailId:data.email_pd,
            sub_pd:data.Mobilenumber,
            Your_preferred_study_destination1:data.description_pd,

        })
        .then(res => {
            console.log(res.data)
        })
    }
    function handle(e) {
        const newdata = {...data}
         newdata[e.target.id] = e.target.value 
         setdata(newdata)
         console.log(newdata)
    }
    return(
        <div className='footer_div'>
            <div className='footer_first'>
                <div className='mainlinks'>
                    <h3 className='footertitleheading'>MAIN LINKS </h3>
                     <ul>
                         <li className='footerli'><a>About IIEC</a></li><br/>
                         <li className='footerli'> <a>Students Testimonials</a></li><br/>
                         <li className='footerli'><a>Video Testimonials</a></li>
                         <li className='footerli'> <a>Gallery</a></li><br></br>
                         <li className='footerli'><a>Contact us</a></li>
                     </ul>
                 </div>
                 <div className='visa'>
                 <h3 className='footertitleheading'>VISA</h3>
                 <ul>
                         <li className='footerli'><a>Investor VISA</a></li><br/>
                         <li className='footerli'> <a>Dependent VISA</a></li><br/>
                         <li className='footerli'><a>EB5 VISA</a></li><br/>
                         <li className='footerli'> <a>Tourist VISA</a></li><br/>
                        
                     </ul>
                 </div>
                 
                 <div className='EDUCATION'>
                 <h3 className='footertitleheading'>EDUCATION </h3>
                 <ul>
                         <li className='footerli'><a>Study in Canada</a></li><br/>
                         <li className='footerli'> <a>Study in Australia</a></li><br></br>
                         <li className='footerli'><a>Study in UK</a></li>
                    
                        
                     </ul>
                 </div>
                 <div className='IMMIGRATION'>
                 <h3 className='footertitleheading'>IMMIGRATION </h3>
                 <ul>
                         <li className='footerli'><a>Terms and condition</a></li><br/>
                         <li className='footerli'> <a>Privacy Policy</a></li><br></br>
                         <li className='footerli'><a>Study in UK</a></li>
                           </ul>
                 </div>
                 
                
            </div>
            
            <div className='footer_second'>
                <h2 className='footerquestionhead'>Have a Question?</h2>
                <form onSubmit={(e) => submit(e)}>
                <input id="name_placehd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.name_placehd} placeholder='Name'></input>
                <input id="phone_placehd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.phone_placehd} placeholder='Phone'></input>
                <input id="email_pd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.email_pd} placeholder='E-mail'></input>
                <input id="sub_pd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.sub_pd} placeholder='Subject'></input>
                <input id="description_pd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.description_pd} placeholder='Description'></input><br/>
                <button className='msg'>SEND MESSAGE</button>
            
                </form>
            </div>
           
         
             <div className='footer_third'>
              <p className='phno'>+91 98415 12043</p>
              <a className='media'>Social Media</a>
               <br/>
              <a className='mail'>iiecservice@gmail.com</a>
              <p className='copyrights'>@ 2022 IIEC</p>
             
              </div>
           

          </div>


    )
}

export default Footer 