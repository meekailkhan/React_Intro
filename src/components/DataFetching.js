import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }

    useEffect(
        () => {
            const fetchedPost = async () => {
                try {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
                    console.log(response)
                    setPost(response.data)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchedPost()
        }, [idFromButtonClick]
    )
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type='button' onClick={handleClick}>Fetch Data</button>
            <div>{post.title}</div>
            {/* <ul>
                {post.map((post, id) => <li key={id}>{post.title}</li>)}
            </ul> */}
        </div>
    )
}

export default DataFetching
