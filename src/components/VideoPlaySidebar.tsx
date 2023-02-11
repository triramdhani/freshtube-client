import React, { Suspense, useCallback, useEffect, useMemo } from 'react'
import { getRandomVideosId } from '../utils/getRadndomVideosId'
import {Loading, VideoCard} from './index'
import videoData from '../data/videoData.json'
import { useQueries } from 'react-query'
import { getVideoById } from '../api/getVideos'
import { useParams } from 'react-router-dom'


export function VideoPlaySidebar() {
    const {videoId} = useParams()
    const cache = useMemo(()=>{
        //type get random number function here
        return [1,2,3]
    }, [videoId])

    const recomendationArr = useQueries(cache.map((videoId)=> {
        return {
            queryKey: ["video", videoId],
            queryFn: ()=> getVideoById(videoId)
        }
    }))
    // console.log(cache, recomendationArr)
    if (recomendationArr[0].isLoading ) {
        return <Loading/>
    }
    return (
    <Suspense fallback={<Loading/>}>
        <div className='flex flex-col gap-1'>
            {recomendationArr.map((i, index)=>{
                let item = i?.data?.data
                return (
                    <div className=' mt-2 mr-2 ' key={index}>
                    <VideoCard {...item}/>
                    </div>
                )
            })}
        </div>
    </Suspense>
  )
}
