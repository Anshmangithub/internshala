"use client"
import { asyncallinternshipssemploye, asyncalljobsemploye } from '@/store/actions/employeActions'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const EmployeAuth = ({children}) => {
    const router = useRouter()
     const dispatch = useDispatch()
  const {isAuthenticated} = useSelector((state) => state.employeReducers) 
 useEffect(()=>{
  
  if(!isAuthenticated) router.push("/employe")
  
},[isAuthenticated])
  return (

   children
  )
}

export default EmployeAuth