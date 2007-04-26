import React from 'react'
import './Footer.css'
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Instagram from '@material-ui/icons/Instagram'
import Youtube from '@material-ui/icons/YouTube'
function Footer() {
    return (
        <div className='footer'> 
        <div className='footer__left'>
            <Facebook className='footer__icon'/>
<Twitter className='footer__icon'/>
<Instagram className='footer__icon'/>
<Youtube className='footer__icon'/>
        </div>
        <div className='footer__right'>
            <p>

Copyright © 2021. All rights reserved</p>
        </div>
        </div>
    )
}

export default Footer
