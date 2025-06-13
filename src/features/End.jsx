import { useNavigate } from "react-router-dom"

function End() {
    const navigate = useNavigate()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const today = new Date()
    const tomorrow = days[(today.getDay() + 1) % 7]
    const numbers = [1, 2, 3, 4, 5, 11, 12]
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
    const random = Math.floor(Math.random() * 61)
  return (
    <div className="w-full flex justify-evenly items-center h-screen bg-gradient-to-b from-orange-200 to-red-300">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center space-y-6">
    <h1 className="text-3xl font-bold text-red-600">Thank you for purchasing!<br/><span className="text-green-600">Your order will be delivered on this {tomorrow} by {randomNumber}:{random>=0 && random<11?`0${random}`:random} {(randomNumber<6 && randomNumber>0|| randomNumber == 12)?'pm':'am'} in Vit, Kondhwa campus</span></h1>
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