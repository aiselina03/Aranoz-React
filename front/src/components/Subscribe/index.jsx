import React from 'react'
import "./style.scss"

function Subscribe() {
  return (
    <>
    <div className="subscribe">
      <p>JOIN OUR NEWSLETTER</p>
      <h1>Subscribe to get Updated <br /> with new offers</h1>
      <div className="input">
        <input type="text" placeholder='Enter Email Address' />
        <button>SUBSCRIBE NOW</button>
      </div>
    </div>
    </>

  )
}

export default Subscribe