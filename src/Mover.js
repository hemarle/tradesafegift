import React from 'react'
import './Mover.css'
import Ticker from 'react-ticker'
import card1 from './images/card1.jpg'

function Mover() {
    return (
        <div className='mover'>
             <Ticker>
        {({ index }) => (
            <>
                 <img src={card1} alt=""/>
            </>
        )}
    </Ticker>
        </div>
    )
}

export default Mover
