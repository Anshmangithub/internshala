"use client"
import {  asyncresumeeditcoursesstudent } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from "../style.module.css"
const page = ({params}) => {
 const router =  useRouter()
    const dispatch =  useDispatch()

    const [training, settraining] = useState('')
  const [organization, setorganization] = useState('')
 const [location, setlocation] = useState('')
  const [duration, setduration] = useState('')
   const [description, setdescription] = useState('')

    
     const editHandler  = ()=>{
        const course = {
          training , organization , location  , duration , description
        }
        dispatch(asyncresumeeditcoursesstudent(params.id , course))
        router.push("/student/auth/resume")
        toast("Successfully Edited")
     }
  return (
    <div>

    <div className={style.profilemain}>
    <div className={style.container}>
    <h5 className={style.eduadd}>Add Training / Courses</h5> 
    <hr />
    <form>
    <div class="form-group mb-3">
       <label htmlFor="">Training program</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Analytics"
        
        value={training}
        onChange={(e) => settraining(e.target.value)}
        />
      </div>
    
      <div class="form-group mb-3">
       <label htmlFor="">Organization</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Internshala Trainings"
        
        value={organization}
        onChange={(e) => setorganization(e.target.value)}
        />
      </div>
    
    
    
      <div class="form-group mb-3">
       <label htmlFor="">Location</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Mumbai"
        
        value={location}
        onChange={(e) => setlocation(e.target.value)}
        />
      </div>
    
      <div class="form-group mb-3">
       <label htmlFor="">Duratioin</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g 4 months"
        
        value={duration}
        onChange={(e) => setduration(e.target.value)}
        />
      </div>
    
      <div class="form-group mb-3">
        <label for="exampleFormControlTextarea1">Description (optional)</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Short Description' rows="3"
        
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        ></textarea>
      </div>
      <button class="btn btn-success" onClick={editHandler}>Submit</button>
      </form> 
      <hr />
    
    
    </div>
    </div>
        </div>
  )
}

export default page