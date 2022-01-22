import React, { useRef } from "react";
import "./VideoApp.scss";

import video from "./Lecture.mp4";
import VideoPlayer from "./VideoPlayer";
import {FaPlay,FaPause,FaVolumeMute,FaVolumeUp} from "react-icons/fa";

// This Function is to call the Video Player from study course page
const VideoApp = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = VideoPlayer(videoElement);
  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          // src="https://www.youtube.com/watch?v=VxUh4Va1MV4"
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play"><FaPlay /></i>
              ) : (
                <i className="bx bx-pause"><FaPause /></i>
              )}
              {/* {playerState.isPlaying} */}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity velocity_color"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <div className="actions">
          <button onClick={toggleMute}>
              {!playerState.isMuted ? (
                <i className="mute-btn"><FaVolumeUp /></i>
              ) : (
                <i className="mute-btn"><FaVolumeMute /></i>
              )}
              {/* {playerState.isPlaying} */}
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoApp;