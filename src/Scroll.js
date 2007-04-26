import React from 'react'
import './Scroll.css'
function Scroll() {
    return (
        <div className='scroll'>
            <div className='scroll__left'>
                <a href='#'>Home</a>
                >
                <a href='#'>About</a>

            </div>

            <div className='scroll__right'>
                <p>Scroll to Top</p>
                ^
            </div>

        </div>
    )
}

export default Scroll
