import React from 'react';

// function Greet(){
//     return <h1>hello world</h1>
// }

const Greet = (props) => {
    const {firstName,lastName} = props
    return (
        <h1>{firstName}_{lastName}</h1>
    )
}

export default Greet