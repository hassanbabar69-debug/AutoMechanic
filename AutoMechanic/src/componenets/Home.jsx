import img from './hero-rescue-33Inbgk_.jpg'
import Services from './Services'
import HowItWorks from './Work';

import Pricing from './Pricing';
import Footer from './Footer';
const Home = () => {
  return (
    <>
    <div class="min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#093334] to-[#0B0E14]">

        <div className="flex justify-between gap-[20px]">
            <div className="flex flex-col">

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-700/40 shadow-[0_0_20px_rgba(34,211,238,0.25)] absolute top-[170px] left-[90px]">

                <div class="relative w-3 h-3">
                 <span class="absolute inset-0 rounded-full bg-cyan-300 animate-ping"></span>
                 <span class="absolute inset-0 rounded-full bg-cyan-300"></span>
                </div>
                <span className="text-cyan-300 font-medium text-[13px] font-serif">Live Mechanics NearBy</span>
                
                </div>

                <div className="relative">
                    <h1 className="absolute top-[180px] text-white left-[80px] text-7xl font-bolder montserrat-heading">BreakDown?</h1>
                    <span className="absolute top-[280px] left-[78px] text-white montserrat-heading text-7xl">Help</span><span className="absolute top-[280px] left-[290px] text-white montserrat-heading text-7xl">Arrives</span>
                    <span className= "absolute top-[380px] left-[215px] text-white montserrat-heading text-7xl">Fast</span>

                </div>
                <div className="relative">
                    <p className="absolute top-[480px] raleway-heading left-[77px] text-white/80 w-[600px]">AutoRescue connects you with verified nearby mechanics for cars and motorcycles — real-time tracking, transparent pricing, no waiting on the curb.</p>
                </div>
                <div className="flex justify-between gap-5 absolute top-[630px] left-[100px]">
                    <button className="border  rounded-[10px] bg-[#27E0DB] cursor-pointer montserrat-heading text-black px-12 py-4 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,1)] border-transparent transition-all ease-in-out hover:scale-105 duration-500">Request Rescue</button>
                    <button className="border  rounded-[10px] bg-[#093334] text-cyan-200  cursor-pointer montserrat-heading text-black px-12 py-4  hover:shadow-[0_0_20px_rgba(34,211,238,1)] border-transparent transition-all duration-500 ease-in-out hover:scale-105">I am a Mechanic</button>
                    
                </div>

            </div>

            <div className='absolute top-[200px] right-[70px]'>
                <img src={img} className='h-[450px] w-[620px] overflow-hidden object-cover border rounded-[20px] drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]'></img>
            </div>
        </div>
</div>


<Services></Services>
<HowItWorks></HowItWorks>
<Pricing></Pricing>
<Footer></Footer>


    
    </>
  )
}

export default Home;
