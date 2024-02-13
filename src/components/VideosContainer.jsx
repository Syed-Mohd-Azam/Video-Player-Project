/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import VideoCard from "./VideoCard";
const VideosContainer = ({ videos: { items } }) => {
  return (
    <>
      <section className="flex flex-wrap gap-8 justify-center items-center pb-20 pt-10">
        {items.map((item) => (
          <VideoCard key={item?.id} item={item} />
        ))}
      </section>
    </>
  );
};
export default VideosContainer;
