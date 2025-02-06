import React,{useState} from 'react'

function HooksCounter() {
    const initial = 0;
    const [count,setCount] = useState(initial)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(initial)}>Reset</button>
      <button onClick={()=>setCount(preCount => preCount + 1)}>Increment</button>
      <button onClick={()=>setCount(preCount => preCount - 1)}>Decrement</button>

    </div>
  )
}

export default HooksCounter
