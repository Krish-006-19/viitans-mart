import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './features/Homepage'
import Signin from './features/Signin'
import Signup from './features/Signup'
import Sell from './features/Sell'
import Cart from './features/Cart'
import Items from './features/Items'
import ProdInfo from './features/ProdInfo'
import End from './features/End'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './Redux/userSlice';


function App1() {

  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          id:user.uid
        }));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);



  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Search' element={<Items/>}/>
        <Route path='/info' element={<ProdInfo/>}/>
        <Route path='/Stationary' element={<Items/>}/>
        <Route path='/pdf' element={<Items/>}/>
        <Route path='/aem' element={<Items/>}/>
        <Route path='/notes' element={<Items/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Sell' element={<Sell/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Thanks' element={<End/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App1