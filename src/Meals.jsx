import {useGlobalContext} from './AppContext'

const Meals = () =>{

  const context = useGlobalContext();
  console.log(context)
  return (
    <div>
       <h1>Meals</h1>
    </div>
  )
}

export default Meals
