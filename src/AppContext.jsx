import React, { useContext, useEffect, useState } from 'react'
import mealDB from './apis/mealDB'

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

  const mealByName = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"



  //To show modal
  const [showModal, setShowModal] = useState(false)

  //Meals states
  const [meals, setMeals] = useState([])

  //Loading state
  const [loading, setLoading] = useState(false)

  //search Input state
  const [input, setInput] = useState("")

  //To set Meal ID to access data in modal
  const [selectedMeal, setSelectedMeal] = useState("")

  //To set favorites
  const [favorites, setFavorites] = useState([])

  const addFavorite = (item) => {
      if(favorites.indexOf(item) === -1){
        setFavorites([...favorites, item])
      } 
  }

  const removeFavorite = (item) => {
    favorites.forEach((ele, index) => {
      if(item == ele.idMeal){
         setFavorites(favorites.toSpliced(index,1))
      }  
    })
  }

  const allMeals = async () => {
    setLoading(true)
    try {
      const { data } = await mealDB.get("/search.php", {
        params: {
          s: input
        }
      })
      //console.log(data)
      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
      }

    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const randomMeal = async () => {
    setLoading(true)
    try {
      const response = await mealDB.get("random.php")
      //console.log(response.data.meals)
      if (response.data.meals) {
        setSelectedMeal(response.data.meals[0])
      } else {
        setSelectedMeal([])
      }

    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    allMeals();
  }, [])

  useEffect(() => {
    if (!input) return
    allMeals();
  }, [input])


  return <AppContext.Provider value={{ meals, randomMeal, input, setInput, loading, showModal, setShowModal, selectedMeal, setSelectedMeal, favorites, setFavorites, addFavorite, removeFavorite}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }