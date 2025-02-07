import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [counut, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('use effect updatign title')
        document.title = `clicked ${counut} times`
    },
        [counut]
    )
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count => count + 1)}>click {counut} time</button>
        </div>
    )
}

export default UseEffect
