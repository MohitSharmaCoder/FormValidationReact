import React, {useState} from 'react'
import '../css/Section1.css'
import bulbhandle from '../img/bulbhandle.png'
const Section1 = () => {
  const [oon, setOon] = useState(false)
  window.addEventListener('scroll',function toggleFunc2() {
    if (document.documentElement.scrollTop >30) {
      console.log("15--")
      setOon(true)
    } else {
      console.log("15 n0")
      setOon(false)
    }
  })

  return (
    <>
    <div style={{height:'100px', backgroundColor:'darkred'}}></div>
      <div className={`section-two`}>
            <div className="left-section-two">
                <h1>Discover the Power of Great Lighting</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere explicabo quas consequuntur nam sint voluptatum, facilis, ullam adipisci, accusamus vitae iure nisi esse sunt quam eos a doloribus omnis?</p>
                <button className='btn hero-btn'>Learn More</button>
            </div>
            <div className={`right-section-two  ${oon===true?'on':''}`}>
                <img src={bulbhandle} alt="" />
                <div className='bulb'></div>
            </div>
      </div>
      
    </>
  )
}

export default Section1
