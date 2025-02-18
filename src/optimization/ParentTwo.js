import React,{useState,useMemo} from 'react';
import { MemozidChildTwo } from './ChildTwo';



function ParentTwo() {
    console.log('parent two rendering')
    const [count,setCount] = useState(0);
    const [name,setName] = useState('abcd')
    const person = {
        fName : 'meekail',
        lName : 'aslam'
    }
    const memoizedPerson = useMemo(()=> person,[])
  return (
    <div>
      <button onClick={()=> setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={()=> setName('efgh')}>Click To Change Name</button>
      <MemozidChildTwo name={name} person={memoizedPerson}/>
    </div>
  )
}

export default ParentTwo
