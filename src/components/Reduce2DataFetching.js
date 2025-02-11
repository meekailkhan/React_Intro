import React,{useEffect,useReducer} from 'react';
import axios from 'axios';

const initialValue = {
    loading : true,
    post : {},
    error : ''
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'Fetch_success':
            return {
                loading : false,
                post : action.payload,
                error : ''
            };
        case 'Fetch_error' :
            return {
                loading : false,
                post : {},
                error : 'something went wrong'
            }
        default : 
            return state

    }
}

function Reduce2DataFetching() {
    const [state,dispatch] = useReducer(reducer,initialValue);
    useEffect(
        ()=>{
            (async()=>{
                try{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                    dispatch({type : 'Fetch_success',payload : response.data})
                }catch(err){
                    dispatch({type : 'Fetch_error'})
                }
            })()
        },[]
    )


  return (
    <div>
      {state.loading ? 'loading...' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default Reduce2DataFetching
