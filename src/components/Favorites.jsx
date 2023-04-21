import { useGlobalContext } from '../AppContext'


const Favorites = () => {

  const { favorites, removeFavorite } = useGlobalContext();
  
  const close = <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  
  
  return (
    <div className="grid grid-rows-4 justify-items-center mt-28 md:mt-24 z-50 w-full bg-gray-200 text-center overflow-x-auto">
      <div className="grid grid-rows-1 mb-2 text-2xl font-sans tracking-widest">{favorites.length == 0 ? "No Favorites Added" : "Favorites"}</div>
      <div className="flex row-span-2 ">{favorites.map((ele)=>{
          return(
            <div key={ele.idMeal} className="mx-2 mt-3 border-2 border-white relative bg-white h-20 w-20 pb-3 drop-shadow-xl rounded-full bg-[#f3edde] transition  ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer opacity-80 hover:opacity-100"> 
                  <img className="rounded-full" src={ele.strMealThumb}/>
                  
                  <div className="absolute flex justify-center text-sm inset-x-0 -bottom-1 text-white backdrop-brightness-50 bg-white/10 h-1/2 max-h-full">{ele.strMeal}</div>
              <div className="place-self-end -mb-4 ml-5 cursor-pointer ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 duration-300 stroke-1 hover:fill-blue-500 z-50 text-3xl" onClick={()=> removeFavorite(ele.idMeal) }>{close}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Favorites