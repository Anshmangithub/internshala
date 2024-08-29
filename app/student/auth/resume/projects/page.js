"use client"
import {  asyncresumeaddprojectstudent } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'
import style from "./style.module.css"
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const page = () => {

   const dispatch =  useDispatch()
    const router =  useRouter()
    const [title, settitle] = useState('')
    const [duration, setduration] = useState('')
   const [description, setdescription] = useState('')
   const [projectlink, setprojectlink] = useState('')




    const addHandler = ()=>{
        const  skill = {
          title , duration , description , projectlink
        }
        dispatch(asyncresumeaddprojectstudent(skill));
      
         router.push("/student/auth/resume")
         toast("Successfully Created")
       
    }

  return (
    <div>
      <div className={style.profilemain}>
<div className={style.container}>
<h5 className={style.eduadd}>Add Project details</h5> 
<hr />
<form>
<div class="form-group mb-3">
   <label htmlFor="">Title</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g Optical Character Recognition"
    value={title}
    onChange={(e) => settitle(e.target.value)}
    />
  </div>

  <div class="form-group mb-3">
   <label htmlFor="">Duration</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="e.g 3 months"
    
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

  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/ Project Link</span>
  </div>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
  
  value={projectlink}
  onChange={(e) => setprojectlink(e.target.value)}
  />
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
{/* <button onClick={addHandler} className='btn btn-primary'> Add project</button> */}