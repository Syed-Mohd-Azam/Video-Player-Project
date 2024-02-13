/* eslint-disable react/prop-types */
const VideoCard = ({
  item: {
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
      channelTitle,
    },
  },
}) => {
  return (
    <>
      <section className="w-80 h-auto border-1 ">
        <article>
          <img
            className="w-full h-2/5 rounded-xl hover:cursor-pointer"
            src={url}
            alt="Video-Image"
          />
        </article>
        <article className="w-full h-3/5 p-3">
          <h1>{channelTitle}</h1>
          <h1>{title}</h1>
        </article>
      </section>
    </>
  );
};
export default VideoCard;
