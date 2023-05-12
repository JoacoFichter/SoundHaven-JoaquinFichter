import { Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { CartContainer } from './Components/CartContainer/CartContainer'
import { NavBar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import { CheckoutContainer } from './Components/CheckoutContainer/CheckoutContainer'
import './App.css'

function App() {
  return (
    <CartContextProvider>
      <NavBar className='navBar' />
      <Routes>
        <Route path='/SoundHaven-JoaquinFichter' element={<ItemListContainer greeting={'Welcome to Sound Haven!'} />} />
        <Route path='/SoundHaven-JoaquinFichter/category/:categoryId' element={<ItemListContainer greeting={'Shop by Category'} />} />
        <Route path='/SoundHaven-JoaquinFichter/brand/:brandId' element={<ItemListContainer greeting={'Shop by Brand'} />} />
        <Route path='/SoundHaven-JoaquinFichter/detail/:productId' element={<ItemDetailContainer />} />
        <Route path='/SoundHaven-JoaquinFichter/Cart' element={<CartContainer />}/>
        <Route path='/SoundHaven-JoaquinFichter/Checkout' element={<CheckoutContainer />} />
      </Routes>
    </CartContextProvider>
  )
}

export default App
