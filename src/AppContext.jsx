import React, { useContext, useEffect, useState } from 'react'
import mealDB from './apis/mealDB'

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([])
  const [randomMeals, setRandomMeals] = useState([])
  
    const allMeals = async () =>{
      try{
        const {data} = await mealDB.get("/search.php",{
        params: {
          s : "a"
        }
      })
         //console.log(data)
        setMeals(data.meals)
      }catch (error){
        console.log(error)
      }
    }

    const randomMeal = async () =>{
      try{
        const response = await mealDB.get("random.php")
         console.log(response.data.meals[0])
        setRandomMeals(response.data.meals[0])
      }catch (error){
        console.log(error)
      }
    }
  
  
  useEffect(() => {
    allMeals();
    randomMeal();
  }, [])

  

  return <AppContext.Provider value={{meals, randomMeals}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }