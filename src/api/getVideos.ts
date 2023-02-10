import axios from 'axios'
import videoData from '../data/videoData.json'

export const getVideo = () => {
    // return videoData
    return axios.get("https://my-json-server.typicode.com/triramdhani/freshtubeDb/video")
}

export const getVideoById = (id:number | undefined)=>{
    return axios.get(`https://my-json-server.typicode.com/triramdhani/freshtubeDb/video/${id}`)
}
