import React from 'react';

const movies = [
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    title: 'Elephant Dream'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    title: 'For Bigger Blazes'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    title: 'For Bigger Escape'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    title: 'For Bigger Fun'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    title: 'For Bigger Joyrides'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    title: 'For Bigger Meltdowns'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    title: 'Sintel'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    title: 'Subaru Outback On Street And Dirt'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    title: 'Tears of Steel'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg',
    title: 'Volkswagen GTI Review'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg',
    title: 'We Are Going On Bullrun'
  },
  {
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg',
    title: 'What care can you get for a grand?'
  }
];

const Sidebar = ({ setCurrentVideo }) => {
  const handleClick = e => {
    setCurrentVideo(e.currentTarget.getAttribute('data-url'));
  };
  return movies.map(movie => {
    return (
      <img
        className='pointer'
        key={movie.title}
        width='100px'
        src={movie.thumb}
        alt={movie.title}
        data-url={movie.sources}
        onClick={e => handleClick(e)}
      />
    );
  });
};

export default Sidebar;
