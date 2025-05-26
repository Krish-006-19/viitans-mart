import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { usePage } from '../ContextAPI/Context'

function Items() {
  const navigate = useNavigate()
  const {type, search, bool, setSubj} = usePage()
    useEffect(()=>{
        const Querili = query(collection(db,'products'),orderBy('createdAt','asc'))

        const snap = onSnapshot(Querili,(snapshot)=>{
          setItem(snapshot.docs.map((doc)=>(
            {
              data:doc.data(),
              id:doc.id
          }
          )))
          return snap()
        })
    },[])

    const [item, setItem] = useState([])
    const filteredItem = item.filter((value)=> type === value.data.category )

    const find = item.filter((value)=>value.data.Description.toLowerCase().includes(search))

  return (
    <div className=" w-full h-screen bg-gradient-to-b from-orange-200 to-red-300 ">
  <div className="max-w-7xl p-2 mx-auto">
    

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {!bool?
      filteredItem?.map((value,index)=>(
        <div className="bg-white rounded-lg shadow hover:shadow-lg border cursor-pointer p-4" onClick={()=>{
          setSubj({
            description:value.data.Description,
            category:value.data.category,
            price:value.data.price,
            imgurl:value.data.imgurl
          })
          navigate('/info')
          }} key={value+index}>
        <img src={value.data.imgurl} className="w-full h-48 object-contain mb-4"/>
        <h2 className="font-semibold text-black text-lg">{value.data.Description}</h2>
        <p className="text-sm text-gray-500">{value.data.category}</p>
        <div className="flex items-center my-2">
          <div className="text-yellow-500 text-sm mr-3">{(Math.random() * 4 + 1).toFixed(1)}/5</div>
          <span className="text-sm text-gray-600">{Math.floor(Math.random() * (1500 - 200 + 1)) + 200}</span>
        </div>
        <div className="mb-2">
          <span className="text-green-600 font-bold">&#8377;{value.data.price}</span>
        </div>
        <button className="mt-2 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded">
          Add to cart
        </button>
      </div>
      ))
      :
        find && find.map((value,index)=>(
          <div className="bg-white rounded-lg shadow hover:shadow-lg border cursor-pointer p-4" onClick={()=>{
          setSubj({
            description:value.data.Description,
            category:value.data.category,
            price:value.data.price,
            imgurl:value.data.imgurl
          })
          navigate('/info')
          }} key={value+index}>
        <img src={value.data.imgurl} className="w-full h-48 object-contain mb-4"/>
        <h2 className="font-semibold text-black text-lg">{value.data.Description}</h2>
        <p className="text-sm text-gray-500">{value.data.category}</p>
        {/* <div className="flex items-center my-2">
          <div className="text-yellow-500 text-sm mr-1">4/5</div>
          <span className="text-sm text-gray-600">(1,914)</span>
        </div> */}
        <div className="mb-2">
          <span className="text-green-600 font-bold">&#8377;{value.data.price}</span>
        </div>
        <button className="mt-2 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded">
          Add to cart
        </button>
        </div>
        ))
      
    }

    </div>
  </div>        
    </div>
  )
}

export default Items