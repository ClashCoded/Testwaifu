import React, { useState } from "react"
import "./Hero.css";

export default function InputButton(props) {

  const { count, setCount } = props

  const decrementCount = () => {
    if (count > 1) setCount(count - 1)
  }

  const incrementCount = () => {
    if (count > 9) {
      setCount(10)
    } else {
      setCount(count + 1)
    }
  }

  return (
    <div className="inputcssfix">
       <div>
       <button className="styledsidebutton" onClick={decrementCount}>-</button>
      <input
          className="styledinput"  
          type="number"
          readOnly
          name="clicks"
          min="1"
          max="10"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />   
          <button className="styledsidebutton" onClick={incrementCount}>+</button>
        </div>
  
    </div>
  )
}
