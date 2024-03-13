import { createSlice } from "@reduxjs/toolkit";

export const currentMovie = createSlice({
  name:"moviedetail",
  initialState:{
    detail:null
  },
  reducers:{
    saveDetail:(state, action)=>{
      state.detail = action.payload
    }
  }
})

export const {saveDetail} = currentMovie.actions

export default currentMovie.reducer;