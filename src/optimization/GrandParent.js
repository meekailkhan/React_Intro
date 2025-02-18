import React,{useState} from 'react'
import ParentOne from './ParentOne';
import ChildOne from './ChildOne';

function GrandParent() {
    const [count,setCount] = useState(0);
  return (
    <div>
      <button onClick={()=> setCount(nc => nc + 1)}>Grand Count - {count}</button>
      <ParentOne>
        <ChildOne/>
      </ParentOne>
    </div>
  )
}

export default GrandParent
