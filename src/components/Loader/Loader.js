import React from 'react'
import DotLoader from "react-spinners/DotLoader";


import './Loader.css'

function Loader() {
  return (
    <div className='loader'>
      <DotLoader size={65} color="#1CD0B0"/>
    </div>
  )
}

export default Loader