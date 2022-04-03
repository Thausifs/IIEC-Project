import React from 'react';
import "../Asserts/Css/ComponentsCss/footer.css";


const Footer=()=>{
    return(
        <div className='footer_div'>
            <div className='footer_first'>
                <div className='mainlinks'>
                    <h3>MAIN LINKS </h3>
                     <ul>
                         <li><a>About IIEC</a></li>
                         <li> <a>Students Testimonials</a></li><br/>
                         <li><a>Video Testimonials</a></li>
                         <li> <a>Gallery</a></li><br></br>
                         <li><a>Contact us</a></li>
                     </ul>
                 </div>
                 <div className='visa'>
                 <h3>VISA</h3>
                 <ul>
                         <li><a>Investor VISA</a></li>
                         <li> <a>Dependent VISA</a></li><br></br>
                         <li><a>EB5 VISA</a></li><br></br>
                         <li> <a>Tourist VISA</a></li><br></br>
                        
                     </ul>
                 </div>
                 
                 <div className='EDUCATION'>
                 <h3>EDUCATION </h3>
                 <ul>
                         <li><a>Study in Canada</a></li>
                         <li> <a>Study in Australia</a></li><br></br>
                         <li><a>Study in UK</a></li>
                    
                        
                     </ul>
                 </div>
                 <div className='IMMIGRATION'>
                 <h3>IMMIGRATION </h3>
                 <ul>
                         <li><a>Terms and condition</a></li>
                         <li> <a>Privacy Policy</a></li><br></br>
                         <li><a>Study in UK</a></li>
                           </ul>
                 </div>
                 
                
            </div>
            <div className='footer_second'>
                <h2>Have a Question?</h2>
                <input className='name_placehd' placeholder='Name'></input>
                <input className='phone_placehd' placeholder='Phone'></input>
                <input className='email_pd' placeholder='E-mail'></input>
                <input className='sub_pd' placeholder='Subject'></input>
                <input className='description_pd' placeholder='Description'></input>
            </div>
           
         
             <div className='footer_third'>
              <p className='phno'>+91 98415 12043</p>
              <a className='media'>Social Media</a>
              <button className='msg'>SEND MESSAGE</button><br/>
              <a className='mail'>iiecservice@gamil.com</a>
              <p className='copyrights'>@ 2022 IIEC</p>
              </div>


          </div>


    )
}

export default Footer 