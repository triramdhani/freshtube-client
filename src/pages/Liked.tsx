import React from 'react'
import { useQueries, useQuery } from 'react-query'
import { Loading, VideoCard } from '../components'
import { LikedBtn } from '../components/btn/LikedBtn'
import { usePlaylistContext } from '../context/PlaylistContext'
import videoData from '../data/videoData.json'
import { getVideo, getVideoById } from '../api/getVideos'
import { VideoCardProps } from '../components/VideoCard'

export default function Liked() {
    const {likedVideos, removeVideosFromLiked} = usePlaylistContext()
    const likedVideosArr = useQueries(likedVideos.map((videoId)=> {
        return {
            queryKey: ["video", videoId],
            queryFn: () => getVideoById(videoId)
        }
    }))
    

    return (
    <div className='h-full pt-2 pl-12 min-w-[800px] bg-white rounded-md'>
        <h1 className='text-xl font-semibold my-2'>Liked : {likedVideosArr.length} Videos</h1>

        <div className='flex flex-wrap gap-1'>

        {likedVideosArr.map((i)=>{
            let item = i.data?.data
            return (
                <div key={item?.id}>
                    <VideoCard {...item}/>
                    <div className='flex justify-center my-1'>
                    <LikedBtn btnName='removeVideosFromLiked' func={()=>removeVideosFromLiked(item?.id)}/>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}
