import { useNavigate } from "react-router-dom"

function Signin() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-orange-200 to-red-300">
          <div className="bg-white border p-8 rounded-lg shadow-md w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign In</h2>
    <form>
      <div className="mb-4">
        <label for="email" className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label for="password" className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer transition duration-200"
      >
        Sign In
      </button>
    </form>
    <p className="text-sm text-center text-gray-500 mt-4">
      Don't have an account?
      <span className="text-blue-500 hover:underline cursor-pointer" onClick={()=>navigate('/Signup')}>Sign Up</span>
    </p>
  </div>
    </div>
  )
}

export default Signin