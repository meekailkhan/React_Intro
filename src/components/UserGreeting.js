import React,{useState} from 'react'

function UserGreeting() {
  const [isLoggedIn,updateLog] = useState(true);
//   let message = isLoggedIn ? <div>Welcome Meekail</div> : <div>Welcome Guest</div>

//   return (
//     <div>{message}</div>
//   )

    return isLoggedIn && <div>Welcome Meekail</div>
//   if(isLoggedIn){
//     return (
//         <div>
//             Welcome Meekail
//         </div>
//     )
//   }else{
//     return (
//         <div>
//             Welcome Guest
//         </div>
//     )
//   }
}

export default UserGreeting
