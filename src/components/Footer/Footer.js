import React from "react"
import { FiFacebook, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
import { NavHashLink as NavLink } from "react-router-hash-link"


import "./Footer.css"
import excel_logo from "../../assets/logo/excellogowithtext.png"
import mec_logo from "../../assets/logo/mec_logo.png"

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer_left">
          <div className="footer_img">
            <a href="https://www.excelmec.org/" target="_blank" rel="noreferrer">
              <img src={excel_logo} alt='' className="excel-logo"/>
            </a>
            <a href="https://www.mec.ac.in/" target="_blank" rel="noreferrer">
              <img src={mec_logo} alt='' className="mec-logo" />
            </a>
          </div>
          <h4 className="footer_desc_desktop"> Made with <span><FaHeart className="footer_heart"/></span> Excel 2022</h4>
          
       </div> 
       <div className="footer_right">
        <div className="footer_socialicon">
         <a href="https://www.facebook.com/excelmec" target="_blank" rel="noreferrer">
          <FiFacebook className="fsocialicon" />
         </a>
         <a href="https://www.instagram.com/excelmec" target="_blank" rel="noreferrer">
          <FiInstagram className="fsocialicon" />
         </a>
         <a href="https://www.linkedin.com/company/excelmec/" target="_blank" rel="noreferrer">
          <FiLinkedin className="fsocialicon" />
         </a>
         <a href="https://twitter.com/excelmec" target="_blank" rel="noreferrer">
          <FiTwitter className="fsocialicon" />
         </a>
        </div>
        <div className="footer_container">
          <NavLink to='/#' className="footer_link">
            Home
          </NavLink>
          <NavLink to='/#about' className="footer_link">
            About
          </NavLink>
          <NavLink to='/#sponsors' className="footer_link">
            Sponsors
          </NavLink>
          <NavLink to='/#schedule' className="footer_link">
            Schedule
          </NavLink>
          <NavLink to='/#organizers' className="footer_link">
            Organizers
          </NavLink>
          
          <NavLink to='/#contact' className="footer_link">
            Contact
          </NavLink>
        </div>
        <h4 className="footer_desc_mobile"> Made with <span><FaHeart className="footer_heart"/></span> Excel 2022</h4>
       </div>
    </div>
  )
}

export default Footer
