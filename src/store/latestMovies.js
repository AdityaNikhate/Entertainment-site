import { createSlice } from "@reduxjs/toolkit";

export const latestMovies = createSlice({
  name:"latestmovies",
  initialState: {
    movieList: null
  },
  reducers:{
    setlatestmovies: (state, action)=>{
      state.movieList = action.payload
    }
  }
})
export const {setlatestmovies} = latestMovies.actions
export default latestMovies.reducer