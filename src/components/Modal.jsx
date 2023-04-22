import { useGlobalContext } from '../AppContext'
import ReactPlayer from "react-player";

const Modal = () => {

  //symbols
  const globe = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>

  const hashTag = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
  </svg>

  const tag = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>


  const close = <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>




  const { setShowModal, selectedMeal } = useGlobalContext();

  const ingridient = Object.keys(selectedMeal).filter(ele => ele.includes("strIngredient") && selectedMeal[ele] && selectedMeal[ele].length > 0).map(ele => selectedMeal[ele])
  const measurement = Object.keys(selectedMeal).filter(ele => ele.includes("strMeasure") && selectedMeal[ele] && selectedMeal[ele].length > 0).map(ele => selectedMeal[ele])

  return (
    <div className="grid place-items-center p-14 fixed left-0 top-0 z-30 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center h-full w-full overflow-y-scroll no-scrollbar overflow-x-hidden outline-none " onClick={() => setShowModal(false)}>
      <div className="place-self-end -mb-4 ml-5 cursor-pointer ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 duration-300 stroke-1 fill-gray-500 hover:fill-rose-500 z-50 text-3xl" onClick={()=> setShowModal(false)}>{close}</div>
      <div className="relative w-[95vw] md:w-[700px] bg-white p-1 rounded-xl font-sans" onClick={(e) => e.stopPropagation()}>
        
        <div className="relative bg-cover bg-center h-64 w-full rounded-md text-center" style={{ backgroundImage: `url(${selectedMeal.strMealThumb})` }}>
            <span className=" absolute py-1 inset-x-0 top-0 tracking-widest flex items-center justify-center text-3xl font-mono text-white backdrop-brightness-50 bg-white/10 max-h-full w-full rounded-md z-50">{selectedMeal.strMeal}</span>
        </div>
        

        <div className="flex justify-around items-center bg-slate-100 my-2 py-1 w-full rounded-md text-lg antialiased italic tracking-wider">
          <span className="flex space-x-8">{globe}{selectedMeal.strArea}</span>
            {selectedMeal.strTags && <span className="flex ">{hashTag}{selectedMeal.strTags}</span>}
          <span className="flex">{tag}{selectedMeal.strCategory}</span>
        </div>

        <div>  
          <table className="grid table-fixed my-3 antialiased ">
            <thead className="grid place-content-center text-xl mb-2 tracking-widest text-slate-600/75 ">
              <tr>
                <th className="font-semibold">Ingridients</th>
              </tr>
            </thead>
              
            <tbody className="grid grid-cols-1 gap-1 px-5">
                {ingridient.map((ele, index) => {
                  return (<tr key={index} className="grid grid-cols-3 gap-1 bg-slate-50 font-medium tracking-wide text-slate-600">
                    <td className="text-right">{ele}</td>
                    <td className="text-center">---</td>
                    <td className="">{measurement[index]}</td> 
                  </tr>)
                  })}
              
              
            </tbody>
          </table>
        </div>
        
          <div className="grid justify-items-center px-5 text-justify my-3 antialiased ">
            <span className="text-xl mb-2 font-semibold tracking-widest text-slate-600/75">Instructions</span>
            <p className="font-medium tracking-wide text-slate-600">{selectedMeal.strInstructions}</p>
          </div>

          <div className="rounded-lg p-5">
            <ReactPlayer 
              width='100%'
              height='400px' 
              controls = {true}
              url={selectedMeal.strYoutube}
              />
              
          </div>
          
      </div>
      
    </div>
      
  )
}

export default Modal
