import React from 'react'
import { useQueries } from 'react-query'
import { usePlaylistContext } from '../context/PlaylistContext'
import { getVideoById } from '../api/getVideos'
import { VideoCard } from '../components'
import { LikedBtn } from '../components/btn/LikedBtn'
import { TrashIcon } from '@heroicons/react/20/solid'
import { toast } from 'react-toastify'

export default function Watchlater() {
  const {watchlater, removeVideosFromWathclater} = usePlaylistContext()
  const watchLaterArr = useQueries(watchlater.map((videoId)=> {
    return {
        queryKey: ["video", videoId],
        queryFn: () => getVideoById(videoId)
        }
    }))
    const handleRemoveWatchlater =(id:number)=> {
        removeVideosFromWathclater(id)
        toast.success("removed")
    }
  return (
    <div className='bg-white h-full w-[800px] pt-4 pl-9 rounded-md'>
        <h1 className='text-xl font-semibold my-2'>Watchlater Videos : {watchLaterArr.length} video</h1>
        <div className='flex flex-wrap gap-1'>

        {watchLaterArr.map((i)=>{
            let item = i.data?.data
            return (
                <div key={item?.id}>
                    <VideoCard {...item}/>
                    <div className='flex justify-center my-1'>
                        <button className=' bg-red-700 px-3 items-center gap-1 flex rounded text-white text-[12px]' onClick={()=>handleRemoveWatchlater(item?.id)}><TrashIcon width={10}/> Remove From WathcLater</button>
                    </div>
                </div>
            )
        })}
        </div>
    </div>  )
}
