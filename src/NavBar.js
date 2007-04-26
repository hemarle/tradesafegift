import React from 'react'
import './Navbar.css'
import favicon from './images/favicon.png'

function NavBar() {
    return (
        <div className='navbar'>
           <div className='navbar__Left'>
<img src={favicon} />
           </div>
           <div className='navbar__Center'>
<a href='#'>Home</a>
<a href='#'>About</a>
<a href='#'>Privacy & Policy</a>
<a href='#'>Contact</a>
<a href='#'>User Account</a>
</div>

<div className='navbar__Right'>
<button>Language</button>
<button className='navbar__Login'>Login</button>
<button className='navbar__Signup'>Sign up</button>
</div>
        </div>
    )
}

export default NavBar
