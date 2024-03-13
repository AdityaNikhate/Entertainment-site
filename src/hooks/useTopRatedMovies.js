import { useEffect } from "react"
import { TMDB_API } from '../store/constant'
import { useDispatch } from "react-redux"
import {settopratedmovies} from '../store/topRatedMovies'
const  useLatestMovies = ()=>{
  const dispater = useDispatch();
  const getData = async ()=>{  
    const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", TMDB_API)
    const data = await res.json()
    dispater(settopratedmovies(data.results))
  }
  useEffect(()=>{
    getData()
  },[])
}

export default useLatestMovies