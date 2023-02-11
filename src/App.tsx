import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes,  } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Header, Sidebar } from "./components"
import { PlaylistContextProvider } from "./context/PlaylistContext"


import { Explore, History, Home, Liked, Login, NotFound, Playlist, Signup, Watchlater } from "./pages"
import PlaylistVideoPlay from "./pages/playlist/PlaylistVideoPlay"
import {VideoPlay} from "./pages/singleVideo"
import Layout from "./Template/Layout"
import ProtectedLayout from "./Template/ProtectedLayout"
import 'react-toastify/dist/ReactToastify.css';


function FreshTubeApp() {
  const user:any = undefined

  return (
    <>
      <ToastContainer position="bottom-right"/>
      <PlaylistContextProvider>
      <BrowserRouter>
      {/* <Sidebar/> */}
        <Routes > 
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="explore" element={<Explore/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="/singlevideo/:videoid" element={<VideoPlay/>}/>
            <Route path="/playlist/:playlistName" element={<PlaylistVideoPlay/>}/>
          </Route>
          <Route element={<ProtectedLayout/>}>
            <Route path="playlist" element={<Playlist/>}/>
            <Route path="watchlater" element={<Watchlater/>}/>
            <Route path="history" element={<History/>}/>
            <Route path="liked" element={<Liked/>}/>

          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      </PlaylistContextProvider>
    </>
  )
}

export default FreshTubeApp
