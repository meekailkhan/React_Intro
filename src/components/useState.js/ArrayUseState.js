import React,{useState} from 'react'

const initValue = ['meekail','mahir'];

function ArrayUseState() {
    const [persons,setPersons] = useState(initValue)

    function handleAdd(){
        let newPerson = [...persons];
        newPerson.push('arbaaz')
        newPerson.push('adnan');

        setPersons(newPerson)
    }
  return (
    <div>
      <button onClick={handleAdd}>Click</button>
      <div>
        {persons.map((person,index)=>{
            return <div key={index}>{person}</div>
        })}
      </div>
    </div>
  )
}

export default ArrayUseState
