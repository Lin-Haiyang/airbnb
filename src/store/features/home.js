import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongForData, getHomePlusData } from '@/services/modules/home'

// export const fetchGoodsPriceInfo = createAsyncThunk('fetchGoodsPriceInfo', async () => {
//   const homeGoodPriceData = await getHomeGoodPriceData();
//   return homeGoodPriceData
// })

export const fetchHomeDataAction = createAsyncThunk('fetchHomeDataAction', (payload, { dispatch }) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceAction(res))
  });
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreAction(res))
  });
  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountAction(res))
  });
  getHomeHotRecommendData().then((res) => {
    dispatch(changeHotRecommendAction(res))
  });
  getHomeLongForData().then((res) => {
    dispatch(changeLongForInfoAction(res))
  });
  getHomePlusData().then((res) => {
    dispatch(changePlusAction(res))
  });
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodsPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodsPriceInfo = payload
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  // extraReducers(builder) {
  //   builder.addCase(fetchGoodsPriceInfo.fulfilled, (state, { payload }) => {
  //     console.log("🚀 ~ file: home.js:19 ~ builder.addCase ~ payload:", payload)
  //     state.goodsPriceInfo = payload;
  //   })
  // }
})

export const {
  changeGoodPriceAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeHotRecommendAction,
  changeLongForInfoAction,
  changePlusAction
} = homeReducer.actions;

export default homeReducer.reducer;
