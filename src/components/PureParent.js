// import React,{useState} from 'react'


// function PureParent() {
//     const [count,couterIncrement] = useState(0);
    
//     setInterval(()=>{
//         let newCounter = count + 1
//         couterIncrement(newCounter)
//     },2000)
//     console.log('parent component randring')
    
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default PureParent
import React, { useState, useEffect } from "react";

function PureParent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Previous state ka use
    }, 2000);

    return () => clearInterval(interval); // Cleanup to avoid memory leak
  }, []); // Empty dependency array -> sirf ek baar run hoga

  console.log("Parent component rendering");

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default PureParent;
