import React from 'react';
import './Main.css'
import NavBar from './NavBar';
import About from './About'
import How from './How'
import Services from './Services'
import Testimonial from './Testimonial'
function Main(){
    return (
        <div className='main'>
<NavBar/>
<About/>
<How/>
<Services/>
<Testimonial/>
       </div> 
    );

}

export default Main