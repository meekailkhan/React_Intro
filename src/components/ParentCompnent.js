import React , {useState} from 'react'
import ChildComponet from './ChildComponet';

function ParentCompnent() {
    const [sta,staUpdater] = useState("parent");
    function parentGreetHandler(childName){
        console.log(`hello ${sta} from ${childName}`)
    }

  return (
    <div>
      <ChildComponet greetHandler={()=> parentGreetHandler('child')}/>
    </div>
  )
} 

export default ParentCompnent
