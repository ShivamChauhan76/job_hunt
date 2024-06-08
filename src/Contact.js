import React, { useEffect, useState } from 'react';
import './Contact.css';
import MessageRecieved from './MessageRecieved';
import Aos from 'aos';


const Contact = () => {

    const [appear , setAppear] = useState(false)
    const [name , setName] = useState('')
    const message = () => {
        setAppear(true);
        setTimeout(() => {
            setAppear(false);
            setName('');
        }, 5000)
        // setName('');
    }

    useEffect(() => {
        Aos.init({
            duration: 500,
            easing: 'ease-in-out',
            once: 'true'
        })
    })
        
  return (
    <>
    {appear ? <MessageRecieved  value={name}/> :
    <>
        <div className='contactHeader'>
            <h1 data-aos="fade-down">Contact</h1>
        </div>
        <div className='contactContainer'>
            <h1 data-aos="fade-up">Contact For Any Query</h1>
            <div className='contactList1'>
                <div className='contactItem' data-aos="fade-up" data-aos-delay="100">
                    <div className='contactFont'>
                        <i class="fa-solid fa-location-dot"></i>        
                    </div>
                    <span>Bangalore, Karnataka, INDIA</span>
                </div>
            
                <div className='contactItem' data-aos="fade-up" data-aos-delay="200">
                    <div className='contactFont'>
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <span>jobhunt@gmail.com</span>
                </div>
            
                <div className='contactItem' data-aos="fade-up" data-aos-delay="300">
                    <div className='contactFont'>
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <span>+916239809929</span>
                </div>
            </div>
            <div className='contactList2'>
                
                <div className='contactMap' data-aos="zoom-in-up" data-aos-delay="400">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715426981108!5m2!1sen!2sin"
                    className=' '
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className='contactForm' data-aos="zoom-in-up" data-aos-delay="400">
                    <h1>Are You Interested ?</h1>
                    <span style={{fontWeight:'bold'}}>To muh kya dekh ra hai bhai</span>
                    <span style={{fontWeight:'bold'}}>Just send us a message and We will contact you right back</span>
                    <input  className='contactTabs' placeholder='Your Name' onChange={(e) => setName(e.target.value)}/>
                    <input  className='contactTabs' placeholder='Your Email' />
                    <input  className='contactTabs' placeholder='Subject' />
                    <input  className='contactTabs' placeholder='Message' />
                    <button className='contactButton' onClick={message}>Send Message</button>
                </div>
                
            </div>
        </div>
    </>
    }
    </>
  );
}

export default Contact;
