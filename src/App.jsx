import NavBar from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <NavBar className='navBar' />
      <ItemListContainer greeting={'Welcome to Sound Haven!'}/>
    </>
  )
}

export default App
