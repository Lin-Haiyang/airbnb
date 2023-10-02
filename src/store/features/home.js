import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services/modules/home'

export const fetchGoodsPriceInfo = createAsyncThunk('fetchGoodsPriceInfo', async () => {
  const homeGoodPriceData = await getHomeGoodPriceData();
  return homeGoodPriceData
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    goodsPriceInfo: {}
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGoodsPriceInfo.fulfilled, (state, { payload }) => {
      console.log("🚀 ~ file: home.js:19 ~ builder.addCase ~ payload:", payload)
      state.goodsPriceInfo = payload;
    })
  }
})

export default homeReducer.reducer;
