import React, { useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 10;
  };

  const fastForwardVideo = () => {
    videoRef.current.currentTime += 10;
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
  };

  return (
    <div>
      <video ref={videoRef} width="600" controls>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={stopVideo}>Stop</button>
        <button onClick={rewindVideo}>Rewind 10s</button>
        <button onClick={fastForwardVideo}>Fast-Forward 10s</button>
        <button onClick={toggleMute}>Mute/Unmute</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}
