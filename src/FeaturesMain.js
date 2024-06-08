import React, { useEffect } from 'react'
import Features from './Features'
import './FeaturesMain.css'
import Aos from 'aos'

const FeaturesMain = () => {

    useEffect(() => {
        Aos.init({
            duration:500,
            easing: 'ease-in-out'
        })
    }, [])

  return (
    <>
        <div className='featuresHeader'>
            <h1 data-aos="fade-down">Features</h1>
        </div>
        <Features />
        <div className='detailContainer'>
            <h1 data-aos="fade-up">Detailed View</h1>
            <div className='detail'>
                <div className='detailPoints' data-aos="fade-up" data-aos-delay="100">
                    <h5>Comprehensive Candidate Search</h5>
                    <p>
                        Our advanced search functionality allows you to quickly find qualified candidates based on specific criteria such as skills, 
                        experience, and location. 
                        Say goodbye to sifting through piles of resumes and streamline your search process.
                    </p>
                </div>
                <div className='detailPoints' data-aos="fade-up" data-aos-delay="200">
                    <h5>Efficient Interview Scheduling</h5>
                    <p>
                        Simplify the interview scheduling process with our intuitive calendar feature. 
                        Coordinate interview slots with candidates and team members seamlessly, 
                        reducing back-and-forth emails and saving valuable time.
                    </p>
                </div>
                <div className='detailPoints' data-aos="fade-up" data-aos-delay="300">
                    <h5>Data-Driven Decision Making</h5>
                    <p>
                        Make informed hiring decisions using our robust analytics dashboard. 
                        Gain valuable insights into candidate sourcing, applicant tracking, 
                        and performance metrics, empowering you to optimize your recruitment strategies.
                    </p>
                </div>
                <div className='detailPoints' data-aos="fade-up" data-aos-delay="400">
                    <h5>Collaborative Hiring Process</h5>
                    <p>
                        Enable seamless collaboration among hiring managers and HR professionals. 
                        Assign tasks, share feedback, and track candidate progress in real-time, 
                        ensuring a smooth and efficient hiring workflow.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeaturesMain