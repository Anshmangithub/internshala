"use client"
import { asynccurrentemploye, asyncsignoutemploye } from '@/store/actions/employeActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./style.module.css"

import Image from 'next/image'
import internshalalogo from "@/public/images/image-removebg.png"


const employelayout = ({ children}) => {
     const dispatch = useDispatch();

      const router = useRouter()
     const {isAuthenticated} = useSelector((state) => state.employeReducers) 
 
    useEffect(()=>{
     dispatch(asynccurrentemploye())
     
     if(isAuthenticated) router.push("/employe/auth")
     

    },[isAuthenticated])

    const signoutHandler = ()=>{
        dispatch(asyncsignoutemploye())
    } 
  return (
    <>
   
   <div className={style.main}>
          <div className={style.navbar}>
           <Image
           className={style.imageinternlogo}
           src={internshalalogo}
          />
    
          <div className={style.navbartype}>
            <h3 className={style.h3tag}><Link style={{textDecoration : "none" , color : "GrayText"}} href={isAuthenticated ? "/employe/auth" : "/employe"}>Home</Link></h3>
            {isAuthenticated ? (<>
          
            
            <h3 className={style.h3tag}><Link style={{textDecoration : "none" , color : "GrayText"}}  href="/employe/auth/profile">Profile</Link></h3>
            <h3 className={style.h3tag}><Link style={{textDecoration : "none" , color : "GrayText"}} href="/employe/auth/applied">My Application</Link></h3>
            
            <button className='btn btn-danger' style={{marginTop : "20px"}} onClick={signoutHandler}>SignOut</button>  
            
            </>): ( 
    
              <>
               <button style={{backgroundColor : "transparent" ,marginTop : "20px" }} className='loginbutton btn btn-primary'><Link style={{color : "black" , textDecoration : "none"}} href="/employe/signin">Login</Link></button>
            <button style={{marginLeft : "-60px" , marginTop : "20px"}} className='signupbutton btn btn-primary'><Link style={{color : "white" , textDecoration : "none"}} href="/employe/signup"> Signup</Link></button>
              </>
            )}
         </div>
     </div>
    </div>
  

    {children}</>
  )
}

export default employelayout