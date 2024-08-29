"use client"
import { asyncavatarstudent, asyncresetpasswordstudent, asyncupdatestudent } from '@/store/actions/studentActions'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./style.module.css"
import { useRouter } from 'next/navigation'
const page = () => {
    const dispatch =  useDispatch()
    const [password, setpassword] = useState('')
   const router =  useRouter()
    const {student} = useSelector((state) => state.studentReducers)

  
     const avtarHandler = (e) =>{
        e.preventDefault()
        const formdata = new FormData(e.target);
        formdata.set("avatar" , e.target.avatar.files[0])
        dispatch(asyncavatarstudent(formdata))
     }

     const resetPasswordHandler = (e) =>{
      const pwd = {
        password
      }
      dispatch(asyncresetpasswordstudent(pwd));
    }
    
          const UpdateInfoHandler = () => {
            router.push("/student/auth/profile/update")
          }

  return (
    <div className=''>
      
<div className={style.profilemain}>
<div className={style.container}>
  <div className={style.profile}>
    <img className={style.profileimage} src={student && student.avatar.url} alt="" />
  </div>
  <h3 className={style.profilename} style={{marginTop : "10px"}}>{student && student.firstName} {student && student.lastName}</h3>
  <p className='mb-1'><span>Email</span> : { student && student.email}</p>
  <p className='mb-1'><span>Contact</span> : { student && student.contact}</p>
  <p className='mb-1'><span>Gender</span> : { student && student.gender}</p>
  <p className='mb-1'><span>City</span> : { student && student.city}</p>
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


// <img height={200} src={ student && student.avatar.url} alt="" />

// <form onSubmit={avtarHandler} encType='multipart/form-data'>
//     <input type="file"  name='avatar'/>
//     <button>submit</button>
// </form>
// <br />
// <button className='btn btn-warning' onClick={updateHandler}>Update</button>
// <button className=' mx-3 btn btn-danger' onClick={resetPasswordHandler}>Reset Password</button>