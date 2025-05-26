import React from 'react'
import { usePage } from '../ContextAPI/Context'

function Cart() {
    const {subj} = usePage()
  
  return (
    <div>
      <div class="max-w-7xl mx-auto bg-white p-6 rounded shadow">
    <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>

    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-4 border p-4 rounded">
        <input type="checkbox" checked class="mt-2" />
        <img src={subj.imgurl} alt="Phone" class="w-24 h-24 object-cover rounded" />
        <div class="flex-1">
          <h2 class="font-semibold">{subj.description}</h2>
          <span className="text-orange-500 font-semibold">{(Math.random() * 4 + 1).toFixed(1)}/5</span>
          <p class="mt-1 text-sm">{subj.category}</p>
          <p class="text-sm">Storage: 128 GB | RAM: 8 GB</p>
          <div class="mt-2 flex items-center gap-2">
            <button class="px-2 py-1 border rounded">-</button>
            <span>1</span>
            <button class="px-2 py-1 border rounded">+</button>
            <button class="ml-4 text-blue-600">Delete</button>
          </div>
        </div>
        <div class="font-bold text-lg text-right">₹{subj.price}</div>
      </div>

      <div class="flex items-start gap-4 border p-4 rounded">
        <input type="checkbox" checked class="mt-2" />
        <img src="https://m.media-amazon.com/images/I/61a7JjS64KL._SX679_.jpg" alt="Hooks" class="w-24 h-24 object-cover rounded" />
        <div class="flex-1">
          <h2 class="font-semibold">Zulaxy Photo Frame Hooks (10 Pack)</h2>
          <p class="text-sm text-gray-600">Self Adhesive Hooks, Wall Heavy Duty, Nail Free</p>
          <div class="bg-orange-200 inline-block px-2 py-0.5 text-sm rounded mt-1">#1 Best Seller</div>
          <div class="mt-2 flex items-center gap-2">
            <button class="px-2 py-1 border rounded">-</button>
            <span>1</span>
            <button class="px-2 py-1 border rounded">+</button>
            <button class="ml-4 text-blue-600">Delete</button>
          </div>
        </div>
        <div class="text-right">
          <p class="font-bold text-lg text-red-500">₹259.00</p>
          <p class="text-sm line-through text-gray-500">₹1,299.00</p>
          <p class="text-green-600 text-xs">-80% Limited deal</p>
        </div>
      </div>
    </div>

    <div class="border-t pt-4 mt-6 flex justify-between items-start">
      <div>
        <input type="checkbox" class="mr-2" />
        <span>This order contains a gift</span>
      </div>
      <div class="text-right">
        <p class="text-lg font-bold">Subtotal (2 items): ₹23,257.00</p>
        <button class="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 mt-2 rounded">Proceed to Buy</button>
        <p class="text-sm mt-2 text-green-600">Your order is eligible for FREE Delivery.</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Cart