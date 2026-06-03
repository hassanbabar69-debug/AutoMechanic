import { Wrench } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#080c12] border-t border-white/5 px-10 py-6">
      <div className="flex items-center justify-between">
        
       
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] rounded-xl p-2 shadow-[0_0_10px_rgba(34,255,248,0.4)]">
            <Wrench className="text-black w-4 h-4" />
          </div>
          <span className="text-white font-bold text-base montserrat-heading">
            Auto <span className="bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] bg-clip-text text-transparent montserrat-heading">Rescue</span>
          </span>
        </div>

        
        <p className="text-gray-600 text-sm raleway-heading">
          © 2026 AutoRescue. Roadside help, reimagined.
        </p>

      </div>
    </footer>
  )
}

export default Footer