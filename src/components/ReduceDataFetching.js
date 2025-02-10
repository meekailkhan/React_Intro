import React,{useEffect,useState} from 'react'
import axios, { AxiosHeaders } from 'axios'

function ReduceDataFetching() {
    const [loading,setLoading] = useState(true);
    const [post,setPost] = useState('');
    const [error,setError] = useState('')


    useEffect(
        ()=>{
            (async ()=>{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
                try{
                    setLoading(false);
                    setPost(response.data)
                    setError('')
                }catch(err){
                    setLoading(false);
                    setPost({})
                    setError('something wents wrong')
                }
            })()
        },[]
    )

  return (
    <div>
      {loading ? 'loading' : post.title}
      {error ? error : null}
    </div>
  )
}

export default ReduceDataFetching
