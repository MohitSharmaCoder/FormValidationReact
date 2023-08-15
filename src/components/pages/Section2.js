import React, {useState} from 'react'
import '../css/Section2.css'
import lamp from '../img/lamp.jpg'
import bulbhandle from '../img/bulbhandle.png'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
const Section2 = () => {
  const [phone, setphone] = useState(false)
  const [oon, setOon] = useState(false)
  window.addEventListener('scroll',function toggleFunc2() {
    if (document.documentElement.scrollTop >30) {
      setOon(true)
    } else {
      setOon(false)
    }
  })
  window.addEventListener('scroll',function toggleFunc3() {
    if (document.documentElement.scrollTop >300) {
      setphone(true)
    } else {
      setphone(false)
    }
  })

  return (
    <>
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
      <div className={`section-three`}>
            <div className="left-section-three">
                <h1 className=''>We are  <br /><span className='orient'>Orient LED</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere explicabo quas consequuntur nam sint voluptatum, facilis, ullam adipisci, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quisquam voluptates inventore possimus sunt ut aperiam, expedita laudantium. Eum obcaecati dolorem possimus consequuntur voluptatem voluptatum voluptas dolor ipsa dolorum. Impedit. accusamus vitae iure nisi esse sunt quam eos a doloribus omnis?</p>
            </div>
            <div className={`right-section-three  ${phone===true?'phone':''}`}>
                <img src={lamp} alt="" />
                <div className='bulb-two'></div>
            </div>
      </div>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    <div style={{height:'100px', backgroundColor:'darkred'}}></div>
    </>
  )
}

export default Section2
