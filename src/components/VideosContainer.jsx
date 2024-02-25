/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import VideoWrapper from "./VideoWrapper";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
const VideosContainer = ({ filterVideos }) => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    setVideoList(filterVideos || []);
  }, [filterVideos]);
  const moveVideo = (dragIndex, hoverIndex) => {
    setVideoList((prevVideoList) => {
      const newVideoList = [...prevVideoList];

      // Swap the positions of the dragged video and the video at the drop location
      [newVideoList[dragIndex], newVideoList[hoverIndex]] = [
        newVideoList[hoverIndex],
        newVideoList[dragIndex],
      ];

      return newVideoList;
    });
  };
  return (
    <>
      <section className="flex flex-wrap gap-8 justify-center items-center pb-20 pt-10 px-1">
        {videoList?.map((video, index) => (
          <VideoWrapper
            key={video?.id}
            video={video}
            index={index}
            moveVideo={moveVideo}
          />
        ))}
      </section>
    </>
  );
};
export default VideosContainer;
