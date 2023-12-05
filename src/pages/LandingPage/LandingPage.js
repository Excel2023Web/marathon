import React from 'react'
// eslint-disable-next-line
import { Home, About, Excel, Sponsors, Contact, Schedule, Perks } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <Home />
      <About />
      <Perks />
      <Sponsors />
      <Schedule />
      <Excel />
      <Contact />
    </div>
  )
}

export default LandingPage