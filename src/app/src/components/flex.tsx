import React from 'react'

function Flex({ children, widths = [] }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {children}
    </div>
  )
}

export default Flex
