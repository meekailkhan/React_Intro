import React,{useState,useMemo} from 'react'

function UseMemoCounter() {
    const [countOne,setCountOne] = useState(0);
    const [countTwo,setCountTwo] = useState(0);

    const incrementOne = () => {
      setCountOne(countOne + 1)
    }

    const incrementTwo = () => {
      setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
      let i = 0;
      while(i < 200000000) i++
      return countOne%2===0
    },[countOne])


  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count one - {countOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count two - {countTwo}</button>
      </div>
    </div>
  )
}

export default UseMemoCounter
