"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Image from 'next/image'
import internshalalogo from "@/public/images/image-removebg.png"
import mainimg from "@/public/images/main.png"
import style from "./style.module.css"

const page = () => {

    
    const router = useRouter()
    const {isAuthenticated} = useSelector((state) => state.studentReducers) 
  
   useEffect(()=>{
    
    if(isAuthenticated) router.push("/student/auth")
    
  
   },[isAuthenticated])
  

  return (
    <div className={style.mainpage}>
    {/* <nav className='navbar'>
      
      <Image
       className='imageinternlogo'
       src={internshalalogo}
      />

      <div className='navbartype'>
        <h3 className='h3tag'>Internships</h3>
        <h3 className='h3tag'>Jobs</h3>
        <h3 className='h3tag'>courses</h3>
      </div>

      <div className='navbartype2'>
        <button className='loginbutton btn btn-primary'>Login</button>
        <button className='signupbutton btn btn-primary'>Signup</button>
      </div>
    </nav> */}
      <div className='sloganbig'>
        <h1 className='sloganh1'>Make your dream career a reality</h1>
      </div>
    <div className='leftpart'>
     
      <Image
      className={style.animationimg}
      src={mainimg}
      />
    </div>
    <div className='rightpart1'>
      <h1 className='kickstarth1'>Kick Start Your Career With</h1>
      <h1 className='internshalah1'>Internshala</h1>
      <h5 className='parah5'>Get hierd from the top companies & showcase your creativeness</h5>
    <div className='stuemp'>
      <Link href="/student/signin"><h4 className='linkmain'>Signin</h4> </Link>
     <Link href="/student/signup"> <h4 className='linkmain'>Signup</h4> </Link>
     </div>
    </div>
  </div>
  )
}

export default page