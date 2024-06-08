import React from 'react'
import { useEffect } from 'react'
import './BenefitsMain.css'
import Benefits from './Benefits'
import Aos from 'aos'

const BenefitsMain = () => {

  useEffect(() => {
    Aos.init({
        duration: 500,
        easing: 'ease-in-out',
    })
  }, [])

  return (
    <div>
        <div className='benefitsHeader'>
            <h1 data-aos='fade-down'>Benefits</h1>
        </div>
        <Benefits />
    </div>
  )
}

export default BenefitsMain