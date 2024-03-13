import { createSlice } from "@reduxjs/toolkit";

export const topRatedMovies = createSlice({
  name:"topratedmovies",
  initialState: {
    movieList: null
  },
  reducers:{
    settopratedmovies: (state, action)=>{
      state.movieList = action.payload
    }
  }
})
export const {settopratedmovies} = topRatedMovies.actions
export default topRatedMovies.reducer