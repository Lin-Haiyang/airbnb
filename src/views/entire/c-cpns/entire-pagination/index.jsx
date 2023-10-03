import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import { PaginationWrapper } from './style'
import { fetchEntireListAction, changeCurrentPageAction } from '@/store/features/entire/actionCreators'

const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }), shallowEqual)

  const dispatch = useDispatch()

  const count = Math.floor(totalCount / 20)
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  const handlePageChange = (event, newPage) => {
    window.scrollTo(0, 0)
    dispatch(changeCurrentPageAction(newPage - 1))
    dispatch(fetchEntireListAction())
  }

  return (
    <PaginationWrapper>
      <Pagination count={count} page={currentPage + 1} color="primary" onChange={handlePageChange} />
      <div className='info'>
        第 {start} – {end} 个房源，共超过 {totalCount} 个
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination