import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import auth from "../../AppWriteAuth/auth";
import { login } from "../../store/slices/slice.js"

const SignInForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setError("")
    setLoading(true)
    try {
      await auth.login({ email: data.email, password: data.password })
      const user = await auth.getcurrentuser() 
      dispatch(login({
        name: user.name,
        email: user.email,
        role: user.prefs?.role ?? "customer"
      }))
      if (user.prefs?.role === "mechanic") navigate("/dashboard/mechanic")
      else navigate("/dashboard/customer")
    } catch (err) {
      setError("Invalid email or password.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-5 w-full max-w-[400px] mx-auto p-4">
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm text-center">
          ⚠ {error}
        </div>
      )}

      
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-semibold px-1">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email", { required: "Email is required" })}
          className="w-full bg-[#0d1a1a] border border-[#1a3a3a] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-gray-600 focus:border-cyan-500/40 transition-colors"
        />
        {errors.email && (
          <p className="text-red-400 text-xs px-1">{errors.email.message}</p>
        )}
      </div>

     
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-semibold px-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          {...register("password", { required: "Password is required" })}
          className="w-full bg-[#0d1a1a] border border-[#1a3a3a] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-gray-600 focus:border-cyan-500/40 transition-colors"
        />
        {errors.password && (
          <p className="text-red-400 text-xs px-1">{errors.password.message}</p>
        )}
      </div>

    
      <button
        onClick={handleSubmit(onSubmit)}
        disabled={loading}
        className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-200 cursor-pointer mt-2
          ${loading
            ? "bg-cyan-900/40 text-cyan-700 cursor-not-allowed"
            : "bg-gradient-to-r from-[#18E7E0] to-[#22FFF8] text-black shadow-[0_0_20px_rgba(34,255,248,0.35)] hover:shadow-[0_0_30px_rgba(34,255,248,0.5)]"
          }`}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

    </div>
  )
}

export default SignInForm