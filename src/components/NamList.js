import React from 'react'
import PersonList from './PersonList'

export default function NamList() {
    const names = ["Diana","Bruce","Clark"]
    const persons = [
        {
            id : 1,
            name : "Diana",
            age : 300,
            skill : "React"
        },
        {
            id : 2,
            name : "Bruce",
            age : 40,
            skill : "Vue"
        },
        {
            id : 3,
            name : "Clark",
            age : 400,
            skill : "Angular"
        }
    ]

    // const personList = persons.map(person => <PersonList person={person}/>) 
       const nameList = names.map((name,index) => <h2 key={index}>{name}</h2>)

  return (
    <div>
        {nameList}
    </div>
  )
}
