import React,{useState} from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);
    
  return (
    <div>
      <button onClick={()=> setCount(c => c + 1)}>count - {count}</button>
      <button onClick={()=> setCount(0)}>Reset Count</button>
      <button onClick={()=> setCount(5)}>Count 5</button>
      {console.log('use state rander')}
    </div>
  )
}

export default UseState
