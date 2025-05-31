import { useNavigate } from "react-router-dom"

function End() {
    const navigate = useNavigate()
  return (
    <div className="w-full flex justify-evenly items-center h-screen bg-gradient-to-b from-orange-200 to-red-300">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center space-y-6">
    <h1 className="text-3xl font-bold text-green-600">Thank you for purchasing!</h1>
    <p className="text-lg text-gray-700">Wanna purchase more?<br />Click the button!</p>
    <button
      className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition duration-200"
      onClick={()=>{
        navigate('/')
      }}
    >
      Shop More
    </button>
  </div>
    </div>
  )
}

export default End