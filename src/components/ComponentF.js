import React from 'react'
import { UserConsumer,ChannleConsumer } from './UserContext'
import User from './User'

function ComponentF() {
  return (
      <UserConsumer>
        {(username)=>{
            return (
              <ChannleConsumer>
                {(channel)=>{
                  return <h1>{username} - {channel}</h1>
                }}
              </ChannleConsumer>
            )
        }}
      </UserConsumer>
  )
}

export default ComponentF
