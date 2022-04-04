import React, { useEffect, useState } from 'react';
import Display from '../display/Display';
import Loader from '../loader/Loader';
import './Counter.css';
// import loader from './loader1.png';
// import axios from 'axios';
function Counter() {
  var [value, setValue] = useState();
  let madereq = false;
  const incvalue = () => {
    if (value < 1000) {
       var aa = JSON.parse(value);
       aa+=1
      setValue(aa)
    }

  }

  // Function is called everytime decrement button is clicked
  const decvalue = () => {
    if (value > 0)
      setValue(value - 1)
  }
 
  useEffect(() => {
    const url = 'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json';
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {if(resp == null){
        setValue(0);
      } else {
        setValue(resp)
      }
      madereq = true;
    } )
  }, []);
  return (
    <div>
      {/* {value.map(val => <div><p>{val}</p></div>)} */}
      <div className="container">
        <div className="counterbox">
          <div className="topcontent">
            {/* <img className='loaderImage' src={loader} alt="loader" /> */}
            {madereq ? '' : <Loader/>}
            <p className="loaderContent">Saving Counter Value</p>
          </div>
          <div className="centercontent">
            <div className="decrement">
              <button className="btn1" onClick={decvalue}>-</button>
            </div>
            <div className="countercontent">
              <input type="text" name="" id="count" min="0" max="4" className='content1' value={value} onChange={(e)=> {if(e.target.value > 1000){
              setValue(1000);
              } else{
                setValue(e.target.value)}}
                } />
            </div>
            <div className="increment">
              <button className="btn2" onClick={incvalue}>+</button>
            </div>
          </div>
          <div className="bottomcontent">
            <Display val={value}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Counter
