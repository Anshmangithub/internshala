"use client"

import Link from 'next/link'
import React from 'react'
import style from "./style.module.css"
  
  const page = () => {
    
   
  return (

    <div className=''>
      
    <div className={style.profilemain}>
    <div className={style.container}>
      <h2 className={style.welcomemploye}>Welcome To The Employe Dekstop</h2>
    <h4 className={style.create}><Link style={{textDecoration :"none"}} href="/employe/auth/create/job">Create Jobs +</Link></h4>
    <h4 className={style.create}><Link style={{textDecoration :"none"}} href="/employe/auth/create/internships">Internship Jobs +</Link></h4>
    </div>

        </div>
        </div>
  )
}

export default page
   
    // <div className='container mb-3'>
    //   <h3>Welcome to the employe auth</h3>

    //   <Link href="/employe/auth/create/job">create job</Link>
    //   <br />  <br />
    //   <Link href="/employe/auth/create/internships">internships job</Link>
    // </div>