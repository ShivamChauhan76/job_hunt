import React, { useEffect } from 'react'
import './Efficiency.css'
import Aos from 'aos'

const Efficiency = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <>
    <div className='ultraContainerEfficiency'>
    <div className='containerEfficiency'>
      <h1 data-aos='fade-up'>Efficiency</h1>
      <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
        Efficiency Meets Expertise. 
        Our online recruitment platform is dedicated to optimizing efficiency throughout the hiring process. 
        With our innovative technology and user-friendly interface, we streamline the entire recruitment journey, 
        from job posting and candidate sourcing to applicant tracking and hiring decisions. 
        Our platform utilizes advanced algorithms and intelligent automation to match job requirements with the most suitable candidates, 
        saving valuable time and effort for both employers and job seekers. 
        We prioritize seamless communication and collaboration, providing real-time updates, instant messaging, and interview scheduling tools. 
        By emphasizing efficiency, we empower organizations to find top talent swiftly and enable job seekers to discover their ideal opportunities efficiently.
      </p>
    </div>
    </div>
    </>
  )
}

export default Efficiency