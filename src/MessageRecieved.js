import React, { useEffect } from 'react';
import './MessageRecieved.css'
import Aos from 'aos';

const MessageRecieved = (props) => {

  useEffect(() => {

    window.scrollTo(0,0);
    Aos.init({
      duration: 3000,
      easing: 'ease-in-out'
    },[]);
  })

  return (
    <>
      <div className='messageContainer'>
        <div className='messageContent'>
        <h1 data-aos="zoom-=out-up">Message Recieved</h1>
        <h1 data-aos="zoom-=out-up" data-aos-delay="1000">Thank You So Much</h1>
        <h1 data-aos="zoom-=out-up" data-aos-delay="2000">All the Best {props.value}</h1>
        </div>
      </div>
    </>
  );
}

export default MessageRecieved;

