import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'

export default memo(function HeaderLeft() {
  return (
    <HeaderLeftWrapper>
      <div className='logo'>
        <IconLogo/>
      </div>
    </HeaderLeftWrapper>
  )
})
