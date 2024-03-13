import React from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import {togglenav} from '../store/sidenavSlice'
const Header = () => {
  const dispatch = useDispatch()
  const hanldeClick = ()=>{
    dispatch(togglenav())
  }

  return (
    <div className=' grid grid-flow-col py-3 px-10 items-center shadow-md'>
      <div className='flex col-span-2 items-center'>
      <GiHamburgerMenu onClick={hanldeClick} className='mr-4 text-2xl'/>
      <img className='w-52 md:w-40' src={logo} alt="logo" />
      </div>

      <div className='col-span-9 flex items-center md:hidden'>
        <input className='outline-none rounded-l-full border-gray-300 border-[1px] w-3/5 py-1 px-3' placeholder='Search Box' type="text" />
        <button className='py-2 px-5 rounded-r-full  bg-gray-200'><AiOutlineSearch className='text-xl' /></button>
      </div>

      <div className='flex col-span-1 justify-end'>
        <IoIosNotifications className='text-2xl mr-4'/>
        <FaRegCircleUser className='text-2xl'/>
      </div>

    </div>
  )
}

export default Header