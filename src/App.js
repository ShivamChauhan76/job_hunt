import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import FeaturesMain from './FeaturesMain'
import BenefitsMain from './BenefitsMain'
import EffciencyMain from './EffciencyMain'
import Contact from './Contact'
import Login from './Login'
import Register from './Register'
import ScrollupButton from './ScrollupButton'
import Footer from './Footer'
import Preloader from './Preloader'


const App = () => {

  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => { 
      setLoading(false)
    }, 5000);
    return() => clearTimeout(timer)
  }, [])

  const navigate = useNavigate()

  const handlelogin = () => {
    navigate('/login')
  }

  const handleregister = () => {
    navigate('/register')
  }

  return (
    <>
      {loading ? (<Preloader />) :
      (
        <>
          <Navbar loginfunction={handlelogin} registerfunction={handleregister} />
          <Routes>
          <Route path='/' element={<Home loginfunction={handlelogin} registerfunction={handleregister} />} />
          <Route path='/featuresmain' element={<FeaturesMain />} />
          <Route path='/benefitsmain' element={<BenefitsMain />} />
          <Route path='/efficiencymain' element={<EffciencyMain />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login registerfunction={handleregister} />} />
          <Route path='/register' element={<Register loginfunction={handlelogin} />} />
          </Routes>
          <ScrollupButton />
          <Footer />
        </>
      )
      }
    </>
  )
}

export default App