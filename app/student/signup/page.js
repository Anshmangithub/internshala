"use client"
import { asyncsignupstudent } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import style from "./style.module.css"
import mainimg from "@/public/images/main.png"



const page = () => {
  const dispatch = useDispatch()

  const router = useRouter()
  const {isAuthenticated} = useSelector((state) => state.studentReducers) 

   const [firstName, setfirstName] = useState('')
   const [lastName, setlastName] = useState('')
   const [contact, setcontact] = useState('')
   const [city, setcity] = useState('')
   const [gender, setgender] = useState('')
   const [email, setemail] = useState('')
   const [password, setpassword] = useState('')

 useEffect(()=>{
  
  if(isAuthenticated) router.push("/student/auth")
  

 },[isAuthenticated])


  const signupHandler = ()=>{
     const newStudent = {
      firstName ,
      lastName ,
      contact ,
      city ,
      gender ,
      email ,
      password 
     }
   try {
     dispatch(asyncsignupstudent(newStudent))
     toast("Successfully Signup")
   } catch (error) {
    toast.error(error)
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
<form>

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
<label className="form-label" for="form2Example2">City</label>
<input type="text" id="form2Example2" className="form-control" 
placeholder='City'
 value={city}
 onChange={(e) => setcity(e.target.value)} 
/>
</div>


<div className="form-outline mb-1 mx-4">
<label className="form-label" for="form2Example2">Gender</label>
<input type="Gender" id="form2Example2" className="form-control" 
placeholder='Gender only (male, female, others)'
 value={gender}
 onChange={(e) => setgender(e.target.value)} 
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



<button type="submit" style={{marginLeft : '12vw'}} onClick={signupHandler} className="btn btn-primary btn-block mb-1">Sign up</button>
 

</form>
</div>
</div>
</div>

    
  )
}

export default page