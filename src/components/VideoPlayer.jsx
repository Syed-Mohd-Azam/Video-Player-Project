import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { BsToggleOn } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { BsToggleOff } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useRef } from "react";
import { RiFullscreenFill } from "react-icons/ri";
import { BiSolidVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../utils/darkSlice";
const VideoPlayer = () => {
  const dark = useSelector((state) => state?.dark?.darkMode);
  const dispatch = useDispatch();
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
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(0.5);
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
    youtube: {
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 0,
        rel: 0,
        showinfo: 0,
      },
    },
  };
  const handleToggle = () => {
    dispatch(toggleMode());
  };
  const handleVolumeChange = (newVolume) => {
    if (newVolume === 0) {
      setMuted(true);
    } else {
      setVolume(newVolume);
      setMuted(false);
    }
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
  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    playerRef.current.playbackRate = newSpeed;
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
  const handleEnded = () => {
    setIsPlaying(false);
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
      <section className="container mx-auto flex flex-col justify-center items-center py-10">
        <section className="w-full  mb-4 text-white flex justify-end px-5 items-center">
          {dark ? (
            <>
              <article className="flex gap-4">
                <BsToggleOn
                  className="w-8 h-8 text-blue-400"
                  onClick={handleToggle}
                />
                <FaRegMoon className="w-8 h-8 text-blue-400" />
              </article>
            </>
          ) : (
            <>
              <article className="flex gap-4">
                <BsToggleOff
                  className="w-8 h-8 text-black"
                  onClick={handleToggle}
                />
                <IoSunnyOutline className="w-8 h-8 text-black" />
              </article>
            </>
          )}
        </section>
        <section className=" w-full lg:container ">
          <ReactPlayer
            className="w-4/5 md:w-3/5 lg:h-96 sm:h-72 h-48 container mx-auto  hover:cursor-pointer "
            url={"https://www.youtube.com/watch?v=" + videoId}
            ref={playerRef}
            width=""
            height=""
            volume={volume}
            controls={false}
            config={youtubeConfig}
            playing={isPlaying}
            onProgress={handleProgress}
            onDuration={handleDuration}
            muted={muted}
            playbackRate={speed}
            onEnded={handleEnded}
          />
        </section>
        <section className="bg-purple-50 container mx-auto rounded-xl w-4/5 md:w-4/5 lg:w-3/5 p-5 mt-2 flex gap-2 items-center justify-center">
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <CiPause1 className="text-sky-700 md:w-6 md:h-6 w-3 h-3" />
            ) : (
              <CiPlay1 className="text-sky-700 md:w-6 md:h-6 h-3 w-3" />
            )}
          </button>
          <MdOutlineKeyboardDoubleArrowLeft
            className="md:w-6 md:h-6 w-5 h-5 text-sky-700 hover:cursor-pointer"
            onClick={() => handleSeek(-10)}
          />
          <MdOutlineKeyboardDoubleArrowRight
            className="md:w-6 md:h-6 w-5 h-5 text-sky-700 hover:cursor-pointer"
            onClick={() => handleSeek(10)}
          />
          <span className="hidden text-sky-700 font-semibold sm:block sm:text-xs md:text-base">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <button onClick={handleMuteToggle} className="px-2">
            {muted ? (
              <BiSolidVolumeMute className="text-sky-700 w-3 h-3 lg:w-6 lg:h-6" />
            ) : (
              <GoUnmute className="text-sky-700 lg:w-6 lg:h-6 w-3 h-3" />
            )}
          </button>
          <input
            className="hover:cursor-pointer hidden md:block"
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          />
          <article className="flex flex-row gap-2 justify-center items-center">
            <IoPlaySkipForwardSharp className="md:w-6 md:h-6 w-3 h-3 text-sky-700" />
            <select
              className="text-sky-700 font-semibold border-none outline-none rounded-xl p-1"
              value={speed}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
            >
              <option value={0.5}>0.5x</option>
              <option value={0.75}>0.75x</option>
              <option value={1}>1x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
              <option value={2.5}>2.5x</option>
              <option value={3}>3x</option>
            </select>
          </article>
          <RiFullscreenFill
            className="text-sky-700 md:w-6 md:h-6 h-6 w-6 hover:cursor-pointer ml-2"
            onClick={() => handleFullScreen()}
          />
        </section>
      </section>
    </>
  );
};
export default VideoPlayer;
