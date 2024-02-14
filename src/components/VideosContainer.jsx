/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import VideoCard from "./VideoCard";
// eslint-disable-next-line no-unused-vars
const VideosContainer = ({ filterVideos }) => {
  return (
    <>
      <section className="flex flex-wrap gap-8 justify-center items-center pb-20 pt-10">
        {filterVideos?.map((video) => (
          <VideoCard key={video?.id} video={video} />
        ))}
      </section>
    </>
  );
};
export default VideosContainer;
