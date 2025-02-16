import React,{useState} from 'react'
import useInput from '../hooks/useInput';

function CustomForm() {
    // const [firstName,setFirstName] = useState('')
    // const [lastName,setLastName] = useState('')

    const [firstName,bindFirstName,resetFirstName] = useInput('');
    const [lastName,bindLastName,resetLastName] = useInput('');

    const submitHandler = (e)=>{
        e.preventDefault();
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName()
    }
  return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="">First Name</label>
            <input type="text" {...bindFirstName}/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text"  {...bindLastName}/>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default CustomForm
