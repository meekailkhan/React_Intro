import React , {useState} from 'react'

function HoverTwoCounter(props) {
    
  return (
    <div>
      <h1 onMouseOver={props.incrementCounter}>Hover {props.count} time</h1>
    </div>
  )
}

export default HoverTwoCounter
