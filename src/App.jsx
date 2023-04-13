import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import './App.css'

function App() {
  return (
    <>
      <NavBar className='navBar' />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Welcome to Sound Haven!'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Shop by Category'} />} />
        <Route path='/brand/:brandId' element={<ItemListContainer greeting={'Shop by Brand'} />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
}

export default App
