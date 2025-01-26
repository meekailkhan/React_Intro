import React from 'react'

function ChildComponet(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Click to Greet</button>
    </div>
  )
}

export default ChildComponet
