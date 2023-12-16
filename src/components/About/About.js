import React from 'react'
import { FiMapPin, FiCalendar, FiClock } from "react-icons/fi";

import './About.css'

import map from '../../assets/png/map.png'

function About() {
  return (
    <div className='about' id='about'>
      <div className='about__container'>
        <div className='about__left' data-aos="fade-right" data-aos-duration="1200">
          <div className='about_map_div'>
            <div className='map_event'>
              <p>Marathon Route</p>
            </div>
            <img src={map} alt="" />
            <h1>Total Distance - <span className='bold9'>10KM</span></h1>
          </div>
        </div>
        <div className='about__right' data-aos="fade-left" data-aos-duration="1200">
          <div className='ar__content'>
            <h1><span className='primary_color'>REVIVE</span> - MENTAL HEALTH AWARENESS</h1>
            <p>
              They say a sound mind resides in a sound body. In this age of stress and anxiety,
              mental health issues are becoming commonplace.  <br /><br />

              Yet there is a ton of stigma
              surrounding this. Many people are reluctant to open up and speak about mental health as they fear social exclusion. Mental health issues, if not attended to in the
              right manner, can lead to devastating psychological effects crippling human life. <br /><br />

              One of the reasons for mental stress is the lack of physical activity due to the
              increase in hours spent on electronic devices both for work and leisure.  <br /><br />

              Exercise
              can provide mental stress relief. Regular exercise can improve your mood, help you
              relax, and lower symptoms of mild depression and anxiety. Exercise can also
              improve your sleep, which is often disrupted by mental stress.
            </p>
            <div className='ar_footer'>
              <div className='ar__item'>
                <FiMapPin className='ar__item_icon'/>
                <p>Durbar Hall</p>
              </div>
              <div className='ar__item'>
                <FiCalendar className='ar__item_icon'/>
                <p>February <br />5, 2023</p>
              </div>
              <div className='ar__item'>
                <FiClock className='ar__item_icon'/>
                <p>6:00 am - 9:30 AM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About