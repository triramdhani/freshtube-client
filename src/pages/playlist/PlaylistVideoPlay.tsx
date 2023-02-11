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
import { ArrowPathRoundedSquareIcon, LockClosedIcon } from '@heroicons/react/20/solid'

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
    let user: string = "Tri Ramdhani"

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
    console.log(listOfVideoPlaylist)
      if(listOfVideoPlaylist[currentPlayIndex].isLoading){
        return <Loading/>
      } 
  return (
    <Suspense fallback={<Loading/>}>
    <div className='flex  bg-white rounded-md'>
      {/* rght side */}
      <div className=' h-full px-8 pt-4 w-[70%]'>
        <div className='h-[280px] w-[500px]  bg-slate-600 '>
          <iframe width="500" height="280" src={datas.url} title={datas.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className=' w-[500px] my-1 p-2'>
          <p className='text-lg font-semibold leading-5'>{datas.title}</p>
        </div>
      <div className='flex justify-between '>
        <div className='flex items-center'>
          <img src={`/${datas.avatar}`} alt="" className='w-[50px] h-[50px] mr-2'/>
          <div>
            <p className='text-[.9em] font-semibold'>{datas.author}</p>
            <div className='text-[11px] flex justify-around'>
              <span>Duration : {datas.duration} Min </span>
              <span>views: {ToKViews(datas.views)}</span>
            </div>
          </div>
        </div>
        <div>
          {getVideosFromLiked(datas.id) ?
          <LikedBtn btnName='Remove from Liked' func={()=>removeVideosFromLiked(datas.id)}/>
          :
          <LikedBtn btnName='Add to Liked' func={()=>setVideosToLiked(datas.id)}/>
          }
          <button className='bg-green-600 flex items-center  text-[10px] px-4 mt-1 text-slate-800 py-[2px] rounded' >
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
      <div className='w-[30%] border mr-2 mt-3 border-slate-300 rounded-xl h-[370px] relative'>
        <div className='px-3 py-1 leading-5 sticky'>
          <p className='font-bold my-1'>{playlistName}</p> 
          <div className='flex gap-2 '>
            <p className='flex bg-slate-100 text-slate-800 text-[12px] font-semibold px-[2px] py-[1px] '><LockClosedIcon width={15}/> Pribadi</p>
            <span className='text-slate-700 text-[12px] space-x-0 font-thin'>{user}</span>
            <span className='text-slate-700 text-[12px] space-x-0 font-thin'>{`- ${currentPlayIndex + 1 }/${listVideo.length}`}</span>
          </div>
          <div>
            <div className='p-1 hover:bg-slate-100 w-min rounded-full'><ArrowPathRoundedSquareIcon width={20} className=" text-slate-700 "/></div>
            {/* <span>Acak</span> */}
          </div>
        </div>

        <div className='p-1 w-min overflow-y-scroll'>
          {listOfVideoPlaylist.map(item=>{
            let datas = item?.data?.data
            return (
              <div key={datas.id} className="py-1">
                <div className={`flex w-[250px] h-[55px]`}>
                  <div className='relative w-100px] mr-2 flex items-center'>
                    <img src={`/${datas.img}`} alt="" className='w-[85px] h-[40px] rounded-sm'/>
                    <span className='absolute bottom-2 right-0 bg-black text-white text-[10px] px-1 rounded font-semibold'>{datas.duration}.00</span>
                  </div>
                  <div className='w-[130px] py-1 overflow-hidden'>
                    <p className='text-[10px] font-semibold leading-3 h-[60%] overflow-hidden'>{datas.title}</p>
                    <p className='text-[10px]'>{datas.author}</p>
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
 