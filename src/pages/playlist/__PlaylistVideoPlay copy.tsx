import React from 'react'
import { useParams } from 'react-router-dom'
import { usePlaylistContext } from '../../context/PlaylistContext'

export default function PlaylistVideoPlay() {
  const {playlistName} = useParams()
  const {playlist} = usePlaylistContext()
  const currentPlaylist = playlist.find(item=>item.album === playlistName) 
  const listVideo:number[] | undefined= currentPlaylist?.listOfVideoId 
  return (
    <div>Fetch all videos id from listVideo</div>
  )
}
