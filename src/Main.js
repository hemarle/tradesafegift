import React from 'react';
import './Main.css'
import NavBar from './NavBar';
import About from './About'
import How from './How'
import Services from './Services'
import Testimonial from './Testimonial'
import GiftCards from './GiftCards'
function Main(){
    return (
        <div className='main'>
<NavBar/>
<About/>
<How/>
<Services/>
<Testimonial/>
<GiftCards/>
       </div> 
    );

}

export default Main