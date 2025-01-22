import React from "react";

function Hello(props) {
    return (
        <div>
            <h1>hello {props.name}</h1>
            {props.children}
        </div>
    )
    // return React.createElement('div',{id : 'helloWorld'},React.createElement('h1',{id : 'heading'},'hello world from react'))
}

export default Hello