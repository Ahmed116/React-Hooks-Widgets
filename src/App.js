import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
  {
    title: 'What is Ract',
    content: 'React is a front end javascript library',
  },
  {
    title: 'why use React ?',
    content: 'React is a favorite js library among engineers',
  },
  {
    title: 'how to use React',
    content: 'You use React by creating a React components',
  },
]

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
]




export default function App() {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
     <Route path = "/">
      <Accordion items={items} />
     </Route>
      <Route path = "/list">
      <Search />
      </Route>
      <Route path = "/dropdown">
      <Dropdown 
      label="Select a Color"
      selected = {selected}
      onSelectedChange = {setSelected}      
      options={options} />
      </Route>
      <Route path = "/translate">
      <Translate />
      </Route>
    </div>
  )
}
