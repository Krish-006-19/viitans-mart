import { useState } from 'react'
import { db } from '../firebase/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import Signin from './Signin'

function Sell() {
  const navigate = useNavigate()
  const user = useSelector(state=>state.user.user)
  const arr = [
    { isActive: false, domain: 'Stationary & Notebooks' },
    { isActive: false, domain: 'PDF Files' },
    { isActive: false, domain: 'Electronics & AEM stuff' },
    { isActive: false, domain: 'Notes & Handwritten material' }
  ]
  const [description, setDescription] = useState('')
  const [imgurl, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const sellstuff = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'products'), {
        Description: description,
        category: category,
        imgurl: imgurl,
        price: Number(price),
        createdAt: new Date(),
        id: nanoid()
      })
      setCategory('')
      setDescription('')
      setImage('')
      setPrice('')

      navigate('/')
    } catch (err) {
      console.error("Error adding document: ", err)
      alert("Failed to submit item.")
    }
  }

  return (
    <div className='bg-gradient-to-b from-orange-200 to-red-300 h-screen w-full flex justify-center items-center'>
      {user?
      <div className="bg-white px-8 py-4 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sell Your Item</h2>

        <form id="sellForm" className="space-y-4" onSubmit={sellstuff}>
          <div>
            <label className="block font-semibold text-gray-700 mb-1" htmlFor="category">Category</label>
            <div className="grid grid-cols-2 gap-2">
                  {arr.map((value, index) => (
      <div key={index} className="flex items-center space-x-2">
        <input
          type="radio"
          name="category"
          value={value.domain}
          checked={category === value.domain}
          required
          onChange={() => setCategory(value.domain)}
        />
        <span className='text-xs'>{value.domain}</span>
      </div>
    ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Describe your item"
              required
              value={description}
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1" htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              placeholder="https://example.com/image.jpg"
              required
              value={imgurl}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1" htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              required
              value={price}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>:
      <Signin/>
}
    </div>
  )
}

export default Sell
