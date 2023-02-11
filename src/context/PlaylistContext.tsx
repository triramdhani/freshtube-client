import React, { createContext, ReactNode, useContext, useState } from 'react'

interface PlaylistContextType {
    children : ReactNode
}
interface PlaylistContext {
    getVideosFromWatchlater: (id:number) => boolean
    setVideosToWatchlater: (id:number) => void
    removeVideosFromWathclater: (id:number)=> void
    setVideosToLiked: (id:number)=> void
    removeVideosFromLiked: (id:number)=>void
    getVideosFromLiked: (id:number)=>boolean
    createPlaylist: (album:string) => void
    addToPlaylist: (album:string, id:number) => void
    removeFromPlaylist: (album:string, id:number) => void
    removePlaylist: (album:string)=> void
    watchlater: number[]
    likedVideos: number[]
    playlist: playlistStateType[]
}

interface playlistStateType {
    album: string 
    listOfVideoId: number[]
}

const PlaylistContext = createContext({} as PlaylistContext)

export const usePlaylistContext = () => {
    return useContext(PlaylistContext)
}
export const PlaylistContextProvider = ({children}:PlaylistContextType) => {
    const [watchlater, setWatchlater] = useState<number[]>([])
    const [likedVideos, setLikedVideos] = useState<number[]>([1])
    const [playlist, setPlaylist] =  useState<playlistStateType[]>([
        
    ])

    function getVideosFromWatchlater(id:number){
        const alreadyAdded = watchlater.find((item)=>item === id)
        if(alreadyAdded){
            return true
        }else {return false}
    }
    function setVideosToWatchlater(id:number){
        const allreadyAdded = watchlater.find((item)=> item === id)
        !allreadyAdded ? setWatchlater([...watchlater, id]): setWatchlater([...watchlater])
    }
    function removeVideosFromWathclater(id:number){
        const newWatchlater = watchlater.filter((item)=> item !== id)
        setWatchlater([...newWatchlater])
    }
    function setVideosToLiked(id:number){
        const allreadyLiked = likedVideos.find((item)=> item === id)
        !allreadyLiked && setLikedVideos([...likedVideos, id])
    }
    function removeVideosFromLiked(id:number){
        const newLikedVideos = likedVideos.filter((item)=> item !== id)
        setLikedVideos([...newLikedVideos])
    }
    function getVideosFromLiked(id:number){
        const alreadyAdded = likedVideos.find((item)=>item === id)
        if(alreadyAdded){
            return true
        }else {return false}
    }


    function createPlaylist(album:string){
        const insertNew:playlistStateType = {album: album , listOfVideoId: []}
        const updatePlaylist = [...playlist , insertNew]
        setPlaylist(updatePlaylist)
    }
    function addToPlaylist(album:string, id:number){        
        setPlaylist(playlist.map((item)=>{
            const newListOfVideoId = item.listOfVideoId
            item.album === album && newListOfVideoId.push(id) 
            let updatedPlaylist:playlistStateType = {
                album: album , listOfVideoId: newListOfVideoId
            }
            return item.album === album ? updatedPlaylist : item
        }))
    }
    function removeFromPlaylist(album:string, id:number){
        setPlaylist(playlist.map(item => {
            const newListOfVideoId: number[] = item.listOfVideoId.filter(idItem=> idItem !== id)
            const updatedPlaylist:playlistStateType = {
                album: album , listOfVideoId : newListOfVideoId
            } 

            return item.album === album ? updatedPlaylist : item
        }))
    }
    function removePlaylist(album:string){
        setPlaylist(playlist.filter(item=>item.album !== album))
    }


  return (
    <PlaylistContext.Provider value={{
        getVideosFromWatchlater, 
        setVideosToWatchlater,
        watchlater,
        removeVideosFromWathclater,
        setVideosToLiked,
        removeVideosFromLiked,
        getVideosFromLiked,
        likedVideos,
        playlist,
        addToPlaylist,
        removeFromPlaylist,
        createPlaylist,
        removePlaylist
    }}>{children}</PlaylistContext.Provider>

  )
}
