import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 addEmploye : null,
 addjobs : null,
 addinternships : null,
 errors : [],
 isAuthenticated : false
}

export const employeReducers = createSlice({
  name: 'employe',
  initialState,
  reducers: {
   
    addEmploye : (state , action) => {
        state.employe = action.payload;
        state.isAuthenticated = true;
    },
    addjobs : (state , action) => {
      state.jobs = action.payload;
  },

  addinternships : (state , action) => {
    state.internships = action.payload;
},
    removeEmploye : (state  , action) =>{
       state.employe = null;
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


export const { addEmploye , removeEmploye , iserror , removeErrors , addjobs, addinternships } = employeReducers.actions

export default employeReducers.reducer