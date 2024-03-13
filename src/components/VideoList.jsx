import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YT_API } from '../store/constant'

const VideoList = () => {
  const [allvideos, setAllvideos] = useState([])

  const fetchData = async ()=>{
    const res = await fetch(YT_API)
    const data = await res.json()
    // console.log(data.items[0])
    setAllvideos(data.items)
  }
  useEffect(()=>{
    fetchData()
  },[])
  if(allvideos.length === 0){
    return (
      <div className='flex flex-wrap gap-4 p-2 justify-around'>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </div>
    )
  }
  return (
    <div className='flex flex-wrap gap-4 p-2 justify-around'>
    {
      allvideos.map((item)=>(
        <VideoCard key={item.id} id={item.id} thumbnail={item.snippet.thumbnails.high} title={item.snippet.title} channelTitle={item.snippet.channelTitle}/>
      ))
    }
    </div>
  )
}

export default VideoList