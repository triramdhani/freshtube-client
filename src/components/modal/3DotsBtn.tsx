import React, { useState } from 'react'
import { usePlaylistContext } from '../../context/PlaylistContext'
import {ClockIcon, ListBulletIcon} from '@heroicons/react/24/outline'

interface OptionDotsBtnProps {
    id: number
   openModalPlaylistFunction: ()=> void
}

export default function OptionDotsBtn({id, openModalPlaylistFunction}: OptionDotsBtnProps) {
  const {setVideosToWatchlater, watchlater, removeVideosFromWathclater} =  usePlaylistContext()
  
  return (
    <div className='bg-slate-300 text-[12px] min-w-[140px]'>
        <div onClick={()=> setVideosToWatchlater(id)} className={"flex items-center p-1 border-2 border-slate-900 cursor-pointer"}>
          {/* {watchlater} */}
            <span><ClockIcon width={15} className={"text-slate-700"}/></span>
            <span className='ml-1 text-[11px] font-semibold'>Add To WatchLater</span>
        </div>
        <div className={"flex items-center p-1 border-2 border-slate-900 cursor-pointer"}>
            <span><ListBulletIcon width={15} className={"text-slate-700"}/></span>
            <span onClick={openModalPlaylistFunction} className='ml-1 text-[11px] font-semibold'>Add to Playlist</span>
        </div>
        {/* <div onClick={()=>removeVideosFromWathclater(id)}>Remove from Watchlater</div> */}
    </div>
  )
}
