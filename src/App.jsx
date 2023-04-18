import './App.css'
import Meals from './components/Meals'
import Search from './components/Search'
import Modal from './components/Modal'
import Favorites from './components/Favorites'

export default function App() {
  return (
    <div className="relative bg-[#faf9ec]">
      <Search />
      <Favorites />
      <Meals />
{/*       <Modal /> */}
    </div>
  )
}
