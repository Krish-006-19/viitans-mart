import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './features/Homepage'
import Signin from './features/Signin'
import Signup from './features/Signup'
import Sell from './features/Sell'
import Cart from './features/Cart'
import Items from './features/Items'

function App1() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Stationary' element={<Items/>}/>
        <Route path='/pdf' element={<Items/>}/>
        <Route path='/aem' element={<Items/>}/>
        <Route path='/notes' element={<Items/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Sell' element={<Sell/>}/>
        <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App1