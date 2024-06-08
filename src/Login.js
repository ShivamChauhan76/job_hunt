import React, { useEffect } from 'react';
import './Login.css'
import Aos from 'aos';

const Login = (props) => {

    useEffect(() => {
        Aos.init({
            duration: '1000',
            easing: 'ease-in-out',
        })
    })

  return (
    <>
    <div className='loginContainer'>
        <h1 data-aos='fade-right'>Login</h1>
        <label data-aos='fade-right'>Username</label>
        <input></input>
        <label data-aos='fade-right'>Password</label>
        <input></input>
        <span>Forgot Password ?</span>
        <div className='loginbuttonContainer'><button className='login'>Login</button></div>
        <p>Don't have an account ? <span onClick={props.registerfunction}>Register</span></p>
    </div>
      
    </>
  );
}

export default Login;
