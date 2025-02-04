import React from 'react'
import Column from './Column'

function Table() {
  return (
    <table border=''>
        <tr>
            <th>firstName</th>
            <th>lastName</th>
        </tr>
        <tr>
            <Column firstName='meekail' lastName='aslam'/>
        </tr>
        <tr>
            <Column firstName='mujaahid' lastName='aslam'/>
        </tr>
    </table>
  )
}

export default Table
