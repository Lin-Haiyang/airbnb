import React, { memo, useCallback } from 'react'
import { EntireRoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/features/detail'
import { useNavigate } from 'react-router-dom'

export default memo(function EntireRooms() {
  const { entireList, totalCount, entireLoading } = useSelector((state) => ({
    entireList: state.entire.entireList,
    totalCount: state.entire.totalCount,
    entireLoading: state.entire.entireLoading
  }), shallowEqual)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  }, [dispatch, navigate])
  return (
    <EntireRoomsWrapper>
      <h2 className='title'>{totalCount}多所住处</h2>
      <div className="list">
        {
          entireList?.map(item => (
            <RoomItem
              key={item._id}
              itemData={item}
              itemWidth='20%'
              itemClick={itemClickHandle}
            />
          ))
        }
      </div>
      { entireLoading && <div className="entire-cover"></div> }
    </EntireRoomsWrapper>
  )
})
