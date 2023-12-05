import React from 'react'

import './Perks.css'


function Perks() {
  return (
    <div className='perks'>
        <div className='perks_container'>
          <div className='perksCard'>
            <div className='perksSquare' />
            <div className='pc_container'>
              <h2 className='pc_title'><span>40% off</span> gym subscription</h2>
              <h4 className='pc_desc'>LEEWAY FITNESS CENTER</h4>
              <p className='pc_details'>All marathon participants</p>
            </div>
          </div>
          <div className='perksCard'>
            <div className='perksSquare' />
            <div className='pc_container'>
              <h2 className='pc_title'><span>FREE</span> sports wear</h2>
              <h4 className='pc_desc'>cosmos sports</h4>
              <p className='pc_details'>First five people who complete the marathon</p>
            </div>
          </div>
          <div className='perksCard'>
            <div className='perksSquare' />
            <div className='pc_container'>
              <h2 className='pc_title'><span>FREE</span> GYM MEMBERSHIP</h2>
              <h4 className='pc_desc'>LEEWAY FITNESS CENTER</h4>
              <p className='pc_details'>First male and female to complete the marathon</p>
            </div>
          </div>
          <div className='perksCard'>
            <div className='perksSquare' />
            <div className='pc_container'>
              <h2 className='pc_title'><span>upto ₹1000 </span>therapy session discount</h2>
              <h4 className='pc_desc'>YELLOW CLUB</h4>
              <p className='pc_details'>First male and female to complete the marathon</p>
            </div>
          </div>
          <div className='perksCard'>
            <div className='perksSquare' />
            <div className='pc_container'>
              <h2 className='pc_title'><span>FREE</span> THERAPY SESSION</h2>
              <h4 className='pc_desc'>YELLOW CLUB</h4>
              <p className='pc_details'>All marathon participants</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Perks