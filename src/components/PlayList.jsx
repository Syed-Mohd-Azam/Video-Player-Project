/* eslint-disable react/prop-types */
import Shimmer from "./Shimmer";
import VideosContainer from "./VideosContainer";
// eslint-disable-next-line no-unused-vars
const PlayList = ({ videos, filterVideos }) => {
  console.log(filterVideos);
  return (
    <section>
      <article className="py-5 flex justify-center items-center">
        <h1 className="italic lg:text-5xl text-4xl text-blue-500 pt-10 pb-5">
          {" "}
          PlayList !!
        </h1>
      </article>
      <article>
        {videos?.length === 0 ? (
          <>
            <Shimmer />
          </>
        ) : (
          <>
            <VideosContainer filterVideos={filterVideos} />
          </>
        )}
      </article>
    </section>
  );
};
export default PlayList;
