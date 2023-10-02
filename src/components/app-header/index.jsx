import React, { memo } from 'react'
import { AppHeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'

export default memo(function AppHeader() {
  return (
    <AppHeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </AppHeaderWrapper>
  )
})