import React from 'react'
import { useQueries } from 'react-query'
import { usePlaylistContext } from '../context/PlaylistContext'
import { getVideoById } from '../api/getVideos'
import { VideoCard } from '../components'
import { LikedBtn } from '../components/btn/LikedBtn'

export default function Watchlater() {
  const {watchlater, removeVideosFromWathclater} = usePlaylistContext()
  const watchLaterArr = useQueries(watchlater.map((videoId)=> {
    return {
        queryKey: ["video", videoId],
        queryFn: () => getVideoById(videoId)
    }
}))
  return (
    <div className='bg-white h-full w-[800px] pt-4 pl-9'>
        <div>Watchlater Videos : {watchLaterArr.length} video</div>
        <div className='flex flex-wrap gap-1'>

        {watchLaterArr.map((i)=>{
            let item = i.data?.data
            return (
                <div key={item?.id}>
                    <VideoCard {...item}/>
                    <div className='flex justify-center'>
                    <LikedBtn btnName='remove Videos From Watchlater' func={()=>removeVideosFromWathclater(item?.id)}/>
                    </div>
                </div>
            )
        })}
        </div>
    </div>  )
}
