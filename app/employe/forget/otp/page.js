"use client"
import { asyncotppasswordemploye } from '@/store/actions/employeActions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import style from "./style.module.css"
const page = () => {

    const dispatch =  useDispatch();
    const router = useRouter()

    const [email, setemail] = useState('')
    const [otp, setotp] = useState('')
    const [password, setpassword] = useState('')
   const {errors} =  useSelector((state) => state.employeReducers)
 const otpHandler = async ()=>{
    const newPwd = {
        email ,
        otp ,
        password 
    }
   await dispatch(asyncotppasswordemploye(newPwd));
    if(errors.length === 2){
        router.push("/employe/signin/")
    }else{
        toast.error(JSON.stringify(errors.data.message))
    }
 }

  return (
    <div className=''>
      
    <div className={style.profilemain}>
    <div className={style.container}>
      
      <form action="">


        
<div className="form-outline mb-2 mx-4">
<input type="email" id="form2Example1" className="form-control"
placeholder='email'
value={email}
onChange={(e) => setemail(e.target.value)} 
/>

</div>

<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example1" className="form-control"
placeholder='Otp'
value={otp}
onChange={(e) => setotp(e.target.value)} 
/>

</div>

<div className="form-outline mb-2 mx-4">
<input type="password" id="form2Example1" className="form-control"
placeholder='New Password'
value={password}
onChange={(e) => setpassword(e.target.value)} 
/>

</div>
<button className='btn btn-primary' onClick={otpHandler}>submit</button>
      </form>
    </div>
    </div>
        </div>
  )
}

export default page