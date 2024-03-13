import React, { useEffect } from 'react'
import { TMDB_API } from '../store/constant'
import useLatestMovies from '../hooks/useLatestMovies'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import VideoCardShimmer from './VideoCardShimmer'

const LatestMovies = () => {
  useLatestMovies()
  const data = useSelector((state)=>state.latestmovies.movieList)
  
  if(data === null){
    return (
      <div className='flex flex-wrap gap-4 p-2 justify-around'>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
        <VideoCardShimmer/>
      </div>
    )
  }

  return (
    <div className='flex flex-wrap gap-4 p-2 justify-around'>
      {
        data.map(item=>(
          <VideoCard key={item.id} thumbnail={item.poster_path} title={item.overview} channelTitle={item.original_title} id={item.id} flag={2}/>
        ))
      }

    </div>
  )
}

export default LatestMovies