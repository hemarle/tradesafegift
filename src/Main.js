import React from 'react';
import './Main.css'
import NavBar from './NavBar';
import About from './About'
import How from './How'
function Main(){
    return (
        <div className='main'>
<NavBar/>
<About/>
<How/>
       </div> 
    );

}

export default Main