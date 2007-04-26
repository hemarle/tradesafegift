import React, {useEffect, useRef} from 'react'
import './Contact.css'
import Phone from '@material-ui/icons/Phone'
import Locator from '@material-ui/icons/LocationCity'
import Mail from '@material-ui/icons/Message'
import Clock from '@material-ui/icons/Timelapse'
function Contact() {
    return (
        <div className='contact'>
            <div className='contact__left'>
                <div className='contact__leftInfo'>
                <Locator className='contact__leftIcon'/><p>Nigeria</p>
                </div>
                <div className='contact__leftInfo'><Phone className='contact__leftIcon'/><p>+1 385 230 7391</p></div>
                <div className='contact__leftInfo'> <Mail className='contact__leftIcon'/> <p>dfmopeoluwa@gmail.com</p></div>
                <br/>
                <div className='contact__leftInfo'> <Clock className='contact__leftIcon'/><p>Monday - saturday: <span>24hours</span></p> </div>
            </div>
            <div className='contact__middle'>
                <div className='contact__title'>Our Company</div>
                <p>Customer support</p>
                <p>About Us</p>
            </div>
            <div className='contact__center'>
                <div className='contact__title'>Blog</div>
                <p>Register</p>
                <p>Log in</p>
            </div>
            <div className='contact__right'>
               <div className='contact__title'>Email</div>
               <p> Subscribe to our newsletter!</p>
            
            </div>
        </div>
    )
}

export default Contact
