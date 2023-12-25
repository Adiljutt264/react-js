import React, { useState} from 'react'
import './Banner.css'
const Banner = () => {
  const [bannerInput, bannerSetInput] = useState(0);
  const increment = ()=> {
      bannerSetInput(bannerInput + 1)
  }
  const decrement = ()=> {
    bannerSetInput(bannerInput - 1)
}
  return (
    <div className='banner'>
      <input className='banner-input' 
      type='number' 
      placeholder='Enter Number' 
      value={bannerInput}
      ></input>
      <input className='banner-input' 
      type='number' 
      placeholder='Enter Number' 
      value= {(e)=>{
        bannerSetInput (e.target.value);
      }}
      ></input>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
export default Banner;