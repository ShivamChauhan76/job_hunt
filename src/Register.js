import React, { useEffect } from 'react';
import './Register.css'
import Aos from 'aos';

const Register = (props) => {

    useEffect(() => {
        Aos.init({
            duration: '1000',
            easing: 'ease-in-out',
        })
    })

  return (
    <>
    <div className='registerContainer'>
        <h1 data-aos='fade-right'>Register</h1>
        <label data-aos='fade-right'>Username</label>
        <input></input>
        <label data-aos='fade-right'>Password</label>
        <input></input>
        <label data-aos='fade-right'>Confirm Password</label>
        <input></input>
        <div className='registerbuttonContainer'><button className='login'>Register</button></div>
        <p>Already have an account ? <span onClick={props.loginfunction}>Login</span></p>
    </div>
      
    </>
  );
}

export default Register;