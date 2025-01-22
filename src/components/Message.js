import React ,{useState} from "react";

function Message(){
    const [message,updateMsg] = useState('Welcome Visitor')

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={()=>{
                updateMsg('Thank for Subscription')
            }}>Subscribe</button>
        </div>
    )
}

export default Message