import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/features/home'
import { isEmptyO } from '@/utils'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongFor from './c-cpns/home-long-for'
import HomeSectionV3 from './c-cpns/home-section-v3'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodsPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
    goodsPriceInfo: state.home.goodsPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  // 派发异步事件获取首页列表数据
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2> }
        { isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo}></HomeSectionV2> }
        { isEmptyO(hotRecommendInfo) && <HomeLongFor infoData={longForInfo}></HomeLongFor> }
        { isEmptyO(goodsPriceInfo) && <HomeSectionV1 infoData={goodsPriceInfo}></HomeSectionV1> }
        { isEmptyO(highScoreInfo) && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3> }
      </div>
    </HomeWrapper>
  )
})

export default Home
