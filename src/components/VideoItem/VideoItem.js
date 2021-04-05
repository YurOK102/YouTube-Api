import React from 'react';
import { connect } from 'react-redux';

import './video-item.css';

const VideoItem = ({ video, handleVideoSelect, toggle }) => {
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      className={toggle === 1 ? ' video__item_underline' : ' video__item_line'}
    >
      <img
        className={
          toggle === 1
            ? ' video__item_images_underline'
            : ' video__item_images_line'
        }
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div
        className={
          toggle === 1
            ? ' video__item_text_underline'
            : ' video__item_text_line'
        }
      >
        {video.snippet.title}{' '}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  toggle: state.toggleReducer.toggle,
});

export default connect(mapStateToProps, null)(VideoItem);

// export default VideoItem;
