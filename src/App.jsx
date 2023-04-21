import './App.css'
import Meals from './components/Meals'
import Search from './components/Search'
import Modal from './components/Modal'
import Favorites from './components/Favorites'
import {useGlobalContext} from './AppContext'

export default function App() {

  const {showModal}=useGlobalContext()
  
  return (
    <div className="relative bg-[#faf9ec]">
      <Search />
      <Favorites />
      <Meals />
      {showModal && <Modal />}
    </div>
  )
}
