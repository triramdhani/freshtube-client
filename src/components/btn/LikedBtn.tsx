import React, { ReactNode } from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'

interface LikedBtnProps {
    btnName: string
    func: ()=>void
}
export function LikedBtn({btnName , func}:LikedBtnProps) {
  return (
    <button className='bg-blue-600 flex items-center text-[10px] px-4 text-white py-[2px] rounded' onClick={func}>
        <HandThumbUpIcon className='text-white' width={15}/>
        <span className='ml-1'>{btnName}</span>
    </button>
  )
}
