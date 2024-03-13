import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TMDB_API, TMDB_POSTER } from '../store/constant'
import { useSearchParams } from 'react-router-dom'

const MoviePage = () => {
  const data = useSelector(state=>state.moviedetail.detail)
  const [link, setLink] = useState("")
  const [cal, setCal] = useState("")
  const [param, setParam] = useSearchParams();
  useEffect(()=>{
    const temp = param.get('v')
    const ur = "https://api.themoviedb.org/3/movie/"+temp+"/videos?language=en-US"
    setCal(ur)
    fetchVideo()
  },[])

  const fetchVideo = async ( )=>{
    const res = await fetch(("https://api.themoviedb.org/3/movie/"+param.get('v')+"/videos?language=en-US"), TMDB_API)
    const data = await res.json();
    const temp = data.results.filter(e=>e.type === "Trailer");
    console.log(temp)
    const url = "https://www.youtube.com/embed/"+temp[0].key+"?autoplay=1"
    setLink(url)
  }
  return (
    <div className='w-full h-[110vh] flex justify-center items-center bg-gray-900  md:h-full box-border'>
      <div className='w-1/2 p-2 bg-white rounded-md bg-opacity-15 font-["Poppins"] box-border text-white md:w-full md:m-4'>
        <h1 className='font-bold text-center text-4xl mb-2'>Watch The Intro</h1>
        
        <div className='flex justify-center'>
        <iframe width="700" height="315" 
        src={link} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>

        <div className='w-full px-3 py-1'>
          <h1 className='text-2xl mt-2'>Movie Name: {data[0].title}</h1>
          <h1 className='text-xl mt-2'>Release Date: {data[0].release_date}</h1>
          <h2 className='text-justify mt-4'>Overview: {data[0].overview}</h2>
        </div>
        <div className='w-full h-44 px-5 flex justify-end gap-2 mt-3 mb-4 md:flex-col md:h-auto md:gap-5'>
          <div className='w-1/2 hover:scale-90 md:w-full md:h-60'><img className='w-full h-full rounded-lg' src={TMDB_POSTER+data[0].backdrop_path}/></div>
          <div className='w-1/2 hover:scale-90 md:w-full md:h-60'><img className='w-full h-full rounded-lg' src={TMDB_POSTER+data[0].poster_path}/></div>
        </div>
      </div>
    </div>
  )
}

export default MoviePage