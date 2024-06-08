import React, { useEffect } from 'react';
import './Preloader.css'
import Aos from 'aos';

const Preloader = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing:'ease-in-out'
        })
    }, [])

  return (
    <>
    {/* IF NEW-ANIMATION CREATES ERROR THEN REMOVE IT */}
        <div className='preloaderComtainer' data-aos="fade-down new-animation">
            <h1 data-aos="fade-down" data-aos-delay="1000">Ooo   Mama   Khadja</h1>
        </div>
    </>
  );
}

export default Preloader;
