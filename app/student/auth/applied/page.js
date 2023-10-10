"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import style from "./style.module.css"

const page = () => {

    const {student} = useSelector((state) => state.studentReducers)

  return (
    <div>
<div className={style.profilemain}>
<div className={style.container}>
 <h3>Applied Jobs and Internships</h3>
 <hr />

 {
    student && student.jobs.map((j)=>(
      
<div className={style.jobsdiv} >
     <h4 className={style.jobsinternh4}> Job</h4>
     <h5 className={style.title}>{j.title}</h5>
        <p className='mb-1'>{j.skills}</p>
        <p className='mb-1'><span className='text-primary'>Type</span> : {j.jobType}</p>
        <p className='mb-1'><span className='text-primary'>Openings</span> : {j.openings}</p>
        <p className='mb-1'><span className='text-primary'>Description</span>: {j.description}</p>
         <p className='mb-1'><span className='text-primary'>Preferences</span> : {j.preferences} </p>
       <p className='mb-1'><span className='text-primary'>Salary</span>: {j.salary}</p>
       <p className='mb-1'><span className='text-primary'>Perks</span>: {j.perks}</p>
       <p className='mb-2'><span className='text-primary'>Assesments</span>: {j.assesments} </p>
 </div>
    ))
 }

{
  student && student.internships.map((i)=>(



 <div className={style.jobsdiv} key={i._id}>
  <h4 className={style.jobsinternh4}>Internship</h4>
  <h5 className={style.title}>{i.profile}</h5>
        <p className='mb-1'><span className='text-primary'>Skills</span>:{i.skills}</p>
        <p className='mb-1'><span className='text-primary'>Internship Type</span> : {i.internshipType}</p>
        <p className='mb-1'><span className='text-primary'>Openings</span> : {i.openings}</p>
        <p className='mb-1'><span className='text-primary'>From-To</span>: {i.from} - {i.to}</p>
         <p className='mb-1'><span className='text-primary'>Duration</span> : {i.duration}</p>
       <p className='mb-1'><span className='text-primary'>Stipend</span>: <span className='text-warning'>Status</span>: {i.status} <br /> <span className='text-primary'>{i.amount}</span> : 10,000 per month</p>
       <p className='mb-1'><span className='text-primary'>Perks</span>: {i.perks}</p>
       <p className='mb-2'><span className='text-primary'>Assesments</span>: {i.assesments} </p>


  </div>

  ))
}
</div>
</div>
 </div>

   
  )
}

export default page













      
    //   <h2>Applied Jobs and Internships by <strong>{student && student.firstName}</strong></h2>
    //      <ul className='list-group mb-3'>
    //         <h2>Job</h2><br />
    //   {student && student.jobs.map((j) => (
    //     <div className='list-group-item' key={j._id}>
    //       {JSON.stringify(j)} <br />

    //     </div>
    //   ))}
    // </ul>


    //      <ul className='list-group'>
    //         <h2>Internships</h2> <br />
    //   {student && student.internships.map((i) => (
    //     <div className='list-group-item' key={i._id}>
    //       {JSON.stringify(i)} <br />

    //     </div>
    //   ))}
    // </ul>









































