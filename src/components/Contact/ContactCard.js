import React from "react";
import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

function ContactCard({ name, designation, image, email, phone, linkedIn }) {
  return (
    <div className="contactCard" data-aos="fade-up" data-aos-duration="800">
      <div className="contact_img">
        <img src={image} alt="contactimg" />
      </div>
      <h2>{name}</h2>
      <h3>{designation}</h3>
      <div className="contact_social">
        <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
          <FiPhone className="contact_social_icon"  size={19}/>
        </a>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          <FiMail className="contact_social_icon" size={25}/>
        </a>
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <FiLinkedin className="contact_social_icon"  size={22}/>
        </a>
      </div>
    </div>
  );
}

export default ContactCard;