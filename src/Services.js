import React from 'react'
import './Services.css'
import TimelineIcon from '@material-ui/icons/Timeline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FaceIcon from '@material-ui/icons/Face';
import PaymentIcon from '@material-ui/icons/Payment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SecurityIcon from '@material-ui/icons/Security';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
function Services() {
    return (
        <div className='services'>
           <center> <h2>Service we <span>Provide</span></h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
   <br/>
   <br/>
      </center>
       <div className='services__Options'>
           <div className='services__Option'><TimelineIcon className='material-icon'/><p>Data Protection</p></div>
           <div className='services__Option'><VerifiedUserIcon className='material-icon'/><p>Security Protected</p></div>
           <div className='services__Option'><FaceIcon className='material-icon'/><p>Support 24/7</p></div>
           <div className='services__Option'><PaymentIcon className='material-icon'/><p>Payment Methods</p></div>
           <div className='services__Option'> <LocationCityIcon className='material-icon'/><p>Registered Company</p></div>
           <div className='services__Option'><SecurityIcon className='material-icon'/><p>Secured Company</p></div>
           <div className='services__Option'><PhoneAndroidIcon className='material-icon'/><p>Live Exchange Rates</p></div>
           <div className='services__Option'><DesktopWindowsIcon className='material-icon'/><p>Cryptocurrency Investments</p></div>
       </div>
        </div>
    )
}

export default Services
