import React, {useState,useEffect} from 'react'

function IintervalCounter() {
    const [count,setCount] = useState(0)

    function tick (){
        setCount(count => count + 1)
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[count])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IintervalCounter
