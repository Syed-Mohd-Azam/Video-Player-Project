/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import VideoCard from "./VideoCard";
const VideosContainer = ({ videos }) => {
  console.log(videos);
  return (
    <>
      <section className="flex flex-wrap gap-8 justify-center items-center pb-20 pt-10">
        {videos?.map((video) => (
          <VideoCard key={video?.id} video={video} />
        ))}
      </section>
    </>
  );
};
export default VideosContainer;
