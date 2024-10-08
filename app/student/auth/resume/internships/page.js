"use client"
import { asyncresumeaddinternshipstudent } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'

import { useDispatch } from 'react-redux'
import style from "./style.module.css"
import { useState } from 'react'

const page = () => {

   const dispatch =  useDispatch()
    const router =  useRouter()

   
    const [profile, setprofile] = useState('')
  const [organization, setorganization] = useState('')
  const [location, setlocation] = useState('')
 const [duration, setduration] = useState('')
const [description, setdescription] = useState('')


    const addHandler = ()=>{
        const  intern = {
          profile , organization , location , duration , description
        }
        dispatch(asyncresumeaddinternshipstudent(intern));
      
         router.push("/student/auth/resume")
         toast("Successfully Created")
    }

  return (
    <div>
      <div className={style.profilemain}>
<div className={style.container}>
<h5 className={style.eduadd}>Add Internship</h5> 
<hr />
<form>

<div class="form-group mb-3">
   <label htmlFor="">Profile</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Operation"
     value={profile}
     onChange={(e) => setprofile(e.target.value)}
    />
  </div>

  <div class="form-group mb-3">
   <label htmlFor="">Organization</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Internshala"
     value={organization}
     onChange={(e) => setorganization(e.target.value)}
    />
  </div>


  <div class="form-group mb-3">
   <label htmlFor="">Location</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Mumbai"
    
    value={location}
    onChange={(e) => setlocation(e.target.value)}/>
  </div>

  <div class="form-group mb-3">
   <label htmlFor="">Duration</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g 3 Months"
    
    value={duration}
    onChange={(e) => setduration(e.target.value)}/>
  </div>

  <div class="form-group mb-3">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='set description' rows="3" 
     value={description}
     onChange={(e) => setdescription(e.target.value)}></textarea>
  </div>

  <button class="btn btn-success" onClick={addHandler}>Submit</button>
  </form> 
  <hr />


</div>
</div>
    </div>
  )
}

export default page
{/* <button onClick={addHandler} className='btn btn-primary'> Add intenship</button> */}