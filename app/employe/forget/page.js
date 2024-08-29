"use client";
import { asyncsendmailemploye } from '@/store/actions/employeActions'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import style from "./style.module.css"

const page = () => {
    const {errors} =  useSelector((state) => state.employeReducers)
    const router =  useRouter()
    const dispatch =  useDispatch();
    const [email, setemail] = useState('')
    const SentmailHandler = async ()=>{
        const mail = {
    
            email
        }
        try {
          await dispatch(asyncsendmailemploye(mail));
          toast("Successfully Sent email")
        } catch (error) {
          toast(error)
        }
        if(errors.length === 2){
         router.push("/employe/forget/otp")      
        }else{
            toast.error(JSON.stringify(errors.data.message))
            return
        }
    } 
    

  return (
    <div className=''>
      
    <div className={style.profilemain}>
    <div className={style.container}>
      
      <form onSubmit={SentmailHandler}>


        
<div className="form-outline mb-2 mx-4">
<input type="email" id="form2Example1" className="form-control"
placeholder='Send Email (Check Your email for otp)'
value={email}
onChange={(e) => setemail(e.target.value)} 
/>

</div>
<button className='btn btn-primary' >Send</button>
      </form>
    </div>
    </div>
        </div>
  )
}

export default page