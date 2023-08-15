import React,{useState} from 'react'
import '../css/Section4.css'
import bag from '../img/bag.png'
const Section4 = () => {
    const [con, setCon] = useState(false)
  window.addEventListener('scroll',function toggleFunc5() {
    if (document.documentElement.scrollTop >1250) {
      setCon(true)
    } else {
      setCon(false)
    }
  })
  return (
    <>
      <div className="con-section">
                <div className={`left-con ${con===true?'con':''}`}>
                    <img src={bag} alt="" />
                    <div className="bulb-con">

                    </div>
                </div>
                <div className="right-con">
                    <h2>Why you should <span>choose <br /> Orient LED</span></h2>
                    <div className="box-one">
                        <img src="" alt="" />
                        <div>
                            <h4>Self designed trendy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nihil exercitationem velit accusamus culpa nam </p>
                        </div>
                    </div>
                    <div className="box-one">
                        <img src="" alt="" />
                        <div>
                            <h4>Self designed trendy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nihil exercitationem velit accusamus culpa nam </p>
                        </div>
                    </div>
                    <div className="box-one">
                        <img src="" alt="" />
                        <div>
                            <h4>Self designed trendy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nihil exercitationem velit accusamus culpa nam </p>
                        </div>
                    </div>
                </div>
      </div>
    </>
  )
}

export default Section4
