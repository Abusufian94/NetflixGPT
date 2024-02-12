import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold text-white  ">{title}</h1>
        <p className="p-6 text-lg w-1/4 text-white ">{overview}</p>
        <div>
            <button className="bg-white text-black p-4 px-12  text-xl bg-opacity-80 rounded-lg mx-2 hover:bg-opacity-50"> ▶️ Play</button>
        <button className="bg-white text-black p-4 px-12  text-xl bg-opacity-80 rounded-lg mx-2">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle