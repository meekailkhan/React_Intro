import React,{useState} from 'react'

function PropsCounter(props) {
    const [count,setCount] = useState(0);

    function incrementCounter(){
        setCount(count + 1)
    }

  return (
    <div>
        {props.render(count,incrementCounter)}
    </div>
  )
}

export default PropsCounter
