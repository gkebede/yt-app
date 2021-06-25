import React from "react";
import './VideoItem.css';
import VideoList from "./VideoList";

const VideoItem = ({ video, onVideoSelect }) => {
  //  console.log(item)

  return (
    <div onClick={() => {onVideoSelect(video)}} 
          className="VideoItem-item item">
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
