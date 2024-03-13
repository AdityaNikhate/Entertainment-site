import { useEffect } from "react"
import { TMDB_API } from '../store/constant'
import { useDispatch } from "react-redux"
import {setlatestmovies} from '../store/latestMovies'
const  useLatestMovies = ()=>{
  const dispater = useDispatch();
  const getData = async ()=>{  
    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", TMDB_API)
    const data = await res.json()
    
    dispater(setlatestmovies(data.results))
  }
  useEffect(()=>{
    getData()
  },[])
}

export default useLatestMovies