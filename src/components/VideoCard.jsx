import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const VideoCard = ({
  video: {
    id,
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
          <Link to={"/watch?v=" + id}>
            <img
              className=" rounded-xl hover:cursor-pointer hover:scale-90"
              src={url}
              alt="Video-Image"
            />
          </Link>
        </article>
        <article className="w-full h-1/2 px-5 py-3 bg-purple-50 rounded-xl flex flex-col  justify-center hover:scale-110 hover:cursor-pointer">
          <h1 className="pb-2 italic text-md md:text-xl lg:text-2xl font-semibold">
            {channelTitle}
          </h1>
          <h1 className="text-sm italic md:text-md lg:text-lg">{title}</h1>
        </article>
      </section>
    </>
  );
};
export default VideoCard;
