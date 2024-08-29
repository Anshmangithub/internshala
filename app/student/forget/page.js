"use client";
import { asyncsendmailstudent } from '@/store/actions/studentActions'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import style from "./style.module.css"

const page = () => {
    const {errors} =  useSelector((state) => state.studentReducers)
    const router =  useRouter()
    const dispatch =  useDispatch();
    
    const [email, setemail] = useState('')
    const SentmailHandler = ()=>{
        const mail = {
    
            email 
        }
        try {
          dispatch(asyncsendmailstudent(mail));
          if(errors.length === 2){
            router.push("/student/forget/otp")
           }
          toast("Sent Email")      
        } catch (error) {
          toast.error(JSON.stringify(errors))
          
        }
      //  if(errors.length === 2){
      //   }else{
      //       return
      //   }
    } 
    

  return (
    <div className=''>
      
    <div className={style.profilemain}>
    <div className={style.container}>
      
      <form action=""  onSubmit={SentmailHandler}>


        
<div className="form-outline mb-2 mx-4">
<input type="email" id="form2Example1" className="form-control"
placeholder='Send Email (Check Your email for otp)'
value={email}
onChange={(e) => setemail(e.target.value)} 
/>

</div>
<button className='btn btn-primary mx-4' >Send</button>
      </form>
    </div>
    </div>
        </div>
  )
}

export default page