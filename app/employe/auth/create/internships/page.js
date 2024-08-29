"use client"
import { asynccreateinternshipemploye} from '@/store/actions/employeActions'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from "./style.module.css"
import { toast } from 'react-toastify'

const page = () => {



  const [profile, setprofile] = useState('')
  const [skills, setskills] = useState('')
  const [internshipType, setinternshipType] = useState('')
  const [openings, setopenings] = useState('')
  const [from, setfrom] = useState('')
  const [to, setto] = useState('')
  const [duration, setduration] = useState('')
  const [responsibility, setresponsibility] = useState('')
   const [status, setstatus] = useState('')
   const [amount, setamount] = useState('')
   const [perks, setperks] = useState('')
   const [assesments, setassesments] = useState('')
    
  const dispatch =  useDispatch()
    const createHandler = ()=>{
    const newJob = {
        profile ,
   skills ,
   internshipType ,
   openings ,
   from ,
   to  ,
   duration ,
   responsibility ,
   stipend : {
    status ,
    amount 
 },
  perks  ,
   assesments 
    }
    try {
      dispatch(asynccreateinternshipemploye(newJob))
      toast("Successfully Created Internships")
    } catch (error) {
      toast.error(error.message)
      
    }
  }
   return (

    <div className={style.main}>
   

    <div className={style.profilemain}>
    <div className={style.container}>
    <h4>Create The Internship</h4>
    <form>
    
    <div className="form-outline mb-2 mx-4">
    <input type="text" id="form2Example2" className="form-control"
    placeholder='Profile'
    value={profile}
    onChange={(e) => setprofile(e.target.value)}  
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
    placeholder='Internship Type only (In-office , remote)'
    value={internshipType}
    onChange={(e) => setinternshipType(e.target.value)} 
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
    placeholder='From'
    value={from}
    onChange={(e) => setfrom(e.target.value)} 
    />
    </div>
    
    
    <div className="form-outline mb-2 mx-4">
    <input type="text" id="form2Example2" className="form-control" 
    placeholder='To'
    value={to}
    onChange={(e) => setto(e.target.value)} 
    />
    </div>
    
    
    <div className="form-outline mb-2 mx-4">
    <input type="text" id="form2Example2" className="form-control" 
    placeholder='Duration'
    value={duration}
    onChange={(e) => setduration(e.target.value)} 
    />
    </div>
    <div className="form-outline mb-2 mx-4">
    <input type="text" id="form2Example2" className="form-control" 
    placeholder='Responsibility'
    value={responsibility}
    onChange={(e) => setresponsibility(e.target.value)} 
    />
    </div>
    <div className="form-outline mb-2 mx-4">
      <label htmlFor="">Stipend</label>
    <input type="text" id="form2Example2" className="form-control" 
    placeholder='Status - Fixed, Negotiable, Performance-Based, unpaid'
    value={status}
    
    onChange={(e) => setstatus(e.target.value)} 
    />
    </div>

    <div className="form-outline mb-2 mx-4">
    <input type="text" id="form2Example2" className="form-control" 
    placeholder='Amount'
    value={amount}
    onChange={(e) => setamount(e.target.value)} 
    />
    </div>

    <div className="form-outline mb-2 mx-4">
    <input type="text" id="form2Example2" className="form-control" 
    placeholder='Perks'
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
    
    
    
    <button type="submit" onClick={createHandler} style={{marginLeft : "25px"}} className="btn btn-primary btn-block mb-2">Create Internship</button>
    
    
    </form>
    <hr />
    
    
    </div>
    </div>
    </div>
  )
}

export default page