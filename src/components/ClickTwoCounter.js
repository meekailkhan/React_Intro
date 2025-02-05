import React , {useState} from 'react'

function ClickTwoCounter(props) {

  return (
    <div>
      <button onClick={props.incrementCounter}>click {props.count} time</button>
    </div>
  )
}

export default ClickTwoCounter
