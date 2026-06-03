import { useState } from "react";
import {useForm} from "react-hook-form";


const Rescue = () => {

     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    



    const [Col , setCol] = useState("Car");
    const sumbit = ()=>{

    }
  return (
     <div className='h-screen flex items-center justify-center bg-black'>
      <div className='bg-[#1A1A1A] h-[600px] w-[500px] border rounded-2xl border-[#FF8C00]'>
        <div className="relative flex flex-col"><h1 className="absolute top-[50px] left-[155px] text-white text-2xl font-bold">Request Rescue</h1>
        <div className="gap-[80px] flex flex-row top-[120px] absolute left-[30px]"><button className={`transition-all duration-500 ease-in-out border rounded-2xl cursor-pointer p-6   border-black w-[180px] ${Col == "Car" ? "bg-[#FF4D00] text-white" : "bg-black text-[#666666]"}`} onClick={()=>setCol("Car")} >Car</button><button className={`transition-all duration-500 ease-in-out border rounded-2xl cursor-pointer p-6   border-black w-[180px] ${Col == "Bike" ? "bg-[#FF4D00] text-white" : "bg-black text-[#666666]"}`} onClick={()=>setCol("Bike")}>Bike</button></div>
        <form onSubmit={handleSubmit(sumbit)}>
            <div className="flex flex-row gap-[10px]">
                <label className="top-[220px] left-[20px] absolute text-[#666666] font-sans">Model of Car or Bike</label>
                <input  {...register("model", { required: "Model is required" })} className="w-[220px]  bg-[#111111] text-[#ddd] border-[#111111] rounded-lg px-4 py-3 outline-none text-sm absolute top-[250px] left-[15px]"placeholder="e.g. Honda"></input>
                  {errors.model && (
                <p className="text-[#f87171] text-xs mt-1">{errors.model.message}</p>
              )}
                <label className="top-[220px] left-[266px] absolute text-[#666666] font-sans">Plate No</label>
                <input  {...register("plateNo", { required: "Plate number is required" })} className="w-[220px]  bg-[#111111] text-[#ddd] border-[#111111] rounded-lg px-4 py-3 outline-none text-sm absolute top-[250px] left-[260px]" placeholder="e.g. LHR-1234"></input>
                {errors.plateNo && (
                <p className="text-[#f87171] text-xs mt-1">{errors.plateNo.message}</p>
              )}
            </div>
            <div className="flex flex-row">
            <label className="absolute top-[390px] left-[20px] text-[#666666] font-sans">Enter Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className="left-[15px] absolute top-[420px] w-[220px]  bg-[#111111] text-[#ddd] border-[#111111] rounded-lg px-4 py-3 outline-none text-sm"
            />
            {errors.name && (
              <p className="text-[#f87171] text-xs mt-1">{errors.name.message}</p>
            )}
            <label className="absolute top-[390px] left-[270px] text-[#666666] font-sans">Enter Phone No</label>
            <input
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9+\s\-]{10,}$/,
                  message: "Enter a valid phone number",
                },
              })}
              placeholder="Phone"
              className="left-[265px] absolute top-[420px] w-[220px]  bg-[#111111] text-[#ddd] border-[#111111] rounded-lg px-4 py-3 outline-none text-sm"
            />
            {errors.phone && (
              <p className="text-[#f87171] text-xs mt-1">{errors.phone.message}</p>
            )}

            </div>
        </form>
        
        
        </div>
      </div>

    </div>
  )
}

export default Rescue;
