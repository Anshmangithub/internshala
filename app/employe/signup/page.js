"use client"
import { asyncsignupemploye } from '@/store/actions/employeActions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import style from "./style.module.css"
import mainimg from "@/public/images/main.png"
import { toast } from 'react-toastify'

const page = () => {
  const dispatch = useDispatch()

  const router = useRouter()
  const {isAuthenticated} = useSelector((state) => state.employeReducers) 


  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [contact, setcontact] = useState('')
  const [organizationName, setorganizationName] = useState('')
  
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

 useEffect(()=>{
  
  if(isAuthenticated) router.push("/employe/auth")
  

 },[isAuthenticated])


  const signupHandler = ()=>{
     const newEmploye = {
      firstName ,
      lastName ,
      contact ,
      organizationName ,
  
      email ,
      password 
     }
    try {
      dispatch(asyncsignupemploye(newEmploye))
      toast("Successfully Signup")
    } catch (error) {
      toast(error)
    }
  }
  
  return (
    <div >
     
      {/* <button className='btn btn-success' onClick={signupHandler}> signup</button>
       */}


<div className={style.dekstopmain}>

<div className={style.leftpart}>

 <Image
 className={style.animationimg}
 src={mainimg}
 />
</div>
<div className={style.rightpart2}>


<h3 className={style.Signuph3}>Signup</h3> 
<form onSubmit={signupHandler}>

<div className="form-outline mb-1 mx-4">
<label className="form-label" for="form2Example1">Email address</label>
<input type="email" id="form2Example1" className="form-control"
placeholder='xyz@gmail.com'
 value={email}
 onChange={(e) => setemail(e.target.value)} 
/>
</div>


<div className="form-outline mb-1 mx-4">
<label className="form-label" for="form2Example2">First Name</label>
<input type="text" id="form2Example2" className="form-control"
placeholder='First Name'
 value={firstName}
 onChange={(e) => setfirstName(e.target.value)}  
/>
</div>

<div className="form-outline mb-1 mx-4">
<label className="form-label" for="form2Example2">Last Name</label>
<input type="text" id="form2Example2" className="form-control" 
placeholder='Last Name'
value={lastName}
onChange={(e) => setlastName(e.target.value)} 
/>
</div>

<div className="form-outline mb-1 mx-4">
<label className="form-label" for="form2Example2">Contact</label>
<input type="text" id="form2Example2" className="form-control" 
placeholder='Contact'
 value={contact}
 onChange={(e) => setcontact(e.target.value)} 
/>
</div>



<div className="form-outline mb-1 mx-4">
<label className="form-label" for="form2Example2">Organization Name</label>
<input type="text" id="form2Example2" className="form-control" 
placeholder='Oranization Name'
 value={organizationName}
 onChange={(e) => setorganizationName(e.target.value)} 
/>
</div>





<div className="form-outline mb-1 mx-4">
<label className="form-label" for="form2Example2">Password</label>
<input type="password" id="form2Example2" className="form-control" 
placeholder='*********'
 value={password}
 onChange={(e) => setpassword(e.target.value)} 
/>
</div>



<button type="submit" style={{marginLeft : '12vw'}}  className="btn btn-primary btn-block mb-1">Sign up</button>
 

</form>
</div>
</div>
</div>

  )
}

export default page