import React, {useRef, useState} from 'react';

const VideoPlayer = ({ src, ...props }) => {
  const video =  useRef();

  const toggleFullscreen = () => {
    const [screen, setScreen] = useState(false);

    if (screen = false) {
      video.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        setScreen = true;
      });
    } else {
      document.exitFullscreen();
      setScreen = false;
    }
  }


  return (
    <div>
      <video autoPlay src={src} ref={video} {...props} style={{ pointerEvents: 'none' }} />
      <div className='player-buttons'>
        <button className='btn'>
          <i className='fas fa-play'> </i>
        </button>
        <i class='fas fa-volume-down'> </i>
        <input className='slider-vol' type='range' min='0' max='1' step='.01' />
        <i class='fas fa-volume-up'> </i>
        00:00
        <input className='slider-playback' type='range' />
        00:00
        <button className='btn' onClick={toggleFullscreen}>
          <i class='fas fa-expand'> </i>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
