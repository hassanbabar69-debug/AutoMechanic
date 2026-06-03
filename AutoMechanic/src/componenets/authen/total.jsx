import { Wrench } from 'lucide-react'
import { useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from "lucide-react";

const Total = () => {

  const navigate = useNavigate();
const location = useLocation()
const [activeTab, setActiveTab] = useState(
  location.pathname === '/signup' ? 'signup' : 'signin'
)

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#093334] to-[#0B0E14] flex items-center justify-center p-4">
       <div className='absolute top-[135px] left-[560px] flex'><ArrowLeft className='text-white/40 mt-[5px] cursor-pointer' onClick={()=>navigate('/')}></ArrowLeft><span className='text-white/40 ml-[8px] mt-[3px]'>Back</span></div>
      
      <div className="w-full max-w-[420px] bg-[#0F1922] border border-white/5 rounded-[20px] flex flex-col p-6 overflow-hidden">
        
      
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] border border-cyan-400 shadow-[0_0_15px_rgba(34,255,248,0.6)] rounded-2xl p-2 flex-shrink-0">
            <Wrench className="text-black w-5 h-5" />
          </div>
          <div>
            <h1 className="text-white text-[20px] font-bold leading-tight">
              Auto<span className="bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(34,255,248,0.6)]">
                Rescue
              </span>
            </h1>
            {activeTab == "signin" ?  <p className="text-white/50 text-sm">Welcome Back</p>: null}
           
          </div>
        </div>

   
        <div className="flex bg-[#18E7E0] rounded-xl p-1 mb-5">
          <button
            onClick={() => setActiveTab("signin")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer text-center
              ${activeTab === "signin" ? "bg-[#1a1a1a] text-white" : "text-black"}`}
          >
            Sign in
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer text-center
              ${activeTab === "signup" ? "bg-[#1a1a1a] text-white" : "text-black"}`}
          >
            Sign up
          </button>
        </div>

       
        {activeTab === "signin" ? <Signin /> : <Signup />}

      </div>
    </div>
  )
}

export default Total