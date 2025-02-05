import React ,  {useState} from 'react'
import WithCounter from './WithCounter'

function HoverCounter(props) {
    
  return (
    <div>
        <h1 onMouseOver={props.increamentCounter}>Hover {props.count} time</h1>
    </div>
  )
}

export default WithCounter(HoverCounter)
