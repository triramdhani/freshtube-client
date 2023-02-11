import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AddToPlaylistModal, DotsBtn} from '../components/modal/index'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { ToKViews } from '../utils/ToKViews'

export interface VideoCardProps {
  id : number
  img : string
  title: string
  avatar: string
  author: string
  views: number
  duration: number
  url: string
}

export default function VideoCard({id, img, title, avatar, author, views, duration, url}:VideoCardProps) {
  const [dotsBtnModal, setDotsBTnModal] = useState<boolean >(false)
  const [modalPlaylist, setOpenModalPlaylist] = useState<boolean >(false)
  const openModalPlaylistFunction = ():void => {
    setDotsBTnModal(false)
    setOpenModalPlaylist(true)
  }
  const Navigate = useNavigate()

  return (
    <div className=' w-[250px] p-2 border border-slate-400 rounded-md'>
        <img src={`/${img}`} alt={title} onClick={()=>Navigate(`/singlevideo/${id}`)} />

        <div className='flex gap-1 mt-1'>
          <div className='flex-none '>
            <img src={`/${avatar}`} className='h-[40px] w-[40px] rounded-full'/>
          </div>
          <div className='flex-1'>
            <p className='h-[20px] text-[13px] font-bold text-slate-700 overflow-clip'>{title}</p>
            <div className='flex justify-around text-[9px]'>
              <span className='bg-slate-300 py-[1 px] px-[1px] rounded-sm text-slate-800'>{author}</span>
              <span className='bg-slate-300 py-[1 px] px-[1px] rounded-sm text-slate-800'>{ToKViews(views)}</span>
              <span className='bg-slate-300 py-[1 px] px-[1px] rounded-sm text-slate-800'>{duration} Min</span>
            </div>
          </div>
          <div className='relative'>
              <div className='absolute right-[80%] bottom-[50%]'>
                {dotsBtnModal? 
                <DotsBtn id={id} openModalPlaylistFunction={openModalPlaylistFunction}/> 
                : null
                }
              </div>
              <div 
              onClick={()=>setDotsBTnModal((prev)=> !prev)}>
                <EllipsisVerticalIcon width={25}/>
              </div>
              <div className='absolute right-[30%] bottom-[50%]'>
                {modalPlaylist ? 
                  <AddToPlaylistModal id={id} setOpenModalPlaylist={setOpenModalPlaylist}/> 
                  : null
                }

              </div>
          </div>
        </div>
    </div>
  )
}
