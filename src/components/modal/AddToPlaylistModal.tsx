import { XMarkIcon } from '@heroicons/react/20/solid'
import { PlusSmallIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { usePlaylistContext } from '../../context/PlaylistContext'

interface AddToPlaylistModalProps {
    id: number
    setOpenModalPlaylist: React.Dispatch<React.SetStateAction<boolean>>
}
// interface handleBtnProps {
//     e: React.ChangeEvent<HTMLInputElement>
// }

export default function AddToPlaylistModal({id, setOpenModalPlaylist, }:AddToPlaylistModalProps){
    const [AddToPlaylistToggle, setAddToPlaylistToggle] = useState<boolean>(false)
    const [inputNewPlaylist, setInputNewPlaylist] = useState<string>('')
    const {playlist, addToPlaylist, removeFromPlaylist , createPlaylist} = usePlaylistContext()
    const arrOfPlaylist = playlist

    const  handleRadioBtn = (event:React.ChangeEvent<HTMLInputElement>): void=>{
        const checked:boolean = event.target.checked
        const playlistName: string = event.target.name
        checked === true ? addToPlaylist(playlistName, id) : removeFromPlaylist(playlistName, id)
        console.log(arrOfPlaylist, checked)
    }

    return (
    <div className='bg-slate-300 p-1 w-[150px] '>
        <div className='flex justify-between'> 
            <p className='text-[11px] mr-1 font-semibold'>Save to Playlist</p>
            <div onClick={()=>setOpenModalPlaylist(false)}>
              <XMarkIcon width={15}/>
            </div>
        </div>
       
        {arrOfPlaylist.map(item=>{
            const allready = item.listOfVideoId.find(idVid=> idVid === id)
            let isChecked:boolean | undefined = allready ? true : undefined
            return (
            <div className='flex items-center text-[12px] gap-1' key={item.album}>
                <input type="checkbox" id={item.album} checked={isChecked} name={item.album} onChange={handleRadioBtn}/>  <label>{item.album}</label>
            </div>
            )
        })}


        <div onClick={()=>setAddToPlaylistToggle(true)} className='flex mb-1 mt-2 cursor-pointer'>
            <span><PlusSmallIcon width={15}/></span><span className='text-[10px] ml-1 font-semibold'>Create New Playlist</span>
        </div>
        {AddToPlaylistToggle ? 
            <div>
                <input type="text" placeholder='Playlist Name' className='w-[130px] h-[18px] outline-none rounded-sm' onChange={(e)=>setInputNewPlaylist(e.target.value)}/>
                <button onClick={()=>setAddToPlaylistToggle(false)} className="bg-blue-700 text-[12px] text-white px-1 py-[1.5px] rounded-sm mr-1">Cancel</button>
                <button className="bg-blue-700 text-[12px] text-white px-1 py-[1.5px] rounded-sm" onClick={()=>createPlaylist(inputNewPlaylist)}>Create</button>
            </div>
            : null
        }
    </div>
  )
}
