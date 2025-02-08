import React ,{useContext} from 'react'
import ComponentF from './ComponentF'

import { UserContext,ChannleContext } from './UserContext'

function ComponentE() {
  const user = useContext(UserContext);
  const channle = useContext(ChannleContext)
  return (
    <div>
    <h1>{user} - {channle}</h1>
      <ComponentF />
    </div>
  )
}

export default ComponentE
