import React from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { HomeIcon, MagnifyingGlassIcon, ListBulletIcon, HandThumbUpIcon } from '@heroicons/react/20/solid'
import {ClockIcon, FolderIcon} from '@heroicons/react/24/outline'
function Sidebar() {
  return (
        <div 
            className={" p-5 m-5 w-[10vw] text-center  bg-slate-50 sticky rounded-xl"}
        >
            <NavLink to='/'>                 
                <div className='flex justify-center'>
                    <HomeIcon width={20}/>
                </div>
                Home
            </NavLink>
            <NavLink to="/explore">
                <div className='flex justify-center mt-3'>
                    <MagnifyingGlassIcon width={20}/>
                </div>
                Explore
            </NavLink>
            <NavLink to={"/playlist"}>
                <div className='flex justify-center mt-3'>
                    <ListBulletIcon width={20}/>
                </div>
                    Playlist
            </NavLink>
            <NavLink to={"/watchlater"}>
                <div className='flex justify-center mt-3'>
                    <ClockIcon width={20}/>
                </div>
                    Watchlater
            </NavLink>
            <NavLink to={"/history"}>
                <div className='flex justify-center mt-3'>
                    <FolderIcon width={20}/>
                </div>
                    History
            </NavLink>
            <NavLink to={"/liked"}>
                <div className='flex justify-center mt-3'>
                    <HandThumbUpIcon width={20}/>
                </div>
                    Liked
            </NavLink>
        </div>
    
  )
}

export default Sidebar
