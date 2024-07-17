import React, { ChangeEvent, useState } from 'react'
import Title from './components/title.tsx'
import Input from './components/input.tsx'
import Button from './components/button.tsx'
import Flex from './components/flex.tsx'
import Item from './components/item.tsx'

class ItemModel {
  text = ''
  datetime = 0

  constructor(text: string, datetime = Date.now()) {
    this.text = text
    this.datetime = datetime
  }

  toJSON() {
    const { text, datetime } = this
    return { text, datetime }
  }
}

function App() {
  const [item, setItem] = useState<string>('')
  const [items, setItems] = useState<Array<ItemModel>>([new ItemModel('load page')])

  const add = () => setItems(Array.from(items).concat([new ItemModel(item)]))

  const onInputChange = (ev: ChangeEvent) => setItem(ev.target?.value.toString())

  return (
    <>
      <Title text={'informaker'} />
      <Flex>
        <input value={item} onChange={onInputChange} />
        <Button text='add' onclick={add} />
      </Flex>

      {
        Array.from(items).map((item, key) => (<Item key={key} text={item.text} datetime={item.datetime} />))
      }
    </>
  )
}

export default App
