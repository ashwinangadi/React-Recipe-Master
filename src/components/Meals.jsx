import { useGlobalContext } from '../AppContext'


const Meals = () => {
  
  const heartFillSVG = <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
 
  
  const {meals, loading, setShowModal, setSelectedMeal, setFavorites, favorites, addFavorite} = useGlobalContext();

  if(loading){
    return(
    <div className="flex justify-center items-center h-full w-full">
      <div
        className=" h-14 w-14 m-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
    </div>
  </div>
    )
  }

  if(meals.length < 1){
    return(
      <div className="flex justify-center items-center container mx-auto text-6xl m-20">No Recipe matched, Try again...!!</div>
    )
  }

  
  
  return (
    <div className="container mx-auto m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center ">
      {meals.map(item => {
      
          return( 
            <div key={item.idMeal} className="relative bg-white p-3 m-5 drop-shadow-xl rounded-lg bg-[#f3edde] transition  ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer opacity-80 hover:opacity-100" onClick={()=>{
                setSelectedMeal(item)
                setShowModal(true)
              }}> 
              <img src={item.strMealThumb} loading="lazy"/>
              <div  className={`absolute fill-gray-100 hover:fill-rose-500 top-0 right-0 cursor-pointer ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 duration-300`} onClick={(e)=>{e.stopPropagation(); addFavorite(item) }}>{heartFillSVG}</div>
              <div className="absolute tracking-widest flex items-center justify-center text-3xl inset-x-0 bottom-3  mx-3 font-mono text-white backdrop-brightness-50 bg-white/10 max-h-full p-2 ">{item.strMeal}</div>
            </div>)
      
      })}
    </div>
  )
}
export default Meals
