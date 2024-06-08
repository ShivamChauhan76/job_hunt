import React, { useEffect } from 'react'
import './Features.css'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'

const Features = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>
    <div className='containerFeatures'>
      <h1 className='featuresHeading' data-aos="fade-up">Features</h1>
      <div className='featuresContent'>
        <div className='featuresImages'>
          <img className='img1' src='https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          <img className='img2' src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          <img className='img3' src='https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>
        
        <div className='featuresText'  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
          <h1>We help to get the best job and find your talent</h1>
          <p>JobHunt's Online Recruitement Process aimed at a more effcient hiring process and providing better Candidate Relationship Management. </p>
          <li><i class="fa-solid fa-check tick"></i>Comprehensive Candidate Search</li>
          <li><i class="fa-solid fa-check tick"></i>Efficient Interview Scheduling</li>
          <li><i class="fa-solid fa-check tick"></i>Data-Driven Decision Making</li>
          <li><i class="fa-solid fa-check tick"></i>Collaborative Hiring Process</li>
          <div>
            <NavLink className='readmore' to='/featuresmain'>Read More</NavLink>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Features