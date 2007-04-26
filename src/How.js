import React from 'react'
import './How.css'

function How() {
    return (
        <div className='how'>
            <center><h1>How to Get <span>Started</span></h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </center>
           
           <div className='how__Cards'>
               <div className='how__Card'>
                   <h2>Sell Bitcoin For Cash</h2>
                   <p>Sell that bitcoin and get paid intoyour bank account instantly</p>
               </div>
               <div className='how__Card'>
                   <h2>Sell Giftcard</h2>
                   <p>Sell or exchange any giftcard for cash and get paid instantly</p>
               </div>
               <div className='how__Card'>
               <h2>Bitcoin Vault</h2>
                   <p>Lock your bitcoin for a certain period of time and request for withdrawal upon tenure expiring</p>
               </div>
           </div>
           
           <button className='btn-green bttn m-r'> Get Started</button>
        </div>
    )
}

export default How
