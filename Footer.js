import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import './style.css'

function Footer(){
    return(
           <footer>
               <div className="foot-sec">
                   <h5 className="m-50">Social Media</h5>
                    <div className="icon-style">
                    <a href="https://facebook.com">
                    <FaFacebookF color='darkblue' className="icon-pos"/>
                    </a>
                    <a href="https://youtube.com"><FaYoutube color='red' className="icon-pos"/>
                    </a>
                    <a href="https://instagram.com"><FaInstagram color='purple' className="icon-pos" />
                    </a>
                    </div>
                    <h5 className="m-25">Follow us on our socials</h5>
               </div>
               <div className="foot-ab">
               <h5 className="m-50">About Us</h5>
               <p>Our goal is to be a resource of information on different lions around the world.
                    There are communities of lion enthusiasts on many social media platforms on 
                    the internet and this is just another easily accessible resource of information 
                    for those communities. We would like to help the efforts to save species like 
                    lions from going extinct by making their stories reach a bigger audience.
               </p>
               </div>
               <div className="c-right">
                   <p>Software from © 2020 Sikander Mohammad</p>
               </div>
           </footer>
    );
}
    
export default Footer;