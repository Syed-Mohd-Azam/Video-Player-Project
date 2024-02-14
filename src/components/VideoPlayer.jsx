import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useRef } from "react";
import { RiFullscreenFill } from "react-icons/ri";
import { BiSolidVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
const VideoPlayer = () => {
  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      if (playerRef.current) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 1000);
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const playerRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useSearchParams();
  const videoId = search.get("v");
  console.log(videoId);
  const youtubeConfig = {
    playerVars: {
      modestbranding: 1,
      showinfo: 0,
    },
  };

  const handleVolumeChange = (newVolume) => {
    if (newVolume === 0) {
      setMuted(true);
    }
    setVolume(newVolume);
  };

  const handleFullScreen = () => {
    if (!isFullScreen) {
      // Enter full screen
      if (playerRef.current) {
        const playerContainer = playerRef.current.wrapper;
        if (playerContainer.requestFullscreen) {
          playerContainer.requestFullscreen();
        } else if (playerContainer.mozRequestFullScreen) {
          playerContainer.mozRequestFullScreen();
        } else if (playerContainer.webkitRequestFullscreen) {
          playerContainer.webkitRequestFullscreen();
        } else if (playerContainer.msRequestFullscreen) {
          playerContainer.msRequestFullscreen();
        }
        setIsFullScreen(true);
      }
    } else {
      // Exit full screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };
  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };
  const handleMuteToggle = () => {
    setMuted(!muted);

    if (!muted) {
      setVolume(0);
    } else {
      setVolume(0.5);
    }
  };
  const handleDuration = (duration) => {
    setDuration(duration);
  };
  const handleSeek = (seconds) => {
    if (playerRef.current) {
      // Get the current playback time of the video
      const currentTime = playerRef.current.getCurrentTime();

      // Seek to a new position by adding the specified number of seconds to the current time
      playerRef.current.seekTo(currentTime + seconds);
    }
  };
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };
  return (
    <>
      <section className="w-4/5 lg:w-3/5 mx-auto flex flex-col justify-center items-center py-10">
        <ReactPlayer
          className="h-8 md:h-28 lg:h-auto hover:cursor-pointer"
          url={"https://www.youtube.com/watch?v=" + videoId}
          ref={playerRef}
          volume={volume}
          controls={false}
          config={youtubeConfig}
          playing={isPlaying}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
        <section className="bg-purple-50 rounded-xl w-full p-5 mt-2 flex justify-between">
          <article className="flex gap-2 justify-center items-center">
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <CiPause1 className="text-sky-700 w-6 h-6" />
              ) : (
                <CiPlay1 className="text-sky-700 w-6 h-6" />
              )}
            </button>
            <MdOutlineKeyboardDoubleArrowLeft
              className="w-6 h-6 text-sky-700 hover:cursor-pointer"
              onClick={() => handleSeek(-10)}
            />
            <MdOutlineKeyboardDoubleArrowRight
              className="w-6 h-6 text-sky-700 hover:cursor-pointer"
              onClick={() => handleSeek(10)}
            />
            <span className="text-sky-700 font-semibold">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <button onClick={handleMuteToggle} className="px-2">
              {muted ? (
                <BiSolidVolumeMute className="text-sky-700 w-6 h-6" />
              ) : (
                <GoUnmute className="text-sky-700 w-6 h-6" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            />
          </article>
          <article>
            <RiFullscreenFill
              className="text-sky-700 w-6 h-6 hover:cursor-pointer"
              onClick={() => handleFullScreen()}
            />
          </article>
        </section>
      </section>
    </>
  );
};
export default VideoPlayer;
