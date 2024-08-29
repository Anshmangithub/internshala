"use client"
import {  asyncresumeaddresponsibilitystudent } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import style from "./style.module.css"

const page = () => {

   const dispatch =  useDispatch()
    const router =  useRouter()
    const [description, setdescription] = useState('')
    const addHandler = ()=>{
        const  response = {
         description
        }
        dispatch(asyncresumeaddresponsibilitystudent(response));
      
         router.push("/student/auth/resume")
         toast("Successfully Created")
       
    }

  return (
    <div>
      <div className={style.profilemain}>
<div className={style.container}>
<h5 className={style.eduadd}>Add Position of responsibility</h5> 
<hr />
<form>


  <div class="form-group mb-3">
    <label for="exampleFormControlTextarea1">If you have been/are an active part of societies, conducted any events or led a team, add details here</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='e.g Lead a team of 5 volunteers to plan and conduct activites for literary event in college fest' rows="3"
    value={description}
    onChange={(e) => setdescription(e.target.value)}
    ></textarea>
  </div>

  <button class="btn btn-success" onClick={addHandler}>Save</button>
  </form> 
  <hr />


</div>
</div>
    </div>
  )
}

export default page
{/* <button onClick={addHandler} className='btn btn-primary'> Add responsibility</button> */}