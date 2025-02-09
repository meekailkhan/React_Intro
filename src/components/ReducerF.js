import React, { useContext } from 'react'

import { CounterContext } from '../App.js'

function ReducerF() {
    const counterContext = useContext(CounterContext)
    return (
        <div>
        <div> Componet F count - {counterContext.counter}</div>
            <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerF
