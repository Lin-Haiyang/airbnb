import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

export default memo(function HeaderLeft() {
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate('/home')
  }
  return (
    <HeaderLeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <IconLogo/>
      </div>
    </HeaderLeftWrapper>
  )
})
