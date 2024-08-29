"use client"
import {   asyncresumeeditskillstudent } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from "../style.module.css"

const page = ({params}) => {
 const router =  useRouter()
    const dispatch =  useDispatch()
    const [skills, setskills] = useState("")
    
     const editHandler  = ()=>{
        const course = {
          skills
        }
        dispatch(asyncresumeeditskillstudent(params.id , course))
        router.push("/student/auth/resume")
        toast("Successfully Edited")
     }
  return (
    <div>
    <div className={style.profilemain}>
<div className={style.container}>
<h5 className={style.eduadd}>Add Skills</h5> 
<hr />
<form>
<div class="form-group mb-3">
 <label htmlFor="">Skill</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Full Stack Devloper"
  value={skills}
  onChange={(e) => setskills(e.target.value)}
  />
</div>


<button class="btn btn-success"  onClick={editHandler}>Submit</button>
</form> 
<hr />


</div>
</div>
  </div>
  )
}

export default page