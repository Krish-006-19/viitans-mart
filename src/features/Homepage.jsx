import logo from '../photos/logo.png'
import pdf from '../photos/pdf.jpeg'
import { useNavigate } from 'react-router-dom'
import { usePage } from '../ContextAPI/Context'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/userSlice';

function Homepage() {
const navigate = useNavigate()

const {setType, setSearch, setBool} = usePage()
const user = useSelector(state=>state.user.user)
const dispatch = useDispatch()
  return (
    <div className='bg-gradient-to-b from-orange-200 to-red-300 w-full h-screen'>
         <header className="bg-[#2e2e2e] text-white">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-4">
                <img src={logo} className="rounded-xl h-12 w-35 hover:cursor-pointer" onClick={()=>navigate('/')}/>
              </div>
                <div className="flex w-[50%] mx-auto bg-white rounded-sm font-bold overflow-hidden shadow-sm">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e)=>setSearch(e.target.value)}
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
                  <span><strong className={`mr-15 hover: cursor-pointer`} onClick={
                    ()=>{
                      user?dispatch(logout()):navigate('/Signin')
                    }
                  }>{user?'SignOut':'SignIn'}</strong></span>
              <span ><strong className='mr-15 hover:cursor-pointer' onClick={()=>navigate('/Sell')}>Sell</strong></span>

                </div>
                <div className='pr-4'>
                  <img src="https://img.icons8.com/ios-filled/24/ffffff/shopping-cart.png" className="h-5 hover:cursor-pointer" onClick={()=>navigate('/Cart')} />
                </div>
              </div>
            </div>
          </header>
        
          <section className=" text-center py-8">
            <h2 className="text-4xl mt-7 font-semibold">Shop on College essentials in Budget Friendly price!</h2>
            <br/>
            <h3 className='text-3xl pl-3'><strong>for the VITIAN's by the VITIAN's</strong></h3>
            <img className='from-blue-100 to-pink-100 h-12'/>
          </section>
        <div className="from-blue-100 to-pink-100 ">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <div className="bg-white p-4 rounded border transform hover:cursor-pointer hover:scale-110 transition duration-300"
            onClick={()=>{
              setType('Stationary & Notebooks')
              setBool(false)
              navigate('/Stationary')
              }}>
              <h3 className="font-semibold mb-2 text-center "><strong>Stationary & Notebooks</strong></h3>
              <img src="https://thumbnails.production.thenounproject.com/jz2Frjk9Y4MwfQ2EyerjXLW1Y_s=/fit-in/1000x1000/photos.production.thenounproject.com/photos/A2D26D74-04C5-45E2-B645-A17C1547B151.jpg" className='rounded-sm'/>
            </div>
        
                <div className="bg-white p-4 rounded border text-center transform hover:cursor-pointer hover:scale-110 transition duration-300"
                onClick={()=>{
                  setType('PDF Files')
                  setBool(false)
                  navigate('/pdf')
                  }}>
                    <h3 className="font-semibold mb-2"><strong>PDF Files</strong></h3>
                    <img src={pdf} className="h-40 w-60 rounded-sm mx-auto" />
                </div>

        
            <div className="bg-white p-4 rounded border transform text-center hover:cursor-pointer hover:scale-110 transition duration-300"
             onClick={()=>{
              setType('Electronics & AEM stuff')
              setBool(false)
              navigate('/aem')
             }}>
              <h3 className="font-semibold mb-2"><strong>Electronics & AEM stuff</strong></h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgezZSILrxgwPxE_BMmW0bJKoc-abq8XjVcw&s" className='h-40 rounded-sm'/>
            </div>
        
            <div className="bg-white p-4 rounded border transform text-center hover:cursor-pointer hover:scale-110 transition duration-300"
            onClick={()=>{
              setType('Notes & Handwritten material')
              setBool(false)
              navigate('/notes')
            }}
            >
              <h3 className="font-semibold mb-2"><strong>Notes & Handwritten material</strong></h3>
              <img src="https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2019/01/45692459364_2d91368a04_z.jpg?fit=640%2C427&ssl=1" className="rounded" />
            </div>
          </section>
          </div>
    </div>
  )
}

export default Homepage