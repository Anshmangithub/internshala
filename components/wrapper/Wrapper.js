"use client";
import { store } from "@/store/store"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"


const Wrapper = ({children}) => {
  return (
    <>
    <Provider store={store}> 

    {children}
    <ToastContainer/>
    </Provider>

    </>
  )
}

export default Wrapper