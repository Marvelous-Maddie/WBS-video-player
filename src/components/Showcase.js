import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import SideBar from './Sidebar';

const Showcase = () => {
  const [currentVideo, setCurrentVideo] = useState(
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  );
  return (
    <div className='container grid-4-2'>
      <VideoPlayer src={currentVideo} />
      <div className='grid-3'>
        <SideBar setCurrentVideo={setCurrentVideo} />
      </div>
    </div>
  );
};

export default Showcase;
