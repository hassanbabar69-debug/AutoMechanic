import { MapPin, Users, Navigation, Star } from 'lucide-react'

const steps = [
  {
    number: "1",
    icon: <MapPin className="w-8 h-8 text-cyan-400" />,
    title: "Drop your pin",
    desc: "Select your vehicle, describe the problem and share your location. Takes less than 30 seconds.",
  },
  {
    number: "2",
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: "Get matched",
    desc: "Browse nearby verified mechanics with ratings and ETA — or the closest one gets auto-notified and accepts.",
  },
  {
    number: "3",
    icon: <Navigation className="w-8 h-8 text-cyan-400" />,
    title: "Mechanic on the way",
    desc: "Track your mechanic live on the map. Chat directly if you need to share more details.",
  },
  {
    number: "4",
    icon: <Star className="w-8 h-8 text-cyan-400" />,
    title: "Back on the road",
    desc: "Pay the callout fee in-app. Repair costs are settled directly with the mechanic. Rate the service.",
  },
]

const HowItWorks = () => {
  return (
    <section className="bg-[#0D1017] py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-white text-5xl md:text-6xl montserrat-heading mb-4">
            How it works
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed raleway-heading">
            Four steps from breakdown to back on the road.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
             
              <div className="z-10 w-10 h-10 rounded-full bg-cyan-400 text-black font-bold flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] mb-6 absolute left-[110px] bottom-[200px]">
                {step.number}
              </div>

             
              <div className="bg-[#0E1521] cursor-pointer border border-gray-800 rounded-2xl p-8 h-full transition-all duration-400  hover:shadow-[0_0_15px_rgba(34,211,238,1)]">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-white text-xl raleway-heading mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed raleway-heading">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks