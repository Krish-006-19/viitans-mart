import { useSelector } from "react-redux"
import { usePage } from "../ContextAPI/Context"
import { useNavigate } from "react-router-dom"
import Signin from './Signin'
import { useEffect, useState } from "react"
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../firebase/firebase"

function ProdInfo() {
  const { subj, setCart } = usePage()
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()
  const [showReview, setShowReview] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])
  let i = 0
  const info = async() =>{
    await addDoc(collection(db,'reviews'),{
      name: user.displayName,
      message: commentText,
      createdAt:new Date(),
      id: subj.id
    })
  }

  useEffect(()=>{
    let querylis = query(collection(db,'reviews'),orderBy('createdAt','asc')) 

    let unsubscribe = onSnapshot(querylis,(snapshot)=>{
      setComments(snapshot.docs.map((doc)=>(
        {
          data:doc.data(),
          id:doc.id
        }
      )))
    })
    return unsubscribe
  },[])

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-orange-200 to-red-300 py-10">
      {user && subj ? (
        <div className={`relative flex flex-col lg:flex-row p-6 gap-8 max-w-6xl ${!showReview?'w-[60%]':'w-full'} mx-auto border rounded-2xl bg-white shadow-lg`}>

          <div>
            <img
              src={subj.imgurl}
              className="w-[500px] h-[500px] object-cover rounded-xl"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-semibold">{subj.description}</h1>

            <div className="flex items-center space-x-2">
              <span className="text-orange-500 font-semibold text-lg">{(Math.random() * 4 + 1).toFixed(1)}/5</span>
              <span className="text-gray-600 text-sm">{Math.floor(Math.random() * (1500 - 200 + 1)) + 200}</span>
            </div>

            <p className="text-gray-600 text-sm">{Math.floor(Math.random() * 10) + 1}K+ bought in past month</p>

            <div className="text-2xl font-bold text-green-600">&#8377;{subj.price}</div>
            <p className="text-sm text-gray-500">{subj.category}</p>
            <div className="text-sm text-gray-600">if any problem then call on : <strong>{subj.number}</strong></div>

            <div className="space-y-2 pt-4">
              <button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg"
                onClick={() => {
                  setCart(prev => [...prev, { ...subj }])
                }}
              >
                Add to Cart
              </button>
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg"
                onClick={() => setShowReview(prev => !prev)}
              >
                {showReview ? 'Hide Reviews' : 'Reviews'}
              </button>
            </div>
          </div>

          {showReview && (
  <div className="w-64 bg-white p-4 rounded-lg flex flex-col justify-between transition-all duration-300">
    <h2 className="text-center font-semibold text-gray-700 text-md mb-2">Post a Review</h2>

    {/* SCROLLABLE COMMENT SECTION */}
    <div className="flex-1 overflow-y-auto max-h-64 pr-1 mb-2 space-y-2">
      {comments.map((value) =>
        value.data.id === subj.id ? (
          <div className="mb-2 flex justify-between p-2 border-b" key={value.id}>
            <p className="text-sm pl-2 font-semibold">{value.data.name}</p>
            <p className="text-sm text-gray-700">{value.data.message}</p>
          </div>
        ) : null
      )}
    </div>

    <textarea
      className="w-full h-24 p-2 text-sm border rounded resize-none"
      placeholder="Share your thoughts..."
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
    />
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-4 rounded self-end mt-2"
      onClick={() => {
        info()
        setCommentText("")
      }}
    >
      Submit
    </button>
  </div>
)}
        </div>
      ) : (
        <Signin />
      )}
    </div>
  )
}

export default ProdInfo
