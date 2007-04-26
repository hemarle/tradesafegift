import React from 'react'
import './Services.css'
import image1 from '@material-ui/icons/AccessAlarm'
function Services() {
    return (
        <div className='services'>
           <center> <h2>Service we <span>Provide</span></h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </center>
       <div className='services__Options'>
           <div className='services__Option'><image1/><p>Data Protection</p></div>
           <div className='services__Option'><p>Security Protected</p></div>
           <div className='services__Option'><p>Support 24/7</p></div>
           <div className='services__Option'><p>Payment Methods</p></div>
           <div className='services__Option'><p>Registered Company</p></div>
           <div className='services__Option'><p>Secured Company</p></div>
           <div className='services__Option'><p>Live Exchange Rates</p></div>
           <div className='services__Option'><p>Cryptocurrency Investments</p></div>
       </div>
        </div>
    )
}

export default Services
