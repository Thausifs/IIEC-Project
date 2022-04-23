import React from 'react';
import "../Asserts/Css/ComponentsCss/header.css";
import IIEC_logo from "../Asserts/images/IIEC_logo.png";
import Navbar from './navbar';
import SearchIcon from "../Asserts/images/searchicon.png";
import Vectoricon from "../Asserts/images/Vectoricon.png";
import Eventvector from "../Asserts/images/eventvector.png";


const Header = () => {
    return (
      <div className='header'>
            <div className='headerdiv'>
              <ul>
                  <li className='header_logo' ><a href="/"><img className='headerlogo' src={IIEC_logo}></img></a></li>
                  <li> <input id="searchimputplaceholder" className='header_placeholder' placeholder= 'search' ></input>  </li>
                  <li className='event'>Event</li>
                  <li className='findus'>Find us </li>
                  <li><button className='enquirebtn' >Enquire</button></li>
              </ul>

            </div>
           

            </div>
         
    
    )}


export default Header ;