"use client"
import { asyncsigninemploye } from '@/store/actions/employeActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import style from "./style.module.css"
import mainimg from "@/public/images/main.png"
import loginintern from "@/public/images/loginintern.png"
import { toast } from 'react-toastify'


const page = () => {

  
  const dispatch = useDispatch()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const router = useRouter()
  const {isAuthenticated} = useSelector((state) => state.employeReducers) 
 
 useEffect(()=>{
  
  if(isAuthenticated) router.push("/employe/auth")
  

 },[isAuthenticated])

  const signinHandler = ()=>{
     const employe = {
    
      email ,
      password 
     }
  try {
    dispatch(asyncsigninemploye(employe))
    toast("Successfully login")  
  } catch (error) {
    toast.error(error.message)
  }
  }
  
  return (
    <div className={style.main} >
    {/*      
        <button className='mb-3 btn btn-success' onClick={signinHandler}> signin</button>
           <br />
          <Link href="/student/forget">forget password</Link>  */}
    <div className={style.dekstopmain}>
    <div className="sloganbig">
              <h1 className='sloganh1'>Make your dream career a reality</h1>
            </div>
          <div className={style.leftpart}>
           
            <Image
            className='animationimg'
            src={mainimg}
            />
          </div>
          <div className='rightpart2'>
          <Image
          className='loginintenimg'
           src={loginintern}       />
          <h4  className='welcomeh4'>Welcome to Internshala </h4>
          <h3 className='loginh3'>Login</h3> 
          <form onSubmit={signinHandler}> 
     
      <div className="form-outline mb-1 mx-4">
        <label className="form-label" for="form2Example1">Email address</label>
        <input type="email" id="form2Example1" className="form-control"
         value={email}
         onChange={(e) => setemail(e.target.value)}
         placeholder='xyz@email.com'
         />
      </div>
    
    
      <div className="form-outline mb-1 mx-4">
        <label className="form-label" for="form2Example2">Password</label>
        <input type="password" id="form2Example2" className="form-control" 
         value={password}
         onChange={(e) => setpassword(e.target.value)}
         placeholder='******'
         />
      </div>
    
      <div className="row mb-3 mx-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example34" checked />
            <label className="form-check-label" for="form2Example34"> Remember me </label>
          </div>
        </div>
    
        <div className="col">
          
          <Link href="/employe/forget">Forgot password?</Link>
        </div>
      </div>
    
    
      <button type="submit" style={{marginLeft : '12vw'}}  className="btn btn-primary btn-block mb-4">Sign in</button>
    
     
      <div className="text-center">
        <p>Not a member? <Link href="/employe/signup">Register</Link></p>
       
      </div>
    </form>
          </div>
          </div>
        </div>
  )
}

export default page