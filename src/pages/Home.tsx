import React, { ReactNode, Suspense } from "react"
import { useQuery } from "react-query"
import { Loading, VideoCard } from "../components"
import videoData from '../data/videoData.json'
import axios from 'axios'
import { getVideo } from "../api/getVideos"
import { VideoCardProps } from "../components/VideoCard"
import { useNavigate } from "react-router-dom"



export default function Home() {
  const {data, isLoading, error , isError, isSuccess} = useQuery("videos",  getVideo)
  const Navigate = useNavigate()

  if(isLoading){
    return <Loading/>
  }
  if(isError){
    return <div>error.message</div>
  }
  if(isSuccess){
    console.log(data)
  }

  return (
    <div>
      <div className={"bg-white rounded-md"}>
        <div className="flex justify-center p-3 relative">
          <img src="/homeImage.png" alt="" className="h-[300px] w-[700px] object-fit rounded-md" />
          <div className="absolute bg-yellow-400 text-[1rem] px-20 py-1 rounded-sm text-slate-900 top-[80%] cursor-pointer" onClick={()=> Navigate('/explore')}>Watch Now</div>
        </div>
       {/* {data?.data} */}
        <Suspense fallback={<Loading/>}>
          <div className="grid grid-cols-3 ">
            {data?.data.map((item:VideoCardProps) => {
              return (
                <div className=' m-3' key={item.id}>
                  <VideoCard {...item}/>
                </div>
              )
            })}
          </div>
        </Suspense>
      </div>
    </div>
  )
}
