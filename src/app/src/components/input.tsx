import React from 'react'

function Input({ type = 'text', value = '', onchange = (() => { }) }) {
  return (
    <div className='ct-input'>
      <input className='el-input' type={type} value={value} onChange={onchange} />
    </div>
  )
}

export default Input
