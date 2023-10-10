import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 student : null,
 addjobs : null,
 addinternships : null,
 errors : [],
 isAuthenticated : false
}

export const studentReducers = createSlice({
  name: 'student',
  initialState,
  reducers: {
   
    addStudent : (state , action) => {
        state.student = action.payload;
        state.isAuthenticated = true;
    },
    addjobs : (state , action) => {
      state.jobs = action.payload;
  },

  addinternships : (state , action) => {
    state.internships = action.payload;
},
    removeStudent : (state  , action) =>{
       state.student = null;
       state.isAuthenticated = false;
    },

    iserror : (state , action) =>{
        state.errors.push(action.payload)
    },
    removeErrors : (state , action) =>{
        state.errors = [];
    }
  },
})


export const { addStudent , removeStudent , iserror , removeErrors , addjobs, addinternships } = studentReducers.actions

export default studentReducers.reducer