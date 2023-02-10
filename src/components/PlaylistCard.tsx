import { TrashIcon } from '@heroicons/react/20/solid'
import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlaylistContext } from '../context/PlaylistContext'

interface playlistCardProps {
    album : string
    listOfVideoId: number[]
}
export default function PlaylistCard({album,listOfVideoId}:playlistCardProps) {
    const Navigate = useNavigate()
    const {removePlaylist}= usePlaylistContext()
  return (
    <div className='p-2 mt-2 border border-slate-400 rounded-sm max-w-[210px] h-[170px]'>
            <div className='flex rounded-sm'>
                <div className='min-w-[40%] '></div>
                <div className='min-w-[60%] h-[130px] bg-gray-400 flex flex-col items-center justify-center'>
                    {album} 
                    {listOfVideoId.length} <PlayIcon width={30}/>
                </div>
            </div>
            <div className='flex justify-center gap-1 mt-1'>
                <button className='text-[10px] font-semibold bg-green-500 px-2 py-1 rounded' onClick={()=>Navigate(`/playlist/${album}`)}>View Playlist</button>
                <button className='text-[10px] font-semibold bg-red-600 px-2 py-1 rounded flex items-center gap-1' onClick={()=>removePlaylist(album)}>Remove <TrashIcon width={10}/></button>
            </div>
        </div>
  )
}
