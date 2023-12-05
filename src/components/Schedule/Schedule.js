import React from 'react'

import { scheduleData } from '../../data/scheduleData'
import './Schedule.css'
import ScheduleCard from './ScheduleCard'

function Schedule() {
  return (
    <div className='schedule' id='schedule'>
      <div className='schedule_container'>
        <h1 className="section__title" data-aos="fade-up" data-aos-duration="1200">Schedule</h1>
        <div className='schedule_timeline'>
          {scheduleData.map((sch) => (
            <ScheduleCard 
              key={sch.id}
              id={sch.id}
              title={sch.title}
              desc={sch.desc}
              time={sch.time}
            />
          ))}
          </div>
      </div>
        
    </div>
  )
}

export default Schedule