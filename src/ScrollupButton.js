import React from 'react';
import { useEffect , useState } from 'react';
// import Aos from 'aos';

const ScrollupButton = () => {

    const [top , setTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll' , () => {
            if(window.scrollY > 100){
                setTop(true);
            }
            else{
                setTop(false);
            }
        })
        // Aos.init({
        //     duration: '100',
        //     easing: 'ease-in-out',
        // })
    } , [])

    const ScrollUp = () => {
        window.scrollTo(0,0)
    }
    // const ScrollUp = () => {
    //     window.scrollTo({
    //         top:0,
    //         behavior:'smooth'
    //     })
    // }

  return (
    <div>
        {top && <button style={{
            position:'fixed',
            bottom:'50px',
            right:'50px',
            height:'50px',
            width:'50px',
            fontSize:'30px',
            backgroundColor:'rgb(113, 19, 207)',
            outline:'none',
            border:'none',
        }} onClick={ScrollUp}
        >
        <i class="fa-solid fa-arrow-up" style={{color:'white'}}></i>
        </button>}

      
    </div>
  );
}

export default ScrollupButton;
