import React,{useState} from 'react'

const initialState = {
    fName : 'meekail',
    lName : 'aslam'
}

function ObjectUseState() {
    const [person,setPerson] = useState(initialState);
    function handleChange(){
        let newPerson = {...person}
        newPerson.fName = 'arbaaz';
        newPerson.lName = 'chouhan';
        setPerson(newPerson)
    }
  return (
    <div>
      <button onClick={handleChange}>{person.fName} {person.lName}</button>
    </div>
  )
}

export default ObjectUseState
