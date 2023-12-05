import React from 'react'
import Lottie from 'react-lottie';

import success from '../../assets/json/success.json'
import './SuccessPage.css'

function SuccessPage() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className='successPage'>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
      />
      <div className='successPage__header'>
          <h1>Thank you for registering</h1>
      </div>
    </div>
  )
}

export default SuccessPage