import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchEntireListAction } from '@/store/features/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/features/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  })
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire