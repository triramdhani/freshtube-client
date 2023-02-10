import {  HandThumbUpIcon } from '@heroicons/react/24/solid'
import {  ClockIcon } from '@heroicons/react/24/outline'
import React, { Suspense, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { usePlaylistContext } from '../../context/PlaylistContext'
import { LikedBtn } from '../../components/btn/LikedBtn'
import { VideoPlaySidebar } from '../../components/VideoPlaySidebar'
import { useQueries, useQuery } from 'react-query'
import { getVideoById } from '../../api/getVideos'
import { ToKViews } from '../../utils/ToKViews'
import { Loading } from '../../components'

interface playlistStateType {
  album: string 
  listOfVideoId: number[]
}

export default function VideoPlay() {
  const {playlistName} = useParams()
  const {getVideosFromWatchlater,
     removeVideosFromWathclater,
      setVideosToWatchlater,
      setVideosToLiked,
      removeVideosFromLiked,
      getVideosFromLiked,
      likedVideos,
      playlist
    } = usePlaylistContext()

  const currentPlaylist:playlistStateType[] = playlist.filter(item=>{return item.album === playlistName && item.listOfVideoId}) 
  const listVideo:number[] = currentPlaylist[0].listOfVideoId

    const [currentPlayIndex, setCurrentPlayIndex] = useState<number>(0)
    const listOfVideoPlaylist = useQueries(listVideo.map((videoId)=> {
        return {
            queryKey: ["video", videoId],
            queryFn: () => getVideoById(videoId)
        }
    }))
    const currentPlayVideoData = listOfVideoPlaylist[currentPlayIndex]
    const status = currentPlayVideoData.isLoading
    const datas = currentPlayVideoData.data?.data
    // console.log(currentPlayVideoData)
      if(status){
        return <Loading/>
      }
  return (
    <Suspense fallback={<Loading/>}>
    <div className='flex bg-white'>
    <div className=' h-full px-8 pt-4'>
      <div className='h-[300px] w-[500px]  bg-slate-600 '>
      <iframe width="500" height="300" src={datas.url} title={datas.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className=' w-[500px] p-2'>
        <p>{datas.title}</p>
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <img src={`/${datas.avatar}`} alt="" className='w-[50px] h-[50px]'/>
          <div>
            <p>{datas.author}</p>
            <div>
              <span>Duration : {datas.duration} Min </span>
              <span>views: {ToKViews(datas.views)}</span>
            </div>
          </div>
        </div>
      <div className='flex w-[250px] h-[35px] '>
        {getVideosFromLiked(datas.id) ?
         <LikedBtn btnName='Remove from Liked' func={()=>removeVideosFromLiked(datas.id)}/>
         :
         <LikedBtn btnName='Add to Liked' func={()=>setVideosToLiked(datas.id)}/>
        }
        <button className='bg-green-600 flex items-center text-[10px] px-4 text-slate-800 py-[2px] rounded' >
          <ClockIcon width={15}/>
          {getVideosFromWatchlater(datas.id)?
            <span className='ml-1' onClick={()=>removeVideosFromWathclater(datas.id)}>Remove from Wathclater</span>
            :
            <span className='ml-1' onClick={()=>setVideosToWatchlater(datas.id)}>Add To Wathclater</span>
          }
        </button>
        </div>
      </div>
      
    </div>
      {/* <VideoPlaySidebar/> */}
      <div>
        <p>{playlistName}</p> 
        <div>
          <p>Pribadi</p>
          <span>nama user</span>
          <span>{"1/3"}</span>
        </div>
        <div>
          <span>Repeat</span>
          <span>Acak</span>
        </div>
        <div className='p-1'>
          {listOfVideoPlaylist.map(item=>{
            let datas = item?.data?.data
            return (
              <div key={datas.id}>
                <div className={`flex w-[250px] h-[55px]`}>
                  <div className='relative w-100px] mr-2'>
                    <img src={`/${datas.img}`} alt="" className='w-[100px] '/>
                    <span className='absolute bottom-0 right-0'>{datas.duration}.00</span>
                  </div>
                  <div className='w-[130px] overflow-hidden'>
                    <p className='text-[11px] h-[60%] overflow-hidden'>{datas.title}</p>
                    <p className='text-[12px]'>{datas.author}</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
    </Suspense>
  )
}
 