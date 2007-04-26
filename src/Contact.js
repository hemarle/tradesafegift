import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className='contact'>
            <div className='contact__left'>
                <div className='contact__leftInfo'>
                    <p>Nigeria</p>
                </div>
                <div className='contact__leftInfo'><p>+1 385 230 7391</p></div>
                <div className='contact__leftInfo'><p>dfmopeoluwa@gmail.com</p></div>
                <br/>
                <div className='contact__leftInfo'>Monday - saturday: <span>24hours</span></div>
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
