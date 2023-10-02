import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SectionTabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo(function SectionTabs(props) {
  const { tabNames = [], tabClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, name) {
    setCurrentIndex(index)
    tabClick(name)
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => (
            <div
              key={index}
              className={classNames("item", { active: index === currentIndex })}
              onClick={() => itemClickHandle(index, item)}
            >
              {item}
            </div>
          ))
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs
