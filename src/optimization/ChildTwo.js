import React from 'react'

function ChildTwo({name,person}) {
    console.log('child two rendering')
  return (
    <div>
      {name} {person.fName} {person.lName}
    </div>
  )
}

export const MemozidChildTwo = React.memo(ChildTwo)
