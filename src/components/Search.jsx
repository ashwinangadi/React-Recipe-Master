import {useGlobalContext} from '../AppContext'


const Search = () => {

  const {input, randomMeal, setInput, setShowModal}=useGlobalContext()
  
  // Surprise button
  const surprise = () => {
    randomMeal()
    setShowModal(true)
  }
  
  return (
    <div className="grid grid-cols-2 justify-items-center content-center z-10 fixed bg-[#dee2e6] w-full top-0 left-0 right-0 opacity-70 hover:opacity-100">
      <div className="underline underline-offset-4 font-mono flex items-center justify-center text-3xl md:text-6xl my-5 w-full px-2">Recipe Master</div>
      <div className="grid md:grid-cols-3 grid-rows-1 content-center w-full my-6 mr-5  md:flex-wrap">
        <input className="col-span-2 w-full my-1 mr-2 px-3 py-0 rounded-lg drop-shadow-lg outline-none border-2 border-slate-950" placeholder="Search Recipe.." onChange={(e) => setInput(e.target.value)} value={input}></input>
        <button  type="button" className="font-mono rounded-lg border-2 border-slate-900 md:text-2xl hover:text-white hover:bg-gray-900 bg-white my-1 md:ml-2 cursor-pointer drop-shadow-lg" onClick={()=>surprise()}>surprise</button>
      </div>
    </div>
  )
}

export default Search