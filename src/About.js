import React from 'react'
import './About.css'
import aboutImg from './images/about.jpg'
function About() {
    return (
        <div className='about'>
            <div className='about__Left'>
                <h1>What is Tradesafegiftworld?</h1>
                <p>Tradesafegiftworld is a platform for the future of funding that powering crypto for the new equity blockchain</p>
            <div className='about__LeftContact'>
                <button className='btn-green'>Contact us</button>
                <p> Watch Video</p>
            </div>
            </div>
        <div className='about__Right'>
            <img src={aboutImg} alt='about image'/>
        </div>
        </div>
    )
}

export default About
