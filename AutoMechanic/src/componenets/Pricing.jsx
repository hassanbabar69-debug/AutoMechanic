
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MapPin } from "lucide-react";
const Pricing = () => {

  const tiers = [
  {
    id: 'local',
    label: "Local",
    min: 100, max: 199,
    radius: "5km",
    radiusColor: "text-gray-400",
    badgeStyle: "border-gray-700 bg-gray-800/50 text-gray-400",
    desc: "Mechanics within 5km of your location"
  },
  {
    id: 'extended',
    label: "Extended",
    min: 200, max: 349,
    radius: "15km",
    radiusColor: "text-cyan-400",
    badgeStyle: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    desc: "Wider search across 15km radius"
  },
  {
    id: 'citywide',
    label: "City-wide",
    min: 350, max: 500,
    radius: "30km",
    radiusColor: "text-green-400",
    badgeStyle: "border-green-500/30 bg-green-500/10 text-green-400",
    desc: "Full city search, maximum coverage"
  },
]
const getActiveTier = (val) => {
  if (val <= 199) return tiers[0]
  if (val <= 349) return tiers[1]
  return tiers[2]
}

  const [offer, setOffer] = useState(100)
  const activeTier = getActiveTier(offer)
 
  const navigate = useNavigate();
  return (
  <>

  <section className="bg-[#080c12] h-screen pb-[200px]">
    <div className="flex justify-between gap-16">
      <div className="flex flex-col">
        <h1 className="text-cyan-400 text-5xl uppercase mt-[150px] ml-[130px] montserrat-heading">Flexible Pricing</h1>
        <h2 className="text-white text-3xl raleway-heading leading-tight mb-6 ml-[134px] mt-[32px]">
              You're in <br />
              <span className="bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] bg-clip-text text-transparent">
                control
              </span>
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm ml-[132px] mt-[5px]">
              Set your own offer when requesting a mechanic. Nearby pros see 
              your offer and respond — the more urgent your situation, the 
              higher you can offer for faster help. You only pay when a 
              mechanic accepts.
        </p>
        <div className="flex flex-col gap-3 mb-10">
              {[
                "No hidden fees ever",
                "Only charged when mechanic accepts",
                "Cancel anytime before acceptance",
                "Repair costs agreed directly with mechanic",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 ml-[127px]">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">{point}</p>
                </div>
              ))}
        </div>
        <button
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] text-black font-bold px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(34,255,248,0.3)] hover:shadow-[0_0_30px_rgba(34,255,248,0.5)] transition-all text-sm cursor-pointer w-[200px] ml-[135px]"
            >
              Try it now →
        </button>

      </div>

      <div className="bg-[#0f1520] border border-[#1e2530] rounded-2xl p-8 w-[520px] h-[550px] mr-[40px] mt-[125px]">

        <div className="text-center mb-8">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                Your offer
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <span className="text-gray-500 text-2xl font-bold mt-[24px]">Rs.</span>
          <span className="text-white text-6xl font-bold tracking-tight leading-none">
                  {offer}
          </span>
        </div>

        <div className={`inline-flex items-center gap-2 ml-[103px] mt-4 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${activeTier.badgeStyle}`}>
              <MapPin className="w-4 h-4" />
                Searching within {activeTier.radius} · {activeTier.label}
        </div>

        <div>
        <input
                type="range"
                min={100}
                max={500}
                step={10}
                value={offer}
                onChange={(e) => setOffer(Number(e.target.value))}
                className="w-full h-2 rounded-full mt-[40px] cursor-pointer appearance-none slider"
                style={{
                  background: `linear-gradient(to right, #18E7E0)`,
                  
                }}
               
              />
      </div>
      <div className="flex flex-col gap-6 mt-[37px]">
              {tiers.map((tier) => {
                const isActive = activeTier.id === tier.id
                return (
                  <div
                    key={tier.id}
                    onClick={() => setOffer(tier.min + 10)}
                    className={`flex items-center gap-4 p-3 rounded-xl border cursor-pointer transition-all duration-200
                      ${isActive
                        ? 'border-cyan-500/30 bg-cyan-500/5'
                        : 'border-transparent hover:border-[#1e2530]'
                      }`}
                  >
                    
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                      ${isActive ? 'border-cyan-400' : 'border-gray-700'}`}
                    >
                      {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}>
                          {tier.label}
                        </span>
                        <span className={`text-xs font-bold ${tier.radiusColor}`}>
                          {tier.radius} radius
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs mt-0.5">{tier.desc}</p>
                    </div>

                    <span className={`text-xs font-semibold transition-colors ${isActive ? 'text-cyan-400' : 'text-gray-700'}`}>
                      Rs. {tier.min}+
                    </span>
                  </div>
                )
              })}
            </div>

      </div>
    
    </div>
  </section>
  
  </>
  )
}

export default Pricing;
