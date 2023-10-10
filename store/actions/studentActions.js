
import axios from "@/utils/axios";

import { addStudent , removeStudent , removeErrors , iserror , addjobs , addinternships } from "../reducers/studentReducers";

export const asynccurrentstudent = () => async (dispatch , getState) =>{
 
    try {
        const { data } =  await axios.post("/student")
         dispatch(addStudent(data.student))
    } catch (error) {
        dispatch(iserror(error.response))
    }


}


export const asyncsignupstudent = (student) => async (dispatch , getState) =>{

    try {
        const { data } =  await axios.post("/student/signup" , student)
      dispatch(asynccurrentstudent());        
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsigninstudent = (student) => async (dispatch , getState) =>{

    try {
        const { data } =  await axios.post("/student/signin" , student)
       dispatch(asynccurrentstudent());        
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncsignoutstudent = () => async (dispatch , getState) =>{

    try {
        const { data } =  await axios.get("/student/signout")
       dispatch(removeStudent())     
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncupdatestudent = (student) => async (dispatch , getState) =>{
    
     const {_id} = getState().studentReducers.student
    try {
        const { data } =  await axios.post("/student/update/" + _id , student)
       asynccurrentstudent()   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncavatarstudent = (student) => async (dispatch , getState) =>{
    
    const {_id} = getState().studentReducers.student
   try {
       const { data } =  await axios.post("/student/avatar/" + _id , student)
      asynccurrentstudent()   
   } catch (error) {
       dispatch(iserror(error.response.data.message))
   }
}


export const asyncresetpasswordstudent = (password) => async (dispatch , getState) =>{
    
    const {_id} = getState().studentReducers.student
   try {
       const { data } =  await axios.post("/student/reset-password/" + _id , password)
      asynccurrentstudent()   
   } catch (error) {
       dispatch(iserror(error.response.data.message))
   }
}


export const asyncsendmailstudent = (email) => async (dispatch , getState) =>{
    
   try {
       const { data } =  await axios.post("/student/send-mail/" , email)
    dispatch(asynccurrentstudent())   
   } catch (error) {
       dispatch(iserror(error.response.data.message))
   }
}


export const asyncotppasswordstudent = (pwd) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/student/forget-link/" , pwd)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 export const asyncalljobsstudent = () => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/student/alljobs/" )
     dispatch(addjobs(data.jobs))   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 
 export const asyncallinternshipssstudent = () => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/student/allinternships/" )
     dispatch(addinternships(data.internships))   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }



 export const asyncapplyjobsstudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/student/apply/job/" + id)
     dispatch(asynccurrentstudent())   
     dispatch(asyncalljobsstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 
 export const asyncapplyinternshipsstudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/student/apply/internship/" + id)
     dispatch(asynccurrentstudent())   
     dispatch(asyncallinternshipssstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 export const asyncresumeaddedustudent = (edu) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/add-edu" , edu)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumedeleteedustudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/delete-edu/" + id)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }

 
  
 export const asyncresumeeditedustudent = (id , edit) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/edit-edu/" + id , edit)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumeaddjobstudent = (job) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/add-jobs" , job)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumedeletejobstudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/delete-jobs/" + id)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response))
    }
 }

 
  
 export const asyncresumeeditjobstudent = (id , job) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/edit-jobs/" + id , job)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

  
 export const asyncresumeaddresponsibilitystudent = (response) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/add-responsibility" , response)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumedeleteresponsibilitystudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/delete-responsibility/" + id)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response))
    }
 }

 
  
 export const asyncresumeeditresponsibilitystudent = (id , response) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/edit-responsibility/" + id , response)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

   
 export const asyncresumeaddinternshipstudent = (intern) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/add-interships" , intern)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumedeleteinternshipstudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/delete-interships/" + id)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response))
    }
 }

 
  
 export const asyncresumeeditinternshipstudent = (id , intern) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/edit-interships/" + id , intern)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
   
 export const asyncresumeaddcoursesstudent = (course) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/add-courses" , course)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumedeletecoursesstudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/delete-courses/" + id)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response))
    }
 }

 
  
 export const asyncresumeeditcoursesstudent = (id , course) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/edit-courses/" + id , course)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

    
 export const asyncresumeaddskillstudent = (skill) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/add-skills" , skill)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumedeleteskillstudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/delete-skills/" + id)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response))
    }
 }

 
  
 export const asyncresumeeditskillstudent = (id , skill) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/edit-skills/" + id , skill)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

     
 export const asyncresumeaddprojectstudent = (project) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/add-projects" , project)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumedeleteprojectstudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/delete-projects/" + id)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response))
    }
 }

 
  
 export const asyncresumeeditprojectstudent = (id , project) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/edit-projects/" + id , project)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 export const asyncresumeaddaccomplishmentstudent = (accomplishment) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/add-accomplishments" , accomplishment)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 

 
 export const asyncresumedeleteaccomplishmentstudent = (id) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/delete-accomplishments/" + id)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response))
    }
 }

 
  
 export const asyncresumeeditaccomplishmentstudent = (id , accomplishment) => async (dispatch , getState) =>{
    
    try {
        const { data } =  await axios.post("/resume/edit-accomplishments/" + id , accomplishment)
     dispatch(asynccurrentstudent())   
    } catch (error) {
        dispatch(iserror(error.response.data.message))
    }
 }
 