import React from 'react';

const VideoPlayer = ({ src, ...props }) => {
  return (
    <div>
      <video autoPlay src={src} {...props} style={{ pointerEvents: 'none' }} />
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
        <button className='btn'>
          <i class='fas fa-expand'> </i>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
