import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo}alt="" />
                <p>Our food website is a digital platform to share recipes, cooking tips, or information about food products and services.Our website provides site visitors with a sense of consistency,this helps people to know more about our website.</p>
                <p>U Can Visit Us Through Social Media</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            

           </ul>
            </div>
            <div className="footer-content-right">
             <h2> Get In Touch</h2>
             <ul>
                <li>+1-231-456-7890</li>
                <li>contact@tomato.com</li>
             </ul>
            </div>
        </div>

        <hr/>
        <p className="footer-copyright">Copyright 2024 @ Tomato.com -All Rights Reserved</p>
    </div>
  )
}

export default Footer