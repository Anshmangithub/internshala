"use client"
import { asyncresumeeditedustudent } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import style from "../style.module.css"
import { toast } from 'react-toastify'

const page = ({params}) => {
 const router =  useRouter()
    const dispatch =  useDispatch()

     

    const [collegeName, setcollegeName] = useState('')
    const [passingYear, setpassingYear] = useState('')
    const [course, setcourse] = useState('')
    const [stream, setstream] = useState('')
    const [cgpa, setcgpa] = useState('')
    const [city, setcity] = useState('')
    const {student} =  useSelector((state) => state.studentReducers)
    
  
  

     const editHandler  = (e)=>{
        const edit = {
             collegeName , passingYear , city , course , cgpa , stream 
        }
        try {
          dispatch(asyncresumeeditedustudent(params.id , edit ))
          router.push("/student/auth/resume")
          toast("Successfully Edited")
        } catch (error) {
          
        }
     }
  return (
    <div>
    <div className={style.profilemain}>
<div className={style.container}>
<h5 className={style.eduadd}>Edit Education</h5> 
<hr />
<form onSubmit={editHandler}>
<div class="form-group mb-3">
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Collage Name"
  name='collegeName'

  value={collegeName}
  onChange={(e) => setcollegeName(e.target.value)}
  />

</div>

<div class="form-group" style={{width :"300px"}}>
  <input type="text"  class="form-control" id="formGroupExampleInput" placeholder="City"
  
  value={city}
  onChange={(e) => setcity(e.target.value)}
  />

</div>
<div class="form-group mb-3" style={{width :"300px" , marginTop: "-38px", marginLeft :"350px" }}>
  <input type="text"  class="form-control" id="formGroupExampleInput" placeholder="Passing Year"
  
  value={passingYear}
  onChange={(e) => setpassingYear(e.target.value)}
  />

</div>
<div class="form-group " style={{width :"300px"}}>
  <input type="text"  class="form-control" id="formGroupExampleInput" placeholder="Course"
    value={course}
    onChange={(e) => setcourse(e.target.value)}
  />

</div>
<div class="form-group mb-3" style={{width :"300px" , marginTop: "-38px", marginLeft :"350px" }}>
  <input type="text"  class="form-control" id="formGroupExampleInput" placeholder="Stream"
  
  value={stream}
    onChange={(e) => setstream(e.target.value)}
  />

</div>
<div class="form-group mb-3" style={{width :"300px"}}>
  <input type="text"  class="form-control" id="formGroupExampleInput" placeholder="CGPA"
  
  value={cgpa}
  onChange={(e) => setcgpa(e.target.value)}
  />

</div>
<button class="btn btn-success">Submit</button>
</form> 
<hr />


</div>
</div>
  </div>
  )
}

export default page