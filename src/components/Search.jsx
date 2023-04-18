import {useGlobalContext} from '../AppContext'

const Search = () => {

  const {randomMeals}=useGlobalContext()

  const surprise = () => {
    console.log(randomMeals)
  }
  
  return (
    <div className="grid grid-cols-2 justify-items-center content-center z-10 fixed bg-[#e8ead9] w-full top-0 left-0 right-0 opacity-70 hover:opacity-100">
      <div className="font-mono flex items-center justify-center text-3xl md:text-6xl my-5 w-full">Recipe Master</div>
      <div className="grid md:grid-cols-3 grid-rows-1 content-center w-full my-6 mr-5">
        <input className="col-span-2 w-full my-1 mr-2 px-3 py-0 rounded-lg drop-shadow-lg outline-none" placeholder="Search Recipe.."></input>
        <button  type="button" className="font-mono rounded-lg border-2 border-slate-900 md:text-2xl hover:text-white hover:bg-gray-900 bg-[#faf9ec] my-1 md:ml-2 cursor-pointer drop-shadow-lg" onClick={surprise}>surprise</button>
      </div>
    </div>
  )
}

export default Search