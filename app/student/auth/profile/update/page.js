"use client"
import React, { useState } from 'react'
import style from "./style.module.css"
import { asyncavatarstudent, asyncupdatestudent } from '@/store/actions/studentActions'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
const page = () => {
    const dispatch =  useDispatch()
   const router =  useRouter()

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [contact, setcontact] = useState('')
    const [city, setcity] = useState('')
    const [gender, setgender] = useState('')
    const [email, setemail] = useState('')


    const updateHandler = ()=>{
        const newStudent = {
         firstName ,
         lastName ,
         contact,
         city,
         gender,
         email
         
        }
   
        dispatch(asyncupdatestudent(newStudent))
       
     }

     const avtarHandler = (e) =>{
        e.preventDefault()
        const formdata = new FormData(e.target);
        formdata.set("avatar" , e.target.avatar.files[0])
        dispatch(asyncavatarstudent(formdata))
      
     }

  return (

    <div className={style.main}>
   

<div className={style.profilemain}>
<div className={style.container}>
<h4>Update The Details</h4>
<form>

<div className="form-outline mb-2 mx-4">
<input type="email" id="form2Example1" className="form-control"
placeholder='Email (xyz@gmail.com)'
value={email}
onChange={(e) => setemail(e.target.value)} 
/>

</div>


<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control"
placeholder='First Name'
value={firstName}
onChange={(e) => setfirstName(e.target.value)}  
/>
</div>

<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Last Name'
value={lastName}
onChange={(e) => setlastName(e.target.value)} 
/>
</div>

<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Contact'
value={contact}
onChange={(e) => setcontact(e.target.value)} 
/>
</div>



<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='City'
value={city}
onChange={(e) => setcity(e.target.value)} 
/>
</div>


<div className="form-outline mb-3 mx-4">
<input type="Gender" id="form2Example2" className="form-control" 
placeholder='Gender only (male, female, others)'
value={gender}
onChange={(e) => setgender(e.target.value)} 
/>
</div>
<button type="submit" onClick={updateHandler} style={{marginLeft : "25px"}} className="btn btn-primary btn-block mb-2">Update Info</button>


</form>
<hr />

<form onSubmit={avtarHandler} encType='multipart/form-data'>
<div className="form-outline mb-3 mx-4">
<input type="file" id="form2Example2" className="form-control" 
placeholder='Change Profile'
name='avatar'

/>
</div>
<button type="submit"  style={{marginLeft : "25px"}}  className="btn btn-primary btn-block mb-2">Update ProfileImage</button>
</form>
</div>
</div>
</div>
  )
}

export default page