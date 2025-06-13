import { useState } from 'react'
import { usePage } from '../ContextAPI/Context'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Cart() {
  const { cart, setCart, subj } = usePage()
  const [quantities, setQuantities] = useState({})
  const navigate = useNavigate()
  const user = useSelector(state=>state.user.user)
  const crt = (cart||[]).filter(val=>val.currUser === user?.id).filter((value, index, self) => index === self.findIndex(val =>val.id === value.id))

  let sum = 0


   const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", 
      currency: 'INR',
      amount: Number(sum)*100, // amount in paise = ₹500
      name: 'Transaction',
      description: 'Payment',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHzYUqhkmidrXAPILvg2QYzARDoCKToR7gA&s',
      handler:()=>navigate('/Thanks'),
      prefill: {
        name: 'Test User',
        email: subj.email,
        contact:subj.number,
      },
    };

    const paymentObject = new window.Razorpay(options);
    await paymentObject.open()
  };
  



  return (
    <div className='w-full flex justify-evenly items-center h-screen bg-gradient-to-b from-orange-200 to-red-300'>
      <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

<div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
  {user && crt?.map((value) => {
    const quantity = quantities[value.id] || 1
    console.log(user)
    console.log(value.currUser)
    console.log(user.uid)
    sum += quantity * Number(value.price)
    if(value.currUser == user?.id){
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
    )}
  })}
</div>
         <div className="border-t pt-4 mt-6 flex justify-center items-start">
         <div className="">
         <p className="text-lg text-center font-bold">{crt.length?`Subtotal: ₹${sum}`:''}</p>
           <button className={`${crt.length?'':'hidden'} bg-yellow-400 hover:bg-yellow-500 w-full text-black px-6 py-2 mt-2 rounded`}
           onClick={async()=>{
          await displayRazorpay()
           setCart([])
        }}>Proceed to Buy</button>
         <p className="text-sm mt-2 text-center text-green-600">FREE Delivery.</p>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Cart

/*
function Cart() {
  const { cart, setCart } = usePage()
  const [quantities, setQuantities] = useState({})
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  const crt = (cart || [])
    .filter(item => item.currUser === user?.id)
    .filter((value, index, self) => index === self.findIndex(t => t.id === value.id))

  let sum = 0

  return (
    <div className='w-full flex justify-evenly items-center h-screen bg-gradient-to-b from-orange-200 to-red-300'>
      <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
          {crt.map(value => {
            const quantity = quantities[value.id] || 1
            sum += quantity * Number(value.price)

            return (
              <div className="flex items-start gap-4 border p-4 rounded" key={value.id}>
                <img src={value.imgurl} className='w-[160px] h-[160px]' alt="" />
                <div className="flex-1">
                  <h2 className="font-semibold">{value.description}</h2>
                  <span className="text-orange-500 font-semibold">{(Math.random() * 4 + 1).toFixed(1)}/5</span>
                  <p className="mt-1 text-sm">{value.category}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      className={`px-2 py-1 border rounded ${quantity === 1 ? 'hidden' : ''}`}
                      onClick={() =>
                        setQuantities(prev => ({
                          ...prev,
                          [value.id]: Math.max((prev[value.id] || 1) - 1, 1)
                        }))
                      }
                    >-</button>
                    <span>{quantity}</span>
                    <button
                      className={`px-2 py-1 border rounded ${quantity === 12 ? 'hidden' : ''}`}
                      onClick={() =>
                        setQuantities(prev => ({
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
            )
          })}
        </div>

        <div className="border-t pt-4 mt-6 flex justify-center items-start">
          <div>
            {crt.length > 0 && (
              <>
                <p className="text-lg text-center font-bold">Subtotal: ₹{sum}</p>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 w-full text-black px-6 py-2 mt-2 rounded"
                  onClick={() => {
                    setCart([])
                    navigate('/Thanks')
                  }}
                >
                  Proceed to Buy
                </button>
                <p className="text-sm mt-2 text-center text-green-600">FREE Delivery.</p>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
*/