import React from 'react'
import logo from '../img/logo-1.jpg'
import '../css/Section3.css'

const Section3 = () => {

    const workSection = document.querySelectorAll('.box')
    const workObserver = new IntersectionObserver((entries, observer) => {
        const [entry] = entries
        if (!entry.isIntersecting) {
            return
        }
        let counterNum = document.querySelectorAll('.counter-numbers')
        const speed = 200;
        counterNum.forEach(element => {
            const updateNumber = () => {
                const targetNumber = parseInt(element.dataset.number);
                const initialNum = parseInt(element.innerText)
                const increamentNum = Math.trunc(targetNumber / speed)
                if (initialNum < targetNumber) {
                    element.innerText = initialNum + increamentNum
                    setInterval(updateNumber, 100)
                }
            }
            updateNumber();
        });
        console.log("object")
    }, {
        root: null,
        threshold: 0,
    })
    workSection.forEach(section => {
        workObserver.observe(section);
    });

    return (
        <>
            <div className="heading pt-3">
                <h2 className='text-center py-3'>Overview of <span>Orient LED</span></h2>
            </div>
            <div className="section-four">
                <div className="four-left">
                    <img src={logo} alt="" />
                </div>
                <div className="four-right">
                    <div className="box">
                        <div className='d-flex justify-content-center'><h3 className='counter-numbers' data-number="600" id='Oone'> 0</h3></div>
                        <h4>Year of estabalized</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut labore distinctio facilis? Iste velit ad necessi</p>
                    </div>
                    <div className="box">
                        <div className='d-flex justify-content-center'><h3 className='counter-numbers' data-number="1000"> 0</h3><h3>+</h3></div>
                        <h4>Year of estabalized</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut labore distinctio facilis? Iste velit ad necessi</p>
                    </div>
                    <div className="box">
                        <div className='d-flex justify-content-center'><h3 className='counter-numbers' data-number="300"> 0</h3><h3>Cr</h3></div>
                        <h4>Year of estabalized</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut labore distinctio facilis? Iste velit ad necessi</p>
                    </div>
                    <div className="box">
                        <div className='d-flex justify-content-center'><h3 className='counter-numbers' data-number="2000"> 0</h3><h3>: 2000</h3></div>
                        <h4>Year of estabalized</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut labore distinctio facilis? Iste velit ad necessi</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3
