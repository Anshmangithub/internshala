"use client"
import {  asyncresumeaddskillstudent } from '@/store/actions/studentActions'
import { useRouter, useSearchParams } from 'next/navigation'
import style from "./style.module.css"
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const page = () => {

   const dispatch =  useDispatch()
    const router =  useRouter()
    const [skills, setskills] = useState("")
    const addHandler = ()=>{
    
        const  skill = {
         skills
        }
        dispatch(asyncresumeaddskillstudent(skill));
      
         router.push("/student/auth/resume")
         toast("Successfully Created")
       
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

  
  <button class="btn btn-success"  onClick={addHandler}>Submit</button>
  </form> 
  <hr />


</div>
</div>
    </div>
  )
}

export default page
{/* <button onClick={addHandler} className='btn btn-primary'> Add skill</button> */}