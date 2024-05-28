import React from 'react'

const FullTextBox = ({header,text}) => {
  return (
    <div className='full-text-box'>
        <h3>{header}</h3>
        <p> {text} </p>
    </div>
  )
}

export default FullTextBox