import {  HandThumbUpIcon } from '@heroicons/react/24/solid'
import {  ClockIcon } from '@heroicons/react/24/outline'
import React, { Suspense } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { usePlaylistContext } from '../../context/PlaylistContext'
import { LikedBtn } from '../../components/btn/LikedBtn'
import { VideoPlaySidebar } from '../../components/VideoPlaySidebar'
import { useQuery } from 'react-query'
import { getVideoById } from '../../api/getVideos'
import { ToKViews } from '../../utils/ToKViews'
import { Loading } from '../../components'

export default function VideoPlay() {
    const {videoid} = useParams<string>()
    const videoId = Number(videoid)
    const {data,isLoading} = useQuery(["videos", videoid], () => getVideoById(videoId))
    console.log(data)
    const {getVideosFromWatchlater,
       removeVideosFromWathclater,
        setVideosToWatchlater,
        setVideosToLiked,
        removeVideosFromLiked,
        getVideosFromLiked,
        likedVideos
      } = usePlaylistContext()
      if(isLoading){
        return <Loading/>
      }
  return (
    <Suspense fallback={<Loading/>}>
    <div className='flex bg-white'>
    <div className=' h-full px-8 pt-4'>
      <div className='h-[300px] w-[500px]  bg-slate-600 '>
      <iframe width="500" height="300" src={data?.data.url} title={data?.data.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className=' w-[500px] p-2'>
        <p>{data?.data.title}</p>
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <img src={`/${data?.data.avatar}`} alt="" className='w-[50px] h-[50px]'/>
          <div>
            <p>{data?.data.author}</p>
            <div>
              <span>Duration : {data?.data.duration} Min </span>
              <span>views: {ToKViews(data?.data.views)}</span>
            </div>
          </div>
        </div>
        <div className='flex w-[250px] h-[35px] '>
        {getVideosFromLiked(videoId) ?
         <LikedBtn btnName='Remove from Liked' func={()=>removeVideosFromLiked(videoId)}/>
         :
         <LikedBtn btnName='Add to Liked' func={()=>setVideosToLiked(videoId)}/>
        }
        <button className='bg-green-600 flex items-center text-[10px] px-4 text-slate-800 py-[2px] rounded' >
          <ClockIcon width={15}/>
          {getVideosFromWatchlater(videoId)?
            <span className='ml-1' onClick={()=>removeVideosFromWathclater(videoId)}>Remove from Wathclater</span>
            :
            <span className='ml-1' onClick={()=>setVideosToWatchlater(videoId)}>Add To Wathclater</span>
          }
        </button>
      </div>
      </div>
      
    </div>
      <VideoPlaySidebar/>
    </div>
    </Suspense>
  )
}
 