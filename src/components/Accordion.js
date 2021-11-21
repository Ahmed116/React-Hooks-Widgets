import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClick = (index) => {
    setActiveIndex(index)
  }

  const renderdItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    return (
      //use React.Fragment to avoid adding extra div
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return <div className='ui styled accordion'>{renderdItems}</div>
}

export default Accordion
