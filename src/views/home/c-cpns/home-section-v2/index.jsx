import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { HomeSectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo(function HomeSectionV2(props) {
  const { infoData } = props;
  const tabNames = infoData?.dest_address?.map(item => item.name)
  const initialName = infoData.dest_address[0].name
  const [name, setName] = useState(initialName)

  /** 事件处理函数 */
  const tabClickHandle = useCallback(function (name) {
    setName(name)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%"></SectionRooms>
      <SectionFooter name={name} />
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
