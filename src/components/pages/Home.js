import React,{useState} from 'react'
import './Home.css';
import simage from '../img/slide-on.png'
const Home = () => {
    const [mon, setMon] = useState(false)
    const [mon1, setMon1] = useState(false)
    window.addEventListener('scroll',function myFunction() {
      if (document.documentElement.scrollTop >1200) {
        setMon(true)
        setMon1(true)
      } else {
        setMon(false)
        setMon1(false)
      }
    })
    
    return (
        <>
            <div className={`section-one ${mon===true?'mon':''}`} id='o-one'>
                <h3>Stay connected with your home,
                    From anywhere</h3>
                    <div className="img">
                        <img src={simage} alt="" />
                    <div className={`dot-curcle ${mon1===true?'mon2':''}`} id='o-two'></div>
                    </div>
            </div>
        </>
    )
}

export default Home
