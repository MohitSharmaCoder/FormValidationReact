import React, {useState} from 'react'
import './Honer.css';

const Honer = () => {
  const [oon, setOon] = useState(false)
  const toggleFunc = ()=>{
      if(oon===false){
        setOon(true)
      }
      else{
        setOon(false)
      }
  }
  window.addEventListener('scroll',function toggleFunc2() {
    if (document.documentElement.scrollTop >900) {
      // console.log("15--")
      setOon(true)
    } else {
      // console.log("15 n0")
      setOon(false)
    }
  })

  return (
    <>
    {/* <div style={{height:'1100px', backgroundColor:'darkred'}}></div> */}
      <div className={`body ${oon===true?'on':''}`}>
      <div className={`light `}>
        <div className="wire">

        </div>
        <div className="bulb">
            <span></span>
            <span></span>
        </div>
        <div className="switch">
          <div className="btn" onClick={toggleFunc}></div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Honer
