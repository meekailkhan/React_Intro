import React from 'react'
import './Stylesheet.css'


function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Style Sheet</h1>
    </div>
  )
}

export default Stylesheet
