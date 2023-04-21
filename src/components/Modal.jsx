import { useGlobalContext } from '../AppContext'

const Modal = () => {

  //symbols
  const globe = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

  const hashTag = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
</svg>

  const tag = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
</svg>


  const {meals, loading, setShowModal, mealId} = useGlobalContext();
  
  const ingridient = meals.map(item => {return (mealId == item.idMeal && Object.keys(item).filter(ele=> ele.includes("strMeasure") && item[ele] && item[ele].length > 1).map(ele => item[ele]))})
console.log(ingridient)
  
  return (
    <div className="fixed left-0 top-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center h-full w-full overflow-y-auto overflow-x-hidden outline-none " onClick={()=>setShowModal(false)}>
      <div className="relative h-[80%] w-full md:w-[600px] bg-white border-2 m-10  rounded-xl" onClick={(e)=> e.stopPropagation()}>
        {meals.map(item=> {
          return(
            <div>{mealId == item.idMeal && 
              
              <div className=" h-fit p-2">
                
                <div className="relative bg-cover bg-center h-64 w-full rounded-md text-center" style={{backgroundImage: `url(${item.strMealThumb})`}}>
                  <span className=" absolute py-1 inset-x-0 top-0tracking-widest flex items-center justify-center text-3xl font-mono text-white backdrop-brightness-50 bg-white/10 max-h-full w-full rounded-md">{item.strMeal}</span>
                </div>
                
                
                <div className="flex justify-around items-center bg-slate-100 my-2 py-1 w-full rounded-md">
                  <span className="flex space-x-8">{globe}{item.strArea}</span>
                  {item.strTags && <span className="flex ">{hashTag}{item.strTags}</span>}
                  <span className="flex">{tag}{item.strCategory}</span>
                </div>

                <div className="grid grid-rows-2 w-full">
                  <table className="">
                    <thead>
                      <tr>
                        <th>Ingridients</th>
                      </tr>
                    </thead>
                      <tbody className="flex justify-center">
                        <tr>
                          <td>
                            "gg"
                          </td>
                        </tr>
                        {/* <tr >
                          {(Object.keys(item).filter(ele=> ele.includes("strMeasure") && item[ele] && item[ele].length > 1).map(ele => item[ele])).map(ele => {return <td className="grid grid-cols-1 text-right">{ele}  -  </td>})}
                        </tr>
                        
                        <tr>
                          {(Object.keys(item).filter(ele=> ele.includes("strIngredient") && item[ele]  && item[ele].length > 1).map(ele => item[ele])).map(ele => {return <td className="grid grid-cols-1">-  {ele}</td>})}
                        </tr> */}
                      </tbody>
                  </table>
                </div>
                
              </div> 
              
            }</div>
          )
          
        })}
      </div>
       
    </div>
  )
}

export default Modal
//left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none