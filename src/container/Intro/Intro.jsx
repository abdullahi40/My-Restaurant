import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef(null);

  const handleVideo = () => {
    setPlayVideo(prevPlayVideo => !prevPlayVideo); // Toggle playVideo state

    if (!playVideo) {
      vidRef.current.play(); // Play the video if it's not playing
    } else {
      vidRef.current.pause(); // Pause the video if it's playing
    }
  };

  return (
    <div className='app__video'> {/* Corrected className */}
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo
            ? <BsPauseFill color='#fff' fontSize={30} />
            : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
