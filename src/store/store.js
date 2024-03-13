import { configureStore } from "@reduxjs/toolkit";
import navreducer from './sidenavSlice'
import latestmovies from './latestMovies'
import moviereducer from './currentMovie'
import topratedreducer from './topRatedMovies'
export const store = configureStore({
  reducer:{
    navigate: navreducer,
    latestmovies: latestmovies,
    moviedetail: moviereducer,
    topratedmovies: topratedreducer
  }
})