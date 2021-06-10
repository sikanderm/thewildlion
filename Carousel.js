import React from 'react';
import { useEffect, useState } from 'react';
import mt1 from './Images/mt1.jpg';
import mt2 from './Images/mt2.jpg';
import mt3a from './Images/mt3a.jpg';
import '../App.css'
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
function Carousel(){
    const [x, setX] = useState(0);
    const left = () => {
        if(x < 0){
             setX(x + 100);
        }
        else{
            setX(x + 0);
        }
    }
    const right = () => {
        if(x > -101){
            setX(x - 100);
        }else{
            setX(x - 0);
        }
    }
    return(
        <div>
            <div className="carousel">
                <div className="slide" style={{transform: `translateX(${x}%)`}}>
                <img className="carousel-slide" src={mt3a} alt="mt2" />
                </div>
                <div className="slide" style={{transform: `translateX(${x}%)`}}>
                <img className="carousel-slide" src={mt3a} alt="mt2" />
                </div>
                <div className="slide" style={{transform: `translateX(${x}%)`}}>
                <img className="carousel-slide" src={mt3a} alt="mt2"/>
                </div>
            <button className="left" onClick={left}><FaChevronLeft className="icon-pos"/></button>
            <button className="right" onClick={right}><FaChevronRight className="icon-pos"/></button>
            </div>
           
        </div>          
    );
}
    
export default Carousel;