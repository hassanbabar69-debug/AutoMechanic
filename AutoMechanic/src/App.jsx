// App.jsx
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/slices/slice'
import auth from './AppWriteAuth/auth'
import Navbar from './componenets/Navbar'


const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true) 

 useEffect(() => {
  auth.getcurrentuser()
    .then((user) => {
      if (user) {
        dispatch(login({
          name: user.name,
          email: user.email,
          role: user.prefs?.role ?? "customer"
        }))

        if (user.prefs?.role === "mechanic") {
          navigate("/dashboard/mechanic")
        } else {
          navigate("/dashboard/customer")
        }

      } else {
        dispatch(logout())
        
      }
    })
    .finally(() => {
      setLoading(false)
    })
}, [])


  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0E14] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  )
}

export default App