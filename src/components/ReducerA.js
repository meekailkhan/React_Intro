import React, { useContext } from 'react'

import { CounterContext } from '../App.js'

function ReducerA() {
    const counterContext = useContext(CounterContext)
    return (
        <div>
            <div> Componet A count - {counterContext.counter}</div>
            <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerA
