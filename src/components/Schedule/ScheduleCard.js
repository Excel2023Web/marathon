import React from 'react'

import './Schedule.css'

function ScheduleCard({ id, time, title, desc }) {
  return (
    <div key={id} className='schedule_card' data-aos="fade-up" data-aos-duration="1200">
        <div className='scard_timeline'>
            <h4 className='scard_time1'>{time}</h4>
            <h6 className='scard_time2'>AM</h6>
        </div>
        <div className='scard_details'>
            <h5 className='scard_desc1'>{title}</h5>
            <p className='scard_desc2'>{desc}</p>
        </div>
    </div>
  )
}

export default ScheduleCard