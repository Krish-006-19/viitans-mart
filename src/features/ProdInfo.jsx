import { useSelector } from "react-redux"
import { usePage } from "../ContextAPI/Context"
import { useNavigate } from "react-router-dom"
import Signin from './Signin'

function ProdInfo() {
  const {subj, setCart} = usePage()
  const user = useSelector(state=>state.user.user)
  const navigate = useNavigate()
  return (
    <div className=" w-full flex justify-evenly items-center h-screen bg-gradient-to-b from-orange-200 to-red-300 ">
      {user?
<div className="flex flex-col lg:flex-row p-6 gap-8 max-w-7xl mx-auto border rounded-2xl bg-white">
  <div className="flex flex-col lg:flex-row gap-4">
  
    <div>
      <img src={subj.imgurl} className="w-[480px] h-[480px] max-w-md rounded" />
    </div>
  </div>

  <div className="flex-1 space-y-3">
    <h1 className="text-2xl font-semibold">
      {subj.description}
      <br/>
    </h1>

    <div className="flex items-center space-x-2">
      <span className="text-orange-500 font-semibold">{(Math.random() * 4 + 1).toFixed(1)}/5</span>
      <span className="text-gray-600">{Math.floor(Math.random() * (1500 - 200 + 1)) + 200}</span>
    </div>

    <p className="text-gray-600 text-sm">{Math.floor(Math.random() * 10) + 1}K+ bought in past month</p>

    <div className="text-xl font-bold text-green-600">&#8377;{subj.price}</div>
    <p className="text-sm text-gray-500">{subj.category}</p>
    <div className="text-sm text-gray-600">Sold by <strong>Clicktech Retail Pvt Ltd</strong></div>
    <br/>
    <br/>
    <button className="w-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-black font-semibold py-2 rounded" 
    onClick={()=>{
      setCart((prev)=>[...prev,{...subj}])
    }}>Add to Cart</button>
    <button className="w-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-black font-semibold py-2 rounded">Ratings</button>
  </div>
  </div>:
<Signin/>
}
    </div>
  )
}

export default ProdInfo