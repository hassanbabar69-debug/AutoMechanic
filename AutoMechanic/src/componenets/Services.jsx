import { Zap, Battery, Truck, Fuel, KeyRound, Wrench, Circle } from 'lucide-react'

const services = [
  { icon: <Zap className="w-7 h-7 text-yellow-400" />, name: "Breakdown", desc: "Fast on-site service from verified mechanics." },
  { icon: <Circle className="w-7 h-7 text-gray-300" />, name: "Flat Tire", desc: "Fast on-site service from verified mechanics." },
  { icon: <Battery className="w-7 h-7 text-green-400" />, name: "Battery Jump", desc: "Fast on-site service from verified mechanics." },
  { icon: <Truck className="w-7 h-7 text-green-400" />, name: "Towing", desc: "Fast on-site service from verified mechanics." },
  
  { icon: <KeyRound className="w-7 h-7 text-yellow-400" />, name: "Lockout", desc: "Fast on-site service from verified mechanics." },
  { icon: <Wrench className="w-7 h-7 text-gray-300" />, name: "Engine Repair", desc: "Fast on-site service from verified mechanics." },
]

const Services = () => {
  return (
    <section className="bg-[#0a0e14] py-20 px-6">
      <div className="max-w-6xl mx-auto">

       
        <div className="text-center mb-14">
          <h2 className="text-white text-5xl  mb-4 montserrat-heading">
            Every kind of rescue
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed raleway-heading">
            Cars, motorcycles, day or night. Pick what you need and we'll dispatch the closest verified pro.
          </p>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.name}
              className="bg-[#0f1520] border border-[#1e2530] rounded-2xl p-6 flex flex-col gap-4 hover:hover:shadow-[0_0_15px_rgba(34,211,238,1)] transition-all duration-200 cursor-pointer"
            >
              {s.icon}
              <div>
                <p className="text-white font-bold text-base mb-1 raleway-heading">{s.name}</p>
                <p className="text-gray-500 text-sm leading-relaxed raleway-heading">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services