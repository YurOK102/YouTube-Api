import React from 'react';

import './video-detail.css';

const Videoplayer = ({ video }) => {
  if (!video) {
    return null;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div className="video">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="description">
        <h4 className="description__title">{video.snippet.title}</h4>
      </div>
    </>
  );
};

export default Videoplayer;
