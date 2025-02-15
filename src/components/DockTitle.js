import React,{useEffect,useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function DockTitle() {
    const [count,setCount] = useState(0);

    // useEffect(()=>{
    //     document.title = `count - ${count}`
    // },[count])
    useDocumentTitle(count)
  return (
    <div>
      <button onClick={()=> setCount(count => count+1)}>Count - {count}</button>
    </div>
  )
}

export default DockTitle
