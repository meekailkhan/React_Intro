import React from 'react'

function ChildCount({text,count}) {
    console.log(`rendring ${text}`)
  return (
    <div>
       this is child counter
      {text} - {count}
    </div>
  )
}

export default React.memo(ChildCount)
