import React from 'react'
import './GiftCards.css'
import card1 from './images/card1.jpg'
function GiftCards() {
    return (
        <div className='giftcards'>

        <div className='giftcard'> <img src={card1} alt='card1'/></div>
            <div className='giftcard'> <img src={card1} alt='card1'/></div>
           <div className='giftcard'>  <img src={card1} alt='card1'/></div>
           <div className='giftcard'>  <img src={card1} alt='card1'/></div>
           <div className='giftcard'>  <img src={card1} alt='card1'/></div>
           <div className='giftcard'>  <img src={card1} alt='card1'/></div>
           <div className='giftcard'>  <img src={card1} alt='card1'/></div>
           <div className='giftcard'>  <img src={card1} alt='card1'/></div>
           <div className='giftcard'>  <img src={card1} alt='card1'/></div>
           <div className='giftcard'>  <img src={card1} alt='card1'/></div>
          <div className='giftcard'>   <img src={card1} alt='card1'/></div>
          <div className='giftcard'>   <img src={card1} alt='card1'/></div>
        </div>
    )
}

export default GiftCards
