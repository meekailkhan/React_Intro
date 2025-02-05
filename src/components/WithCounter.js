import React,{useState} from 'react'


function WithCounter(OriginalComponent) {
    function NewCompnent(props){
        const [count,counterUpdater] = useState(0);
        function increamentCounter(){
            counterUpdater(count + 1)
        }
        return <OriginalComponent count={count} increamentCounter={increamentCounter} {...props}/>
    }

    return NewCompnent
}

export default WithCounter

// import React, { useState } from 'react';

// function WithCounter(OriginalComponent) {
//     return function NewComponent(props) {
//         const [count, setCount] = useState(0);

//         function incrementCounter() {
//             setCount(count + 1);
//         }

//         return <OriginalComponent count={count} incrementCounter={incrementCounter} {...props} />;
//     };
// }

// export default WithCounter;
