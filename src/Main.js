import React from 'react';
import './Main.css'
import NavBar from './NavBar';
import Slider from './Slider'
import Mover from './Mover'
import About from './About'
import How from './How'
import Services from './Services'
import Testimonial from './Testimonial'
import GiftCards from './GiftCards'
import Scroll from './Scroll'
import Contact from './Contact'
import Footer from './Footer'
function Main(){
    return (
        <div className='main'>
{/* <NavBar/> */}
<Slider/>
<Mover/>
<About/>
<How/>
 <Services/> 
<Testimonial/>
<GiftCards/>
<Scroll/>
<Contact/>
<Footer/>
       </div> 
    );

}

export default Main