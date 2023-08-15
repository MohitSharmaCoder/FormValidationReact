import React, { useState } from 'react'
import '../css/Section7.css'
const Section7 = () => {
    const [em,setEm]= useState(false)
    const [nm,setNm]= useState(false)
    const [pn,setPn]= useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const useHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')

    const nameBlur =()=>{
        let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
        let str = user.name
        console.log(regex,str)
        if(regex.test(str)){
            console.log("it matched")
            setEm(false)
        }
        else{
            console.log("it does not matched")
        setEm(true)
        }

    }
    const emailBlur =()=>{
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([A-Za-z]){2,7}$/
            let str = user.email
            console.log(regex,str)
            if(regex.test(str)){
                console.log("email matched")
                setNm(false)
            }
            else{
                console.log("email not matched")
                setNm(true)
            }
    }
    const phoneBlur =()=>{
        let regex = /^([0-9]){10}$/
        let str = user.phone
        console.log(regex,str)
        if(regex.test(str)){
            console.log("it matched")
            setPn(false)
        }
        else{
            setPn(true)
        }
    }
    
    return (
        <>
            <div className="form-con">
                <h2 className='text-center mb-3'>Get in Touch</h2>
                <form>
                    <h4 className='text-center mb-2'>Please fill the form</h4>
                    <div className="form-group mb-2">
                        <input type="text" value={user.name} name='name' className={`form-control ${em===true?'is-invalid':''}`} onBlur={nameBlur} onChange={useHandler} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                        <div id="namevalid" className="invalid-feedback">your name must be 2- 10 charaters</div>
                    </div>
                    <div className="form-group mb-2">
                        <input type="email" value={user.email} onBlur={emailBlur} name='email' className={`form-control ${nm===true?'is-invalid':''}`} onChange={useHandler} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        <div id="namevalid" className="invalid-feedback">your name is not valid</div>
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" value={user.phone} onBlur={phoneBlur} name='phone' className={`form-control ${pn===true?'is-invalid':''}`} onChange={useHandler} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" />
                        <div id="namevalid" className="invalid-feedback">your name must be10 charaters</div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                    </div>
                    <div className='text-center'><button type="submit" className="border-0 mt-2 btn btn-primary">Submit</button></div>
                </form>
            </div>
        </>
    )
}

export default Section7
