
import axios from "@/utils/axios";

import { addEmploye , removeEmploye , removeErrors , iserror , addjobs , addinternships } from "../reducers/employeReducers";

export const asynccurrentemploye = () => async (dispatch , getState) =>{
 
    try {
        const { data } =  await axios.post("/employe/current")
         dispatch(addEmploye(data.employe))
    } catch (error) {
        dispatch(iserror(error.response))
    }


}


export const asyncsignupemploye = (employe) => async (dispatch , getState) =>{

    try {
        const { data } =  await axios.post("/employe/signup" , employe)
      dispatch(asynccurrentemploye());        
    } catch (error) {
        dispatch(iserror(error.response))
    }
}


export const asyncsigninemploye = (employe) => async (dispatch , getState) =>{

    try {
        const { data } =  await axios.post("/employe/signin" , employe)
       dispatch(asynccurrentemploye());        
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsignoutemploye = () => async (dispatch , getState) =>{

    try {
        const { data } =  await axios.get("/employe/signout")
       dispatch(removeEmploye())     
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncupdateemploye = (employe) => async (dispatch , getState) =>{
    
     const {_id} = getState().employeReducers.employe
    try {
        const { data } =  await axios.post("/employe/update/" + _id , employe)
       asynccurrentemploye()   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncavataremploye = (employe) => async (dispatch , getState) =>{
    
    const {_id} = getState().employeReducers.employe
   try {
       const { data } =  await axios.post("/employe/avatar/" + _id , employe)
      asynccurrentemploye()   
   } catch (error) {
       dispatch(iserror(error.response.data.message))
   }
}


export const asyncresetpasswordemploye = (password) => async (dispatch , getState) =>{
    
    const {_id} = getState().employeReducers.employe
   try {
       const { data } =  await axios.post("/employe/reset-password/" + _id , password)
      asynccurrentemploye()   
   } catch (error) {
       dispatch(iserror(error.response.data.message))
   }
}


export const asyncsendmailemploye = (email) => async (dispatch , getState) =>{
    
   try {
       const { data } =  await axios.post("/employe/send-mail/" , email)
    dispatch(asynccurrentemploye())   
   } catch (error) {
       dispatch(iserror(error.response.data.message))
   }
}


export const asyncotppasswordemploye = (pwd) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/employe/forget-link/" , pwd)
     dispatch(asynccurrentemploye())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 
 export const asynccreatejobemploye = (job) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/employe/job/create/" , job)
     dispatch(asynccurrentemploye())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 
 export const asynccreateinternshipemploye = (internship) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/employe/internship/create/" , internship)
     dispatch(asynccurrentemploye())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 
