import { TrashIcon } from '@heroicons/react/20/solid'
import { PlayIcon } from '@heroicons/react/24/solid'
import { usePlaylistContext } from '../context/PlaylistContext'
import React from 'react'
import PlaylistCard from '../components/PlaylistCard'

export default function Playlist() {
    const {playlist} = usePlaylistContext()
    const arrOfPlaylist = playlist
    console.log(arrOfPlaylist)
  return (
    <div className='bg-white h-full w-[800px] pt-4 pl-9 rounded-md'>
        <h1 className='text-xl font-semibold my-2'>Playlist Videos : {arrOfPlaylist.length}</h1>
        {/* <div>{arrOfPlaylist}</div> */}

        <div className='grid grid-cols-3'>
        {arrOfPlaylist.map(item=>(
            <div key={item.album}>
                <PlaylistCard {...item} />
            </div>
        ))}
        </div>
    </div>  )  
}
