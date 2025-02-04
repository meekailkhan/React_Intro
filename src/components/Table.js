import React from 'react'
import Column from './Column'

function Table() {
  return (
    <table border=''>
    <thead>
        <tr>
            <th>firstName</th>
            <th>lastName</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <Column firstName='meekail' lastName='aslam'/>
        </tr>
        <tr>
            <Column firstName='mujaahid' lastName='aslam'/>
        </tr>
    </tbody>
    </table>
  )
}

export default Table
