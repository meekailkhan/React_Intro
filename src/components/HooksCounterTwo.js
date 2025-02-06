import React, { useState } from 'react'

function HooksCounterTwo() {
    const [name,setName] = useState({firstName : '',lastName : ''});
  return (
    <div>
      <form action="">
        <input type="text" value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})}/>
        <input type="text" value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/>
      </form>
      <h1>first name is - {name.firstName}</h1>
      <h1>last name is - {name.lastName}</h1>
    </div>
  )
}

export default HooksCounterTwo
