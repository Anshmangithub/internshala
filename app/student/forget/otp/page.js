"use client"
import { asyncotppasswordstudent } from '@/store/actions/studentActions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import style from "./style.module.css"
const page = () => {

    const dispatch =  useDispatch();
    const router = useRouter()
   const {errors} =  useSelector((state) => state.studentReducers)
   const [email, setemail] = useState('')
   const [otp, setotp] = useState('')
   const [password, setpassword] = useState('')

 const otpHandler = async ()=>{
    const newPwd = {
        email ,
        otp ,
        password 
    }
    
   await dispatch(asyncotppasswordstudent(newPwd));
   toast("Successfully Reset Password")
    if(errors.length === 2){
        router.push("/student/signin/")
    }else{
        toast.error(JSON.stringify(errors))
    }
 }

  return (
    <div className=''>
      
    <div className={style.profilemain}>
    <div className={style.container}>
      
      <form action="" onSubmit={otpHandler}>


        
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
<button className='btn btn-primary mx-4' >submit</button>
      </form>
    </div>
    </div>
        </div>
  )
}

export default page