"use client"
import { asyncavataremploye, asyncresetpasswordemploye, asyncupdateemploye } from '@/store/actions/employeActions'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./style.module.css"
import { useRouter } from 'next/navigation'
const page = () => {
    const dispatch =  useDispatch()
    const [password, setpassword] = useState('')
    const {employe} = useSelector((state) => state.employeReducers)
    const router =  useRouter()

    const updateHandler = ()=>{
        const newemploye = {
         firstName  : "geetaji",
         lastName : "bhagatji",
         
        }
   
        dispatch(asyncupdateemploye(newemploye))
     }

     const avtarHandler = (e) =>{
        e.preventDefault()
        const formdata = new FormData(e.target);
        formdata.set("organizationLogo" , e.target.organizationLogo.files[0])
        dispatch(asyncavataremploye(formdata))
     }

     const resetPasswordHandler = () =>{
      const pwd = {
        password 
      }
      dispatch(asyncresetpasswordemploye(pwd))
     }

     const UpdateInfoHandler = () => {
      router.push("/employe/auth/profile/update")
    }
  return (

    <div className=''>
      
    <div className={style.profilemain}>
    <div className={style.container}>
      <div className={style.profile}>
        <img className={style.profileimage} src={employe && employe.organizationLogo.url} alt="Profile pic" />
      </div>
      <h3 className={style.profilename} style={{marginTop : "10px"}}>{employe && employe.firstName} {employe && employe.lastName}</h3>
      <p className='mb-1'><span>Email</span> : { employe && employe.email}</p>
      <p className='mb-1'><span>Contact</span> : { employe && employe.contact}</p>
      <p className='mb-1'><span>Contact</span> : { employe && employe.organizationName}</p>
    
      <p className='mb-1'><span>password</span> : *******</p>
      <hr />
    <h4 className={style.profilename1} >Update The Details</h4>
     <p className='mb-1'>Reset Password</p>
     <form  >
     <div className="form-group mb-1">
       <input type="password" className="form-control mb-2"  id="exampleInputPassword1"  placeholder="New Password"
        value={password}
         onChange={(e) =>setpassword(e.target.value)}
         />
      </div>
        <button onClick={resetPasswordHandler} className='btn btn-primary mb-2' style={{backgroundColor : "#171717" ,border: "none"}}>Reset Password</button>
      </form>
    
    
    
      <button  className='btn btn-primary' onClick={UpdateInfoHandler}> Update Info</button>
    </div>
    </div>
        </div>
  )
}

export default page
    // <div className='container mt-4'>
    //     <img height={200} src={ employe && employe.organizationLogo.url} alt="" />

    //     <form onSubmit={avtarHandler} encType='multipart/form-data'>
    //         <input type="file"  name='organizationLogo'/>
    //         <button>submit</button>
    //     </form>
    //     <br />
    //     <button className='btn btn-warning' onClick={updateHandler}>Update</button>
    //     <button className=' mx-3 btn btn-danger' onClick={resetPasswordHandler}>Reset Password</button>
    // </div>