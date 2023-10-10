"use client"

import { asyncapplyinternshipsstudent, asyncapplyjobsstudent } from '@/store/actions/studentActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./style.module.css"
  import Link from 'next/link'
  const page = () => {
     const dispatch = useDispatch()
    const {student , jobs , internships} = useSelector((state) => state.studentReducers)
 

    const ApplyjobHandler  = (id)=>{
      dispatch(asyncapplyjobsstudent(id))
    }

    const ApplyinternshipsHandler  = (id)=>{
      dispatch(asyncapplyinternshipsstudent(id))
    }


    useEffect(()=>{

    },[student])
   
  return (
    <div className={style.main}>
    
     <div className={style.dekstopauth}> 
     <h3 className={style.clientName}>Hii, <span>{student && student.firstName }</span> Available Jobs & Internships for you</h3>
     <h5 className={style.jobsfont}>Jobs</h5>
     <h5 className={style.internshipfont}>Internships</h5>
     <div className={style.leftjob}>


     {jobs && jobs.map((j) =>(




      <div className={style.jobsdiv} key={j._id}>
        <h5 className={style.title}>{j.title}</h5>
        <p className='mb-1'>{j.skills}</p>
        <p className='mb-1'><span className='text-primary'>Type</span> : {j.jobType}</p>
        <p className='mb-1'><span className='text-primary'>Openings</span> : {j.openings}</p>
        <p className='mb-1'><span className='text-primary'>Description</span>: {j.description}</p>
         <p className='mb-1'><span className='text-primary'>Preferences</span> : {j.preferences} </p>
       <p className='mb-1'><span className='text-primary'>Salary</span>: {j.salary}</p>
       <p className='mb-1'><span className='text-primary'>Perks</span>: {j.perks}</p>
       <p className='mb-2'><span className='text-primary'>Assesments</span>: {j.assesments} </p>

       {!j.students.includes(student && student._id) ? <button className='btn btn-primary' onClick={() =>ApplyjobHandler(j._id)}>Apply Job</button> : <h5 className='text-success'>Already Applied This Job</h5> }
     
      </div>
     ))}
     


  
     

     </div>
     <div className={style.rightinternship}>

      {internships && internships.map((i) => ( 
      <div className={style.jobsdiv} key={i._id}>
        <h5 className={style.title}>{i.profile}</h5>
        <p className='mb-1'><span className='text-primary'>Skills</span>:{i.skills}</p>
        <p className='mb-1'><span className='text-primary'>Internship Type</span> : {i.internshipType}</p>
        <p className='mb-1'><span className='text-primary'>Openings</span> : {i.openings}</p>
        <p className='mb-1'><span className='text-primary'>From-To</span>: {i.from} - {i.to}</p>
         <p className='mb-1'><span className='text-primary'>Duration</span> : {i.duration}</p>
       <p className='mb-1'><span className='text-primary'>Stipend</span>: <span className='text-warning'>Status</span>: {i.status} <br /> <span className='text-primary'>{i.amount}</span> : 10,000 per month</p>
       <p className='mb-1'><span className='text-primary'>Perks</span>: {i.perks}</p>
       <p className='mb-2'><span className='text-primary'>Assesments</span>: {i.assesments} </p>

  
       {!i.students.includes( student && student._id) ? <button className='btn btn-primary' onClick={() =>ApplyinternshipsHandler(i._id)}>Apply Internships</button> : <h5 className='text-success'> Already Applied This Internships</h5> }
     
      </div>))}
    
     </div>
     </div>
    
    </div>
  )
}

export default page







































