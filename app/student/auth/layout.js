"use client"
import { asyncallinternshipssstudent, asyncalljobsstudent } from '@/store/actions/studentActions'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const StudentAuth = ({children}) => {
    const router = useRouter()
     const dispatch = useDispatch()
  const {isAuthenticated} = useSelector((state) => state.studentReducers) 
 useEffect(()=>{
  
  if(!isAuthenticated) router.push("/student")
  if(isAuthenticated){
    
       dispatch(asyncalljobsstudent());
       dispatch(asyncallinternshipssstudent())

  }
},[isAuthenticated])
  return (
 
 children
  )
}

export default StudentAuth