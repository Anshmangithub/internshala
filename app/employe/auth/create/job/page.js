"use client"
import { asynccreatejobemploye } from '@/store/actions/employeActions'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from "./style.module.css"
const page = () => {


  const [title, settitle] = useState('')
  const [skills, setskills] = useState('')
  const [jobType, setjobType] = useState('')
  const [openings, setopenings] = useState('')
  const [description, setdescription] = useState('')
  const [prefrences, setprefrences] = useState('')
  const [salary, setsalary] = useState('')
  const [perks, setperks] = useState('')
  const [assesments, setassesments] = useState('')
    
  const dispatch =  useDispatch()
    const createHandler = ()=>{
    const newJob = {
        title ,
        skills ,
        jobType ,
        openings ,
        description  ,
         prefrences  ,
        salary ,
         perks ,
        assesments 
    }
     dispatch(asynccreatejobemploye(newJob))
  }
   return (
    <div className={style.main}>
   

<div className={style.profilemain}>
<div className={style.container}>
<h4>Create The Job</h4>
<form>

<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control"
placeholder='Title'
value={title}
onChange={(e) => settitle(e.target.value)}  
/>
</div>

<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Skills'
value={skills}
onChange={(e) => setskills(e.target.value)} 
/>
</div>

<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Job Type only (In-office , remote)'
value={jobType}
onChange={(e) => setjobType(e.target.value)} 
/>
</div>



<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Openings'
value={openings}
onChange={(e) => setopenings(e.target.value)} 
/>
</div>


<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Organization Name'
value={description}
onChange={(e) => setdescription(e.target.value)} 
/>
</div>


<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Prefrences'
value={prefrences}
onChange={(e) => setprefrences(e.target.value)} 
/>
</div>


<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Salary'
value={salary}
onChange={(e) => setsalary(e.target.value)} 
/>
</div>
<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='perks'
value={perks}
onChange={(e) => setperks(e.target.value)} 
/>
</div>
<div className="form-outline mb-2 mx-4">
<input type="text" id="form2Example2" className="form-control" 
placeholder='Assesments'
value={assesments}
onChange={(e) => setassesments(e.target.value)} 
/>
</div>


<button type="submit" onClick={createHandler} style={{marginLeft : "25px"}} className="btn btn-primary btn-block mb-2">Create Job</button>


</form>
<hr />


</div>
</div>
</div>
  )
}

export default page