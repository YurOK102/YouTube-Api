import React from 'react';
import { connect } from 'react-redux';

import VideoItem from '../VideoItem/VideoItem';

import './video-list.css';

const VideoList = ({ videos, handleVideoSelect, toggle, video }) => {
  const renderedVideos = videos.map((video, index) => {
    return (
      <VideoItem
        key={index}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return (
    <div className={toggle === 1 ? ' content__underline' : ' content__line'}>
      {renderedVideos}
    </div>
  );
};

const mapStateToProps = (state) => ({
  toggle: state.toggleReducer.toggle,
});

export default connect(mapStateToProps, null)(VideoList);

// export default VideoList;
