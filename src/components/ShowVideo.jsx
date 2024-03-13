import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ShowVideo = () => {
  const [param, setParam] = useSearchParams();
  const [id, setid]= useState(null)
  useEffect(()=>{
    const temp = param.get('v')
    setid(temp)
  },[])


  return (
    <div>
      <div className='p-3 w-full flex justify-center md:hidden'>
      <iframe width="1000"
      height="600" 
      src={"https://www.youtube.com/embed/"+id+"?autoplay=1"} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>

    <div className='p-1 w-full mt-44 justify-center hidden md:flex md:items-center'>
      <iframe width="1000"
      height="250" 
      src={"https://www.youtube.com/embed/"+id+"?autoplay=1"} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
    </div>
  )
}

export default ShowVideo