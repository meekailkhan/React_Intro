import React,{useState,useEffect} from 'react'

function HooksMouse() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    function logMousePosition(e){
        console.log('mouse event')
        setX(e.clientX);
        setY(e.clientY)
    }
    
    useEffect(
        ()=>{
            console.log('useEffect logged')
            window.addEventListener('mousemove',logMousePosition)

            return ()=>{
                console.log('component unmount');
                window.removeEventListener('mousemove',logMousePosition)
            }
        },[]
    )

  return (
    <div>
      Hooks X = {x} : y = {y}

    </div>
  )
}

export default HooksMouse
