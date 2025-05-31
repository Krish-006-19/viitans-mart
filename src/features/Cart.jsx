import { useState } from 'react'
import { usePage } from '../ContextAPI/Context'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cart, setCart } = usePage()
  const [quantities, setQuantities] = useState({})
  const navigate = useNavigate()
  const crt = cart.filter((value, index) => index === cart.findIndex(t =>{ 
    console.log(t.id) 
    console.log(value.id) 
    return t.id === value.id
  }))

  let sum = 0

  return (
    <div className='w-full flex justify-evenly items-center h-screen bg-gradient-to-b from-orange-200 to-red-300'>
      <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        <div className="flex flex-col gap-4">
          {crt?.map((value) => {
            const quantity = quantities[value.id] || 1
            sum += quantity * Number(value.price)

            return (
              <div className="flex items-start gap-4 border p-4 rounded" key={value.id}>
                <img src={value.imgurl} className='w-[160px] h-[160px]' />
                <div className="flex-1">
                  <h2 className="font-semibold">{value.description}</h2>
                  <span className="text-orange-500 font-semibold">{(Math.random() * 4 + 1).toFixed(1)}/5</span>
                  <p className="mt-1 text-sm">{value.category}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      className={`px-2 py-1 border rounded ${quantity === 1 ? 'hidden' : ''}`}
                      onClick={() =>
                        setQuantities((prev) => ({
                          ...prev,
                          [value.id]: Math.max((prev[value.id] || 1) - 1, 1)
                        }))
                      }
                    >-</button>
                    <span>{quantity}</span>
                    <button
                      className={`px-2 py-1 border rounded ${quantity === 12 ? 'hidden' : ''}`}
                      onClick={() =>
                        setQuantities((prev) => ({
                          ...prev,
                          [value.id]: Math.min((prev[value.id] || 1) + 1, 12)
                        }))
                      }
                    >+</button>
                    <button
                      className="ml-4 text-red-600"
                      onClick={() => setCart(prev => prev.filter(item => item.id !== value.id))}
                    >Delete</button>
                  </div>
                </div>
                <div className="font-bold text-lg text-right">₹{Number(value.price)}</div>
              </div>
            );
          })}
        </div>

        <div className="border-t pt-4 mt-6 flex justify-center items-start">
          <div className="">
            <p className="text-lg text-center font-bold">Subtotal: ₹{sum}</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 w-full text-black px-6 py-2 mt-2 rounded"
            onClick={()=>{
              setCart([])
              navigate('/Thanks')
            }}>Proceed to Buy</button>
            <p className="text-sm mt-2 text-center text-green-600">FREE Delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart
