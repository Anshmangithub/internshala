import { configureStore } from '@reduxjs/toolkit'
import studentReducers from './reducers/studentReducers'
import employeReducers from './reducers/employeReducers'
export const store = configureStore({
  reducer: { studentReducers , employeReducers},

})