import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TMDB_POSTER } from '../store/constant';
import MoviePage from './MoviePage';
import { useDispatch, useSelector } from 'react-redux';
import {saveDetail} from '../store/currentMovie'

const VideoCard = ({thumbnail, title, channelTitle, id, flag=1}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state=> state.latestmovies.movieList)
  const data2 = useSelector(state=> state.topratedmovies.movieList)
  
  const handleClick = ()=>{
    
    if(flag===1){
      const vid = "/showvideo?v="+id;
      navigate(vid)
    }
    else if(flag===2){
      const vid = "/moviepage?v="+id;
      const temp = data.filter(e=>(e.id == id))
      console.log("aditya"+temp)
      dispatch(saveDetail(temp))
      navigate(vid)
    }else if(flag===3){
      const vid = "/moviepage?v="+id;
      const temp = data2.filter(e=>(e.id == id))
      console.log("aditya"+temp)
      dispatch(saveDetail(temp))
      navigate(vid)
    }
  }
  return (
    <div onClick={()=>{handleClick()}} className=' overflow-hidden shadow-md w-80 h-80 hover:scale-95 hover:shadow-xl md:mb-4' >
      <div className='w-full h-[65%] rounded-lg overflow-hidden'>
      {flag===1?<img className='w-full h-[133%] -mt-9 rounded-lg' src={thumbnail?.url} alt="not found"/>:(
        <img className='w-full h-full rounded-lg' src={TMDB_POSTER+thumbnail}/>
      )}
      </div>
      <h1 id="title" className=' overflow-hidden py-2 pb-0  text-base px-3 text-justify font-semibold font-["Poppins"]'>{title}</h1>
      <h1 className='px-3 pb-2 pt-2 text-gray-600'>{channelTitle}</h1>
    </div> 
  )
}

export default VideoCard