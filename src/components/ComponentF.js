import React from 'react'
import { UserConsumer } from './UserContext'
import User from './User'

function ComponentF() {
  return (
      <UserConsumer>
        {(username)=>{
            return <h1>hello {username}</h1>
        }}
      </UserConsumer>
  )
}

export default ComponentF
