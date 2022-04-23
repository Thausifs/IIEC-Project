import React from 'react';
import "../Asserts/Css/ComponentsCss/footer.css";


const Footer=()=>{
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
                <input id="footerplaceholder" className='name_placehd' placeholder='Name'></input>
                <input id="footerplaceholder" className='phone_placehd' placeholder='Phone'></input>
                <input id="footerplaceholder" className='email_pd' placeholder='E-mail'></input>
                <input id="footerplaceholder" className='sub_pd' placeholder='Subject'></input>
                <input id="footerplaceholder" className='description_pd' placeholder='Description'></input>
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