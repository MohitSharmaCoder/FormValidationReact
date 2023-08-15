import React from 'react'
import '../css/Section5.css'
import bulb1 from '../img/bulb1.png'
import bulb2 from '../img/bulb2.webp'
import bulb3 from '../img/bulb3.jpg'
import bulb4 from '../img/bulb4.png'

const Section5 = () => {
  return (
    <>
      <div className="bulb-contain">
        <div className="bulb-box">
            <img src={bulb1} alt="" />
            <h4><span>LED BULB ONe</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb2} alt="" />
            <h4><span>LED BULB Two</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb3} alt="" />
            <h4><span>LED BULB THree</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb4} alt="" />
            <h4><span>LED BULB Four</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb1} alt="" />
            <h4><span>LED BULB Five</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb2} alt="" />
            <h4><span>LED BULB Two</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb4} alt="" />
            <h4><span>LED BULB Four</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb3} alt="" />
            <h4><span>LED BULB THree</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb1} alt="" />
            <h4><span>LED BULB Five</span></h4>
        </div>
        <div className="bulb-box">
            <img src={bulb1} alt="" />
            <h4><span>LED BULB ONe</span></h4>
        </div>
      </div>
    
    </>
  )
}

export default Section5
