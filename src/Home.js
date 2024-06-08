import React, { useEffect } from 'react';
import './Home.css'
import Features from './Features'
import Benefits from './Benefits'
import Efficiency from './Efficiency';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Clients from './Clients'

const Home = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, [])

  return (
    <>
    
    <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active bonapate">
      <div className='carouselText1'>
        <h1 data-aos="fade-down" data-aos-delay="4000">Welcome To Job Hunt</h1>
        <p>The Ultimate Online Recruitment Solution for Hiring Managers and HR Professionals. 
          Streamline your Hiring Process. Find the perfect candidate faster. </p>
        <div className='homebtns'>
          <button className='registerbtn' data-aos="fade-right" data-aos-delay="4000" onClick={props.registerfunction}>Register</button>
          <button className='loginbtn' data-aos="fade-left" data-aos-delay="4000" onClick={props.loginfunction}>Login</button></div>
      </div>
      <img src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item  bonapate">
      <div className='carouselText1'>
        <h1>Find a Best Job for You</h1>
        <p>Grab this Opputunity ! JobHunt is your ultimate online recruitment solution, designed to revolutionize the way you hire. </p>
        <div className='homebtns'><button className='registerbtn' onClick={props.registerfunction}>Register</button>
        <button className='loginbtn' onClick={props.registerfunction}>Login</button></div>
      </div>
      <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  <Features />
  <Benefits />
  
    <div className='hiddenContainer'></div>

  <Efficiency />
  {/* <Clients /> */}

    </>
  )
}

export default Home