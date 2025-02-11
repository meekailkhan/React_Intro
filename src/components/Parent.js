import React, { useState,useCallback } from 'react'
import Title from './Title'
import ChildCount from './ChildCount'
import ChildButton from './ChildButton'




function Parent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback (() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary]) 


    return (
        <div>
            <Title />
            <ChildCount text='age' count={age} />
            <ChildButton handleClick={incrementAge} child='Increment Salary'></ChildButton>
            <ChildCount text='salary' count={salary} />
            <ChildButton handleClick={incrementSalary} child='Increment Salary'></ChildButton>
        </div>
    )
}

export default React.memo(Parent)
