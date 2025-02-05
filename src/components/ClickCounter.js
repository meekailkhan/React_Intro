import React ,{useState} from 'react'
import WithCounter from './WithCounter';

function ClickCounter(props) {
   
  return (
    <div>
        <button onClick={props.increamentCounter}>Clicked {props.count} time</button>
    </div>
  )
}

export default WithCounter(ClickCounter)
// import React from 'react';
// import WithCounter from './WithCounter';

// function ClickCounter(props) {
//   return (
//     <div>
//         <button onClick={props.incrementCounter}>Clicked {props.count} times</button>
//     </div>
//   );
// }

// export default WithCounter(ClickCounter);
