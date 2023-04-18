import { useGlobalContext } from '../AppContext'


const Meals = () => {

  
 

  const heartFillSVG = <svg id="red" xmlns="http://www.w3.org/2000/svg" fill="#ff4d6d" viewBox="0 0 24 24" strokeWidth="0" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>

  
  
  const {meals} = useGlobalContext();
  return (
    <div className="container mx-auto m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
      {meals.map(item => {
      
          return( 
            <div className="relative bg-white p-3 m-3 drop-shadow-xl rounded-lg bg-[#f3edde] transition  ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer " key={item.idMeal}> 
              <img src={item.strMealThumb}/>
              <div  className="absolute text-2xl fill-zinc-200 top-0 right-0 cursor-pointer ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 duration-300" onClick={()=>{ console.log("added to Fav")}}>{heartFillSVG}</div>
              <div className="absolute text-4xl inset-x-0 bottom-3 text-center mx-3 font-mono text-white backdrop-brightness-50 bg-white/10 h-16 p-3 ">{item.strMeal}</div>
              
            </div>)
      
      })}
    </div>
  )
}
export default Meals
