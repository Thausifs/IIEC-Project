import React , {useState} from 'react';
import '../styles/componentscss/footerr.css';
import Axios from 'axios';

const Footer=()=>{
    const url ="https://iiec-client.herokuapp.com/contactUs"
    const[data,setdata]=useState({
        name_placehd:"",
        phone_placehd:"",
        email_pd:"",  
        sub_pd:"",  
        description_pd:"",  
        
       
    })
    function submit(e) {
        if(!data.name_placehd || !data.phone_placehd || !data.email_pd || !data.sub_pd || !data.description_pd) {
            alert("Please enter all values")
          }
        e.preventDefault();
        Axios.post(url,{
            Name:data.name_placehd,
            Phone:data.phone_placehd,
            Email:data.email_pd,
            Subject:data.sub_pd,
            Description:data.description_pd,

        })
        .then(res => {
            console.log(res.data)
            alert("Submitted Sucessfully")
        })
    }
    function handle(e) {
        const newdata = {...data}
         newdata[e.target.id] = e.target.value 
         setdata(newdata)
         console.log(newdata)
    }
    return(
    

        <div className='footermaincon'>
          <div className='dis_flex'>
          <div className='flexcontainer footerdivs  linksdivfooter '>
            
            <div className='footerulcon mainlinks'>
                <p className='footerhead'>MAIN LINKS</p>
                <ul className="footerpara">
                    <li>About IIEC</li>
                    <li>Students Testimonials</li>
                    <li>Video Testimonials</li>
                    <li>Gallery</li>
                    <li>Contact us</li>
                </ul>

            </div>
            <div className='footerulcon visa'>
                <p className='footerhead'>VISA</p>
                <ul className="footerpara">
                    <li>Investor VISA</li>
                    <li>Dependent VISA</li>
                    <li>EB5 VISA</li>
                    <li>Tourist VISA</li>
                
                </ul>
            </div>
        
            <div className='footerulcon education '>
            <p className='footerhead'>EDUCATION</p>
                <ul className="footerpara">
                    <li>Study in Canada</li>
                    <li>Study in Australia</li>
                    <li>Study in UK</li>
                
                
                </ul>
            </div>
            <div className='footerulcon immigration'>
            <p className='footerhead'>IMMIGRATION</p>
                <ul className="footerpara">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>              
                </ul>
            </div>
            
            <div>
                <p className="footerhead mglf_3">+91 98415 12043</p>
                <p className="footerhead mglf_3">iiecservice@gmail.com</p>
            </div>
            <div>
                <p className="footerhead mglf_3">Social Media</p>
            </div>
          </div>
          <div className='flexcontainer footerdivs footerform '>
            <p className='mainhead'>Have a Question!</p>
            <form onSubmit={(e) => submit(e)}>
                 <input type="textarea" id="name_placehd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.name_placehd} placeholder='Name'></input>
                 <input type="textarea" id="phone_placehd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.phone_placehd} placeholder='Phone'></input>
                 <input  type="textarea"id="email_pd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.email_pd} placeholder='E-mail'></input>
                 <input type="textarea" id="sub_pd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.sub_pd} placeholder='Subject'></input>
                 <textarea type="textarea" id="description_pd" className='footerplaceholder' onChange={(e)=>handle(e)} value={data.description_pd} placeholder='Description'></textarea><br/>
                 <button className='msg'>SEND MESSAGE</button>
            
                 </form>
          </div>
             
          </div>
           <div className='footerbtm'>
            <hr></hr>
             <p className="cpyrights">@2022IIEC</p>
           </div>

        </div>


    )
}

export default Footer 