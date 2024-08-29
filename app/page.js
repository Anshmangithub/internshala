"use client"
import React from 'react'
import './globals.css'
import Image from 'next/image'
import talentforge from "../public/talent-forge.png"
import mainimg from "../public/images/main.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'




const page = () => {

  const router = useRouter()
  const studentroute = ()=>{
    router.push("/student")
  }

  const employeroute = ()=>{
    router.push("/employe")
  }
  return (
    <div className='main'>
    <nav className='navbar'>

     <Link href="/">
     <Image
       className='imageinternlogo'
       src={talentforge}
       
      />
     </Link> 

    <div className='navbartype2'>
        <button className='loginbutton btn btn-primary' onClick={studentroute}>Student</button>
        <button className='signupbutton btn btn-primary' onClick={employeroute}>Employe</button>
      </div>
    </nav>
      <div className='sloganbig'>
        <h1 className='sloganh1'>Make your dream career a reality</h1>
      </div>
    <div className='leftpart'>
     
      <Image
      className='animationimg'
      src={mainimg}
      />
    </div>
    <div className='rightpart1'>
      <h1 className='kickstarth1'>Kick Start Your Career With</h1>
      <h1 className='internshalah1'>Talent Forge</h1>
      <h5 className='parah5'>Get hierd from the top companies & showcase your creativeness</h5>
    <div className='stuemp'>
      <Link href="/student"><h4 className='linkmain'>Student</h4> </Link>
     <Link href="/employe"> <h4 className='linkmain'>Employe</h4> </Link>
     
     
     </div>
    </div>
  </div>
  )
}

export default page