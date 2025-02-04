import React from 'react'

function Column(props) {
  return (
    <>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
    </>
  )
}

export default Column
