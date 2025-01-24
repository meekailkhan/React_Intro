import React ,{useState} from 'react'

function Counter() {
    const [count,counterIncrement] = useState(0)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>{
        let newCounter = count + 1
        counterIncrement(newCounter)
      }}>Increase</button>
    <button onClick={()=>{
        let resetCounter = 0
        counterIncrement(resetCounter)
      }}>Restart</button>
     
    </div>
  )
}

export default Counter
