import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Carousel from './Carousel';
import Test from './Test';

import { useEffect, useState } from 'react';
import '../App.css'
import { FaHandHolding } from 'react-icons/fa';
function HomePage() {


  const [items, setData] = useState([]);
  const [curPage, setCurpage] = useState(1);
  const [pos, setPosPer] = useState(0);

   const handleClickR = () =>{
     if(items.length > 1){
     let pos1 = pos+2;
     setPosPer(pos1);
   }
  }
  const handleClickL = () =>{
    if(pos != 0){ 
    let pos1 = pos-2;
    setPosPer(pos1);
    }
 }
  useEffect(() => {
      fetch('https://thewildlion.net/load.php', {
      method: 'POST',
      body: JSON.stringify({
        ID: `${pos}`,
      })
    })
    .then(response => response.json())
    .then(data => setData(data))  
  }, [pos]);

    const curr = items;
    return(
        <div>     
        <Carousel />
        <div className="heading">
          <p>Explore Our Chracters</p>
        </div>
         {curr.map(curr => (
            <div className="home-center">
            <div className="home-center-intro">
            <img className="img-A" src={curr.imgA} alt="room"/>
            <p>{curr.about}</p> 
            </div>
              <div className="but-div"> 
             <button><Link to={`/${curr.title}`}>{curr.title}</Link></button>
             </div>
          </div>
          ))}   
          <div className="sc-div">
          <button className="prev" onClick={handleClickL}>prev</button>
          <button className="next" onClick={handleClickR}>next</button>
          </div>
        </div>
        
    );

         }

export default HomePage;