import React from 'react'

function User(props) {
  return (
    <div>
      <h1>{props.isLoggedIn(true)}</h1>
    </div>
  )
}

export default User
