"use client"
import {   asyncresumeeditaccomplishmentstudent  } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from "../style.module.css"

const page = ({params}) => {
 const router =  useRouter()
    const dispatch =  useDispatch()
    const [descriptions, setdescriptions] = useState("")


     const editHandler  = ()=>{
        const accoplishment = {
            descriptions
        }
        dispatch(asyncresumeeditaccomplishmentstudent(params.id , accoplishment))
        router.push("/student/auth/resume")
        toast("Successfully Edited")
     }
  return (
    <div>
    <div className={style.profilemain}>
<div className={style.container}>
<h5 className={style.eduadd}>Add Accomplishments</h5> 
<hr />
<form>



<div class="form-group mb-3">
  <label for="exampleFormControlTextarea1">Add your accomplishments such as rewards, recognitions, test scores, certifications, etc. here. You may also add information such as seminars/workshops you have attended or any interests/hobbies you have pursued.</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Secure 1st Rank among 500' rows="3"
   value={descriptions}
   onChange={(e) => setdescriptions(e.target.value)}
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