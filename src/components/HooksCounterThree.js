import React,{useState} from 'react'

function HooksCounterThree() {
    const [items,setItems] = useState([])

    const addItem = ()=>{
        setItems([...items,{
            id : items.length,
            value : Math.floor(Math.random()*11)
        }])
    }

  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {items.map(item => <li key={item.id}>{item.value}</li> )}
        </ul>
    </div>
  )
}

export default HooksCounterThree
