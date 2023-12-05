import React from 'react'

import './Sponsors.css'

import { sponsorsData } from '../../data/sponsorsData'

function Sponsors() {
  return (
    <div className='sponsors' id="sponsors">
      <div className="sponsors_container">
        <h1 className="section__title" data-aos="fade-up" data-aos-duration="1200">Sponsors</h1>
        <div className="sponsors_section">
          {sponsorsData.map((sponsor) => (
            <a href={sponsor.url} key={sponsor.id} className="sponsor_details">
              <img src={sponsor.logo} alt="" data-aos="fade-up" data-aos-duration="1200"/>
              <h2 data-aos="fade-up">{sponsor.desc}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors