import React from 'react'

function Title() {
    console.log('title component rendring')
  return (
    <h1>
        useCallback hook
    </h1>
  )
}

export default React.memo(Title)
