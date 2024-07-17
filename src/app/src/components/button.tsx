import React from 'react'

function Button({ text = 'button', onclick = (() => { }) }) {
  return (
    <div className='ct-button'>
      <button className='el-button' onClick={onclick}>{text}</button>
    </div>
  )
}

export default Button
