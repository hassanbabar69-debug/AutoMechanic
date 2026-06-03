import { Wrench } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/slice'
import auth from '../AppWriteAuth/auth'
import {useNavigate } from 'react-router-dom'


const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    
    auth.logout().then(() => {
            dispatch(logout())
            navigate('/')
        })
  }
  const navigate = useNavigate();

  return (
    <div className="flex flex-row content-between h-[65px] w-full bg-gradient-to-r from-[#020B15] via-[#03101D] to-[#020B15]">


     
      
     
      <div className='bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] border rounded-2xl p-2 absolute top-[14px] border-cyan-400 shadow-[0_0_15px_rgba(34,255,248,0.6)] left-[90px]'>
        <Wrench className="text-black w-5 h-5 text-2xl" />
      </div>

   
      <div className="absolute left-[140px] top-[17px]">
        <h1 className="text-white text-[20px] font-bold">
          Auto<span className="bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] bg-clip-text text-transparent font-bold drop-shadow-[0_0_6px_rgba(34,255,248,0.6)]">
            Rescue
          </span>
        </h1>
      </div>

      
      <div className='flex flex-row absolute right-[100px] top-[10px] gap-[12px] items-center'>

        {isLoggedIn ? (
          <>
          
            <span className='text-white text-sm font-medium mt-[13px]'>
              👋 {user?.name}
            </span>

          
            <span className='text-xs px-3 py-1 rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-300 drop-shadow-[0_0_6px_rgba(34,255,248,0.4)] capitalize mt-[13px] ml-[7px]'>
              {user?.role}
            </span>

          
            <button
              onClick={handleLogout}
              className='text-white/60 hover:text-white text-sm cursor-pointer mt-[3px] transition-colors duration-200 font-serif mt-[13px] ml-[7px]'
            >
              Log out
            </button>
          </>
        ) : (
          <>
           
            <button className='text-white p-1 cursor-pointer mt-[3px]' onClick={()=>navigate('/signin')}>
              <span className='font-serif drop-shadow-[0_0_6px_rgba(34,255,248,0.6)]'>Sign in</span>
            </button>
            <button className='cursor-pointer bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] p-2 text-sm border rounded-[10px] mt-[3px] border-cyan-400 shadow-[0_0_15px_rgba(34,255,248,0.6)]'onClick={()=>navigate('/signup')}>
              <span className='font-semibold'>Get help now</span>
            </button>
          </>
        )}

      </div>
    </div>
  )
}

export default Navbar