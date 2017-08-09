import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
// video above, is equal to declaring a new variable equal to props.video
// from videolist
  const imageURL = video.snippet.thumbnails.default.url
  const videoHeading = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ imageURL } />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {videoHeading}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
