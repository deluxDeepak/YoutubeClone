import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recomended from '../../Components/Recomended/Recomended'
import { useParams } from 'react-router'

const Video = () => {

  const {videoId,CategoryId}=useParams();
  return (
    <div className='play-container'>
      {/* Make a component then add the componets  */}
      <PlayVideo videoId={videoId} CategoryId={CategoryId}></PlayVideo>
      <Recomended CategoryId={CategoryId}></Recomended>
    </div>
  )
}

export default Video





