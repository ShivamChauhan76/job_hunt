import React, { useEffect } from 'react'
import './Benefits.css'
import AOS from 'aos'

const Benefits = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
        })
    }, [])

  return (
    <>
        <div className='containerBenefits'>
            <h1 data-aos="fade-up">Benefits</h1>
            <div className='benefitsContent'>
                <div className='benefitsCards' data-aos="fade-up" data-aos-delay="200">
                    <i class="fa-solid fa-money-bill-trend-up"></i>
                    <span>Unparalleled Efficiency</span>
                    <p>
                        Save time, effort with our streamlined recruitment process,
                        enabling to focus on strategic HR initiatives and making faster hires
                        without compromising quality.
                    </p>
                </div>
                <div className='benefitsCards' data-aos="fade-up" data-aos-delay="400">
                    <i class="fa-solid fa-handshake"></i>
                    <span>Cost-Effective Solution</span>
                    <p>
                        Reduce your recruitment costs by eliminating manual process
                        and leveraging the power of automation. Our solution is designed to
                        maximize efficiency while minimizing expenses.
                    </p>
                </div>
                <div className='benefitsCards' data-aos="fade-up" data-aos-delay="600">
                    <i class="fa-solid fa-book-open-reader"></i>
                    <span>Enhances Candidate Quality</span>
                    <p>
                        Our powerful filtering and screening tools help you identify the most
                        qualified and perfectly skilled candidates, ensuring a higher success
                        rate in your hiring process.
                    </p>
                </div>
                <div className='benefitsCards' data-aos="fade-up" data-aos-delay="800">
                    <i class="fa-solid fa-compass-drafting"></i>
                    <span>Enhanced Collaboration</span>
                    <p>
                        JobHunt's collaborative features enable efficient communication,
                        feedback sharing, and seamless coordination among your hiring team,
                        leading to better decision-making and improved outcomes.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Benefits