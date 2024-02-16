/* eslint-disable react/prop-types */
import { useDrag, useDrop } from "react-dnd";
import VideoCard from "./VideoCard";
const VideoWrapper = ({ index, video, moveVideo }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "VIDEO",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "VIDEO",
    hover: (item) => {
      if (item.index !== index) {
        moveVideo(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <VideoCard video={video} />
    </div>
  );
};
export default VideoWrapper;
