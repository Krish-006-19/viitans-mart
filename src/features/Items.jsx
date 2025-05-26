import { useEffect, useState } from 'react'
import logo from '../photos/logo.png'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { usePage } from '../ContextAPI/Context'
import SearchIcon from '@mui/icons-material/Search'

function Items() {
  const navigate = useNavigate()
  const {type, search, bool, setBool} = usePage()
  const [item, setItem] = useState([])
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

    const filteredItem = item.filter((value)=> type === value.data.category )

    const find = item.filter((value)=>value.data.Description.toLowerCase().includes(search))

  return (
    <div className=" w-full h-screen bg-gradient-to-b from-orange-200 to-red-300 ">
    {/* <header className="bg-[#2e2e2e] text-white">
    <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
        <img src={logo} className="rounded-xl h-12 w-35 hover:cursor-pointer" onClick={()=>navigate('/')}/>
        </div>
        <div className="flex w-[50%] mx-auto bg-white rounded-sm font-bold overflow-hidden shadow-sm">
            <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-yellow-400 h-10 pl-2 text-white hover:cursor-pointer"
             onClick={()=>{
                      setBool(true)
                      navigate('/Search')
                      }}>
                <SearchIcon/>
            </button>
        </div>
        <div className="flex items-center space-x-4 text-sm">
        <div className='pr-5 pl-3'>
            <span><strong className='mr-15 hover: cursor-pointer' onClick={
            ()=>navigate('/Signin')
            }>SignIn</strong></span>
        <span ><strong className='mr-15 hover:cursor-pointer' onClick={()=>navigate('/Sell')}>Sell</strong></span>

        </div>
        <div className='pr-4'>
            <img src="https://img.icons8.com/ios-filled/24/ffffff/shopping-cart.png" className="h-5 hover:cursor-pointer" onClick={()=>navigate('/Cart')} />
        </div>
        </div>
    </div>
    </header> */}
  <div className="max-w-7xl p-2 mx-auto">
    <div className="text-3xl flex font-bold mb-6">
      <div>Filter</div>
      <div className='flex'>
        <span>Price:</span>
        <input type="text" />
      </div>
      
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {!bool?
      filteredItem?.map((value,index)=>(
        <div className="bg-white rounded-lg shadow hover:shadow-lg p-4" key={value+index}>
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
      :
        find && find.map((value,index)=>(
          <div className="bg-white rounded-lg shadow hover:shadow-lg p-4" key={value+index}>
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