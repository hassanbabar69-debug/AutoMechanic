import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Car, Wrench } from "lucide-react"
import auth from "../../AppWriteAuth/auth"
import { login } from "../../store/slices/slice.js"

const SignUpForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [role, setRole] = useState("customer")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setError("")
    setLoading(true)
    try {
      await auth.signup({ 
        email: data.email, 
        password: data.password, 
        name: data.name,
        role: role
      })

      const user = await auth.getcurrentuser()

      dispatch(login({
        name: user.name,
        email: user.email,
        role: role
      }))

      if (role === "mechanic") navigate("/dashboard/mechanic")
      else navigate("/dashboard/customer")

    } catch (err) {
      setError("Registration failed.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-[360px] mx-auto">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg py-2 text-red-400 text-xs text-center">
          {error}
        </div>
      )}

      <div>
        <p className="text-white text-[11px] font-bold mb-2 uppercase tracking-wider opacity-70">I am a...</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setRole("customer")}
            className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer
              ${role === "customer"
                ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(34,255,248,0.1)]"
                : "border-[#1a3a3a] bg-[#0d1a1a]"
              }`}
          >
            <Car className={`w-4 h-4 ${role === "customer" ? "text-cyan-400" : "text-gray-500"}`} />
            <span className={`text-xs font-bold ${role === "customer" ? "text-white" : "text-gray-400"}`}>User</span>
          </button>

          <button
            type="button"
            onClick={() => setRole("mechanic")}
            className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer
              ${role === "mechanic"
                ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(34,255,248,0.1)]"
                : "border-[#1a3a3a] bg-[#0d1a1a]"
              }`}
          >
            <Wrench className={`w-4 h-4 ${role === "mechanic" ? "text-cyan-400" : "text-gray-500"}`} />
            <span className={`text-xs font-bold ${role === "mechanic" ? "text-white" : "text-gray-400"}`}>Pro</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="space-y-1">
          <label className="text-white text-xs font-semibold px-1">Full name</label>
          <input
            type="text"
            placeholder="Alex Rivera"
            {...register("name", { required: "Required" })}
            className="w-full bg-[#0d1a1a] border border-[#1a3a3a] rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-cyan-500/40"
          />
        </div>

        <div className="space-y-1">
          <label className="text-white text-xs font-semibold px-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", { required: "Required" })}
            className="w-full bg-[#0d1a1a] border border-[#1a3a3a] rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-cyan-500/40"
          />
        </div>

        <div className="space-y-1">
          <label className="text-white text-xs font-semibold px-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("password", { required: "Required", minLength: 8 })}
            className="w-full bg-[#0d1a1a] border border-[#1a3a3a] rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-cyan-500/40"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit(onSubmit)}
        disabled={loading}
        className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all duration-300 cursor-pointer mt-2
          ${loading
            ? "bg-cyan-900/40 text-cyan-700"
            : "bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] text-black shadow-[0_0_20px_rgba(34,255,248,0.2)] hover:scale-[1.02]"
          }`}
      >
        {loading ? "PROCESSING..." : "CREATE ACCOUNT"}
      </button>
    </div>
  )
}

export default SignUpForm