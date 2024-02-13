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
      <section className="  gap-3 w-80 h-96 mt-6">
        <article className="w-full h-1/2">
          <img
            className=" rounded-xl hover:cursor-pointer"
            src={url}
            alt="Video-Image"
          />
        </article>
        <article className="w-full h-1/2 px-5 py-3 bg-purple-50 rounded-xl flex flex-col  justify-center">
          <h1 className="pb-2 italic text-lg md:text-xl lg:text-2xl font-semibold">
            {channelTitle}
          </h1>
          <h1 className=" italic md:text-md lg:text-lg">{title}</h1>
        </article>
      </section>
    </>
  );
};
export default VideoCard;
