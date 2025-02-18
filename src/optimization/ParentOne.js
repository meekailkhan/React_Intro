import React,{useState} from 'react'
import ChildOne from './ChildOne'

function ParentOne({children}) {
    const [count,setCount] = useState(0)
    console.log('parent component render')
  return (
    <div>
      <button onClick={()=> setCount(c => c + 1)}>count - {count}</button>
      {/* <ChildOne /> */}
      {children}
    </div>
  )
}

export default ParentOne
