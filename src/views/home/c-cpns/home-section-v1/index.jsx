import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';

const HomeSectionV1 = memo(function HomeSectionV1(props) {
  const { infoData } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <SectionRooms roomList={infoData.list}></SectionRooms>
      <SectionFooter />
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
