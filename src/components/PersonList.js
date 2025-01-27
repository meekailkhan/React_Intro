import React from 'react'

function PersonList(props) {
  return (
    <div>
        <h2>Hi my name is {props.person.name} and iam {props.person.age} year old and i know {props.person.skill}</h2>
    </div>
  )
}

export default PersonList
