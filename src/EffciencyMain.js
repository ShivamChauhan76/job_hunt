import React from 'react'
import Efficiency from './Efficiency'
import './EffciencyMain.css'
import Aos from 'aos'
import { useEffect } from 'react'

const EffciencyMain = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <>
        <div className='efficiencyHeader'>
            <h1 data-aos='fade-down'>Efficiency</h1>
        </div>
        <Efficiency />
    </>
  )
}

export default EffciencyMain