import React, {useState} from 'react';
import { GiCrossMark } from 'react-icons/gi';
import logo from './img/logo-1.jpg'
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {

  const [showIcon, setIcon] = useState(false)
  const showNav = ()=>{
  }

  return (
    <>
      <div className="main-nav">
        <div className="logo">
          <img style={{height:'60px',width:'100px'}} src={logo} alt="" />
        </div>
        <div className={showIcon?`menu-link phone-menu`:`menu-link`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Service</a></li>
            </ul>
        </div>
          <div className="social-media">
            <ul className='social-media-desktop'>
              <li><a href="#"></a>+9148505498</li>
            </ul>
          </div>
          <div className={showIcon?`hamburger-menu hamburger-me`:`hamburger-menu`}>
            <a href="#" onClick={()=>{setIcon(!showIcon)}}><GiHamburgerMenu/></a>
          </div>
            <a href="#" className={showIcon?`cross-b  cross-a`:`cross-b`} onClick={()=>{setIcon(!showIcon)}}><GiCrossMark/></a>
      </div>
    </>
  )
}

export default Navbar
