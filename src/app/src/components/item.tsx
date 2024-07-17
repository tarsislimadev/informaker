import React, { useState } from 'react'
import Flex from './flex.tsx'

function Item({ text = '', datetime = 0 }) {
  return (
    <Flex>
      <p>{text}</p>
      <p>{datetime}</p>
      </Flex>
  )
}

export default Item
