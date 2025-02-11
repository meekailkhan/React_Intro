import React from 'react'

function ChildButton({handleClick,child}) {
    console.log(`rendering ${child}`)
  return (
    <button onClick={handleClick}>
        {child}
    </button>
  )
}

export default React.memo(ChildButton)
