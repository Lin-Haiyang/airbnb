import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

export default memo(function EntireFilter() {
  const [ selectedItems, setSelectedItems ] = useState([])

  function filterItemClick(item) {
    const newSelectedItems = [...selectedItems];
    if (newSelectedItems.includes(item)) {
      const targetIndex = newSelectedItems.findIndex(filterItem => filterItem === item)
      newSelectedItems.splice(targetIndex, 1);
    } else {
      newSelectedItems.push(item)
    }
    setSelectedItems(newSelectedItems)
  }
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => (
            <div
              key={index}
              className={classNames('item', { active: selectedItems.includes(item) })}
              onClick={() => filterItemClick(item)}
            >
              {item}
            </div>
          ))
        }
      </div>
    </EntireFilterWrapper>
  )
})
