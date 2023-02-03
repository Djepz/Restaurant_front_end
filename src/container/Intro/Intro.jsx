import React, { useRef, useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playvideo, setPlayVideo] = useState(false)
  const videoRef = useRef()
  
  const handleVideo = () =>{setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playvideo){
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video src={meal} type='video/mp4' ref={videoRef} loop controls={false} muted/>
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
        {playvideo ? (
          <BsPauseFill className='intro__img-icon' color='#fff' fontSize={30} />
        ) : (
          <BsFillPlayFill className='intro__img-icon' color='#fff' fontSize={30}/>
        )}
        </div>
      </div>
    </div>
   
  );
}

export default Intro;
