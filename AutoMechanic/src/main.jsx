import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store' 
import App from './App'
import './index.css'
import { lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const Home     = lazy(() => import('./componenets/Home'))
const Total    = lazy(() => import('./componenets/authen/total'))
const Customer = lazy(() => import('./componenets/dashboard/customer')) 
const Mechanic = lazy(() => import('./componenets/dashboard/mechanic')) 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='signin' element={<Total />} />
      <Route path='signup' element={<Total />} />
      <Route path='dashboard/customer' element={<Customer />} /> 
      <Route path='dashboard/mechanic' element={<Mechanic />} /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<div className="min-h-screen bg-[#0B0E14]" />}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
)