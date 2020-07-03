import React, { useRef, useState } from 'react';
import '../Styles.css';

const VideoPlayer = ({ src, ...props }) => {
  const video = useRef();
  const playBtn = useRef();
  const muteBtn = useRef();
  const inputVolume = useRef();
  const inputProgress = useRef();
  const duration = useRef();
  const elapsed = useRef();
  const [screen, setScreen] = useState(false);
  const [playPause, setPlayPause] = useState(false);
  const [playPauseButton, setPlayPauseButton] = useState(
    <i className='text-light fas fa-play'> </i>
  );
  const [fullscreenButton, setFullscreenButton] = useState(
    <i className='text-light fas fa-expand'> </i>
  );

  const togglePlayPause = () => {
    if (playPause === false) {
      video.current.play().catch(err => {
        alert(`Error attempting to start video: ${err.message} (${err.name})`);
      });
      setPlayPause(true);
      setPlayPauseButton(<i className='text-light fas fa-pause'> </i>);
    } else {
      video.current.pause();
      setPlayPause(false);
      setPlayPauseButton(<i className='text-light fas fa-play'> </i>);
    }
  };

  const reload = () => {
    video.current.load();
  };

  const handleMute = () => {
    if (video.current.muted === false) {
      video.current.muted = true;
      inputVolume.current.value = 0;
      muteBtn.current.firstChild.classList.remove('fa-volume-up');
      muteBtn.current.firstChild.classList.add('fa-volume-mute');
    } else {
      video.current.muted = false;
      inputVolume.current.value = 0.5;
      muteBtn.current.firstChild.classList.remove('fa-volume-mute');
      muteBtn.current.firstChild.classList.add('fa-volume-up');
    }
  };

  const handleVolume = () => {
    video.current.volume = inputVolume.current.value;
  };

  const setDuration = () => {
    const minutesDuration = Math.floor(video.current.duration / 60);
    const secondsDuration = Math.floor(
      video.current.duration - minutesDuration * 60
    );
    let minuteDuration;
    let secondDuration;
    if (minutesDuration < 10) {
      minuteDuration = '0' + minutesDuration;
    } else {
      minuteDuration = minutesDuration;
    }

    if (secondsDuration < 10) {
      secondDuration = '0' + secondsDuration;
    } else {
      secondDuration = secondsDuration;
    }
    let vidDuration = `${minuteDuration}:${secondDuration}`;
    duration.current.innerHTML = vidDuration;
    inputProgress.current.max = video.current.duration;
    playBtn.current.firstChild.classList.remove('fa-pause');
    playBtn.current.firstChild.classList.add('fa-play');
  };
  const setProgress = () => {
    let minutes = Math.floor(video.current.currentTime / 60);
    let seconds = Math.floor(video.current.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
      minuteValue = '0' + minutes;
    } else {
      minuteValue = minutes;
    }

    if (seconds < 10) {
      secondValue = '0' + seconds;
    } else {
      secondValue = seconds;
    }

    let mediaTime = `${minuteValue}:${secondValue}`;
    elapsed.current.innerHTML = mediaTime;
    inputProgress.current.value = video.current.currentTime;
  };

  const skip = () => {
    video.current.currentTime = inputProgress.current.value;
  };

  const toggleFullscreen = () => {
    if (screen === false) {
      video.current.requestFullscreen().catch(err => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
      /*setScreen(true);
      setFullscreenButton(<i className='text-light fas fa-compress'> </i>);*/
    } /*else {
      document.exitFullscreen();
      setScreen(false);
      setFullscreenButton(<i className='text-light fas fa-expand'> </i>);
    }*/
  };

  const tooglePiP = () => {
    video.current.requestPictureInPicture();
  };

  return (
    <div className='video-container'>
      <video
        onLoadedData={setDuration}
        onTimeUpdate={setProgress}
        src={src}
        ref={video}
        {...props}
        style={{ pointerEvents: 'none' }}
      ></video>
      <div className='video-controls hidden'>
        <div className='video-progress'>
          <input
            className='volume'
            type='range'
            ref={inputProgress}
            defaultValue='0'
            min='0.0'
            onChange={skip}
          />
          <div className='seek-tooltip'>00:00</div>
        </div>

        <div className='bottom-controls'>
          <div className='left-controls'>
            <button ref={playBtn} onClick={togglePlayPause}>
              {playPauseButton}
            </button>
            <button onClick={reload}>
              <i className='fas fa-redo text-light'></i>
            </button>

            <div className='volume-controls'>
              <button ref={muteBtn} onClick={handleMute}>
                <i className='fas fa-volume-up text-light'></i>
              </button>

              <input
                className='volume'
                type='range'
                ref={inputVolume}
                defaultValue='.5'
                onChange={handleVolume}
                min='0.0'
                max='1.0'
                step='.01'
              />
            </div>

            <div className='time'>
              <time ref={elapsed}>00:00</time>
              <span> / </span>
              <time ref={duration}></time>
            </div>
          </div>

          <div className='right-controls'>
            <button onClick={tooglePiP}>
              <i className='fas fa-sign-out-alt text-light'></i>
            </button>
            <button onClick={toggleFullscreen}>{fullscreenButton}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
