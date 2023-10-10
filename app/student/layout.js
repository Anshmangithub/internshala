"use client"
import { asynccurrentstudent, asyncsignoutstudent } from '@/store/actions/studentActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Image from 'next/image'
import internshalalogo from "@/public/images/image-removebg.png"
import style from "./style.module.css"



const Studentlayout = ({ children}) => {
     const dispatch = useDispatch();

      const router = useRouter()
     const {isAuthenticated} = useSelector((state) => state.studentReducers) 
 
    useEffect(()=>{
     dispatch(asynccurrentstudent())
     
     if(isAuthenticated) router.push("/student/auth")
     

    },[isAuthenticated])

    const signoutHandler = ()=>{
        dispatch(asyncsignoutstudent())
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
            <h3 className={style.h3tag}><Link style={{textDecoration : "none" , color : "GrayText"}} href={isAuthenticated ? "/student/auth" : "/student"}>Home</Link></h3>
            {isAuthenticated ? (<>
          
            
            <h3 className={style.h3tag}><Link style={{textDecoration : "none" , color : "GrayText"}}  href="/student/auth/profile">Profile</Link></h3>
            <h3 className={style.h3tag}><Link style={{textDecoration : "none" , color : "GrayText"}} href="/student/auth/applied">My Application</Link></h3>
            <h3 className={style.h3tag}><Link style={{textDecoration : "none" , color : "GrayText"}} href="/student/auth/resume">Resume</Link></h3>
            <button className='btn btn-danger' style={{marginTop : "20px"}} onClick={signoutHandler}>SignOut</button>  
            
            </>): ( 
    
              <>
               <button style={{backgroundColor : "transparent" ,marginTop : "20px" }} className='loginbutton btn btn-primary'><Link style={{color : "black" , textDecoration : "none"}} href="/student/signin">Login</Link></button>
            <button style={{marginLeft : "-60px" , marginTop : "20px"}} className='signupbutton btn btn-primary'><Link style={{color : "white" , textDecoration : "none"}} href="/student/signup"> Signup</Link></button>
              </>
            )}
         </div>
     </div>
    </div>
  




    {children}
    </>
  )
}

export default Studentlayout
    
 
{/* 
        <Link href={isAuthenticated ? "/student/auth" : "/student"}>home</Link>
        <br /> */}


    {/* {isAuthenticated ? (<> */}
{/*     
        <Link onClick={signoutHandler} href="">signout</Link>
        <br />
        <Link href="/student/auth/profile">profile</Link>
        <br />
        <Link href="/student/auth/applied">My Application</Link>
        <br />
        <Link href="/student/auth/resume">Resume</Link> */}
     

    
    {/* </>): (<> */}
        
         {/* <Link href="/student/signup">Signup</Link>
         <br />
        <Link href="/student/signin">signin</Link> */}

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
        <button style={{backgroundColor : "transparent"}} className='loginbutton btn btn-primary'><Link style={{color : "black" , textDecoration : "none"}} href="/student/signin">Login</Link></button>
        <button  className='signupbutton btn btn-primary'><Link style={{color : "white" , textDecoration : "none"}} href="/student/signup"> Signup</Link></button>
      </div>
    </nav>
    </>)}
   
     </div> */}