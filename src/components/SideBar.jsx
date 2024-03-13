import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {togglenav} from '../store/sidenavSlice'

const SideBar = () => {
  const show = useSelector((state)=>state.navigate.nav)
  const dispatch = useDispatch()
  if(!show){
    return null
  }
  const handleClick=()=>{
    dispatch(togglenav())
  }
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.1, translateX: 300 }}
    animate={{ opacity: 1, scale: 1, translateX: 0}}
    transition={{ duration: 0.8 }}
     className='w-48 border-r-[1px] fixed top-12 bg-white z-20  border-gray-200 h-[90vh] mr-10 md:w-96'>
      <ul className='w-full py-3 px-2'>
        <Link to='/' onClick={handleClick}><li className='mb-3 rounded px-2 py-1 hover:bg-gray-200'>Home</li></Link>
        <Link to="/latestmovies" onClick={handleClick}><li className='mb-3 rounded px-2 py-1 hover:bg-gray-200'>Latest Movies</li></Link>
        <Link to='/topratedmovie' onClick={handleClick}><li className='mb-3 rounded px-2 py-1 hover:bg-gray-200'>Top Rated Movie</li></Link>
        
      </ul>
    </motion.div>
  )
}

export default SideBar