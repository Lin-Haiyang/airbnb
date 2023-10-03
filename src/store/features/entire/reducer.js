import * as actionTypes from "./constants";

const initialState = {
  currentPage: 0,
  entireList: [],
  totalCount: 0,
  entireLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case actionTypes.CHANGE_ENTIRE_LIST:
      return { ...state, entireList: action.entireList };
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case actionTypes.CHANGE_ENTIRE_LOADING:
      return { ...state, entireLoading: action.entireLoading };
    default:
      return state;
  }
};

export default reducer