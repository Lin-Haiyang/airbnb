import * as actionTypes from './constants'
import { getEntireList } from '@/services/modules/entire'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeEntireListAction = (entireList) => ({
  type: actionTypes.CHANGE_ENTIRE_LIST,
  entireList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeEntireLoadingAction = (entireLoading) => ({
  type: actionTypes.CHANGE_ENTIRE_LOADING,
  entireLoading
})

export const fetchEntireListAction = () => {
  return async (dispatch, getState) => {
    const currentPage = getState().entire.currentPage;
    dispatch(changeEntireLoadingAction(true))
    const res = await getEntireList(currentPage * 20)
    dispatch(changeEntireLoadingAction(false))
    dispatch(changeEntireListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
}