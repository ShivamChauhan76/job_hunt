import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

  const [dm , setdm] = useState(true)
  const [bgcolor , setBgcolor] = useState(true)

  const togglebtn = () => {
      
    setdm(!dm)
    setBgcolor(!bgcolor)
  }

  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary myNavbar">
  <div className="container-fluid">
    <NavLink className="navbar-brand jobhunt" to="/">
      JobHunt
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto" style={{display: 'flex' , alignItems: 'center' , gap:'5px'}}>
        <li className="nav-item">
          <NavLink className="nav-link headerText" aria-current="page" to="/">
            HOME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link headerText" to="/featuresmain">
            FEATURES
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link headerText" to="/benefitsmain">
            BENEFITS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link headerText" to="/efficiencymain">
            EFFICIENCY
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle headerText"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            MORE
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Testimonial
              </a>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item search">
          <a className="nav-link headerText" href="#">
            SEARCH
          </a>
        </li>
        <li className="nav-item login">
          <button className="nav-link" style={{color:'white'}} onClick={props.loginfunction}>
            Login
          </button>
        </li>
        <li className="nav-item register">
          <button className="nav-link" style={{color:'white'}} onClick={props.registerfunction}>
            Register
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={togglebtn}>
          {/* <i class={`fa-solid fa-moon ${dm ? 'darkmode' : 'lightmode'}`}></i> */}
          
          </button>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar