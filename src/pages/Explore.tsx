import React, { ReactNode, Suspense } from "react"
import { Loading, VideoCard } from "../components"
import videoData from '../data/videoData.json'
import { useQuery } from "react-query"
import { getVideo } from "../api/getVideos"
import { VideoCardProps } from "../components/VideoCard"


const buttonStyle = 'bg-green-300 pl-4 pr-4 pt-1 pb-1 rounded-md cursor-pointer'

export default function Explore() {
  const filterVideosList = ()=>{
    return null
  }
  const {data, isLoading, error , isError, isSuccess} = useQuery("videos",  getVideo)

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
    <>
      <div className={"bg-white "}>
        <div className="flex p-2 gap-2 justify-center">
          <div className={buttonStyle} onClick={filterVideosList}>All</div>
          <div className={buttonStyle} onClick={filterVideosList}>Breakfast</div>
          <div className={buttonStyle} onClick={filterVideosList}>Lunch</div>
          <div className={buttonStyle} onClick={filterVideosList}>Dinner</div>
          <div className={buttonStyle} onClick={filterVideosList}>Snack</div>
        </div>
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
    </>
  )
}
