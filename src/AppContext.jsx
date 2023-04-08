import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext();

const AppProvider =({children})=>{

  useEffect(()=>{
    console.log("Fetch here")
  },[])

  return<AppContext.Provider value={{name : "Sina"}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () =>{
  return useContext(AppContext)
}
export { AppContext, AppProvider }