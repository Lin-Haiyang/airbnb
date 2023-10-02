import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchGoodsPriceInfo } from '@/store/features/home'
import SectionHeader from 'components/section-header'
import SectionRooms from 'components/section-rooms'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodsPriceInfo } = useSelector((state) => ({
    goodsPriceInfo: state.home.goodsPriceInfo
  }), shallowEqual)

  // 派发异步事件
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodsPriceInfo())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        <div className='good-price'>
          <SectionHeader title={goodsPriceInfo.title}/>
          <SectionRooms roomList={goodsPriceInfo.list}/>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
