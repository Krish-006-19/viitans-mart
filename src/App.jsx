import { useDispatch } from 'react-redux'
import './App.css'
import Homepage from './features/Homepage'
import { useEffect } from 'react'
import {auth} from './firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import {login, logout} from './Redux/userSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(user)=>{
      console.log(user)
      if(user)
      dispatch(login({
        displayName:user.displayName,
        email:user.email
      }))
      else{
        dispatch(logout())
      }
    })
    return unsub
  },[dispatch])
  return (
    <>
       <Homepage/>
    </>
  )
}

export default App