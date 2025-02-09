
import React, { useReducer } from 'react'

const initialValue = {
    firstCounter: 0,
    secondCounter: 10,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value };
        case 'increment5':
            return {...state, firstCounter: state.firstCounter + action.value };
        case 'decrement5':
            return {...state, firstCounter: state.firstCounter - action.value };
        case 'secondIncrement':
            return {...state, secondCounter: state.secondCounter + action.value };
        case 'secondDecrement':
            return {...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return initialValue
        default:
            return state
    }
}

function ReduceTwoCounter() {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <div> firstCounter - {count.firstCounter}</div>
            <div> secondCounter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment5', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement5', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'secondIncrement', value: 5 })}>secondCounter Increment</button>
            <button onClick={() => dispatch({ type: 'secondDecrement', value: 5 })}>secondCounter Decrement</button>
            <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        </div>
    )
}

export default ReduceTwoCounter
