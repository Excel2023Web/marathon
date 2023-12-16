import React from "react";
import "./Footer.css";
import mec_logo from "../../assets/png/mec_logo.png";
import excel_logo from "../../assets/png/excel_logo_text.png";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi"
import xtwitter from '../../assets/svg/xtwitter.svg'
import heart from "../../assets/svg/heart.svg";
const Footer = () => {
  return (
    <div className="footer__main">
      <a href="https://www.mec.ac.in/" target="_blank" rel="noreferrer">
        <img src={mec_logo} className="mec___logo_footer" alt="mec" />
      </a>

      <div className="footer_content">
        <div className="footer_social_logos">
          <a
            href="https://www.instagram.com/excelmec/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
          <a
            href="https://twitter.com/excelmec"
            target="_blank"
            rel="noreferrer"
          >
            <img className="xtwitterlogo" src={xtwitter} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/excelmec/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FiLinkedin />
          </a>
          <a
            href="https://www.facebook.com/excelmec"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook />
          </a>
        </div>
        <p>
          Made with <img className="heart_icon" src={heart} alt=" " /> Excel
          2023
        </p>
      </div>
      <a href="https://www.excelmec.org/" target="_blank" rel="noreferrer">
        <img src={excel_logo} className="excel__logo_footer" alt="" />
      </a>
    </div>
  );
};

export default Footer;