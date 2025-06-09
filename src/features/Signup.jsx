import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../Redux/userSlice"
import { useNavigate } from "react-router-dom"

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signup = async(e) =>{
    e.preventDefault()
    try{
      const {user} = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(user, {
      displayName: name,
      id:name+email+password
    })
      if (name && email && password){
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        id: user.uid
      }))
      setEmail('')
      setName('')
      setPassword('')
    navigate('/')
    }
    }catch(err){
      throw err
    }
  }
  return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-orange-200 to-red-300">
          <div className="bg-white border p-8 rounded-lg shadow-md w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign In</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer transition duration-200"
        onClick={signup}
      >
        Sign In
      </button>
    </form>
  </div>
    </div>
  )
}

export default Signup