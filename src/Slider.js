import React, {useEffect, useRef} from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import gsap from 'gsap'


function Slider() {

    
let header2= useRef()

const tl= new gsap.timeline()
useEffect(()=>{
    tl.fromTo(header2.current, 5,{opacity: 1}, {opacity: 0}) 
console.log(header2.current, 'header2')
}, [])

    return (
        <div className='slider'>
            <Carousel  useKeyboardArrows={true} showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}
            
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <div  type="button" onClick={onClickHandler} title={label} className='slider__arrow'>
                      <div className='arrow'> {"<"} </div>  
                    </div>
                )
            }
            
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <div  onClick={onClickHandler} title={label}  className='arrow__next'>
                     <div className='arrow__right'> > </div>  
                    </div>
                )
            }
                
                
                
                >
            <div className='slider__1'>
               
                <div className='slider__center' >
                    <h1 >Welcome to Tradesafegiftworld</h1>
                    <br/>
                    <p   >Tradesafe is also known as the virtual trade world</p>
                    <br/>
                    <button  className='slider__button'>Get in touch</button>
                    <br/>
                </div>

            </div>
    <div className='slider__2'>
            <div className='slider__center'>
                <h1>Trade <span>gift card</span></h1><h1> with ease</h1>
                <br/>
                <p>Exchange any form of giftcard and get paid with ease</p>
                <br/>
                <br/>
                <button className='slider__button'>Log in</button>
                <br/>
            </div>
    </div>
   
            </Carousel>
        </div>
    )
}

export default Slider
